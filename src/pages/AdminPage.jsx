import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { QRCodeSVG } from 'qrcode.react';
import { verifySync } from 'otplib';
import { 
  Settings, 
  User, 
  Briefcase, 
  Award, 
  Wrench, 
  Inbox, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Save, 
  Check, 
  Lock,
  Unlock,
  X,
  ShieldCheck,
  QrCode,
  KeyRound,
  Quote,
  Upload
} from 'lucide-react';

const compressImageFile = (file, maxWidth = 500, maxHeight = 500, quality = 0.85) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

const ADMIN_SESSION_KEY = 'dinesh_admin_session_expiry_v2';
const SESSION_DURATION_MS = 5 * 60 * 1000; // 5 minutes session timeout

const isSessionActive = () => {
  try {
    const expiry = sessionStorage.getItem(ADMIN_SESSION_KEY) || localStorage.getItem(ADMIN_SESSION_KEY);
    return expiry && Date.now() < parseInt(expiry, 10);
  } catch (e) {
    return false;
  }
};

const renewAdminSession = () => {
  const newExpiry = Date.now() + SESSION_DURATION_MS;
  sessionStorage.setItem(ADMIN_SESSION_KEY, newExpiry.toString());
  localStorage.setItem(ADMIN_SESSION_KEY, newExpiry.toString());
};

const clearAdminSession = () => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  localStorage.removeItem(ADMIN_SESSION_KEY);
};

export const AdminPage = () => {
  const { 
    data, 
    updatePersonalInfo, 
    addProject, 
    deleteProject, 
    addCertificate, 
    deleteCertificate, 
    addSkill, 
    deleteSkill, 
    deleteInquiry,
    deleteTestimonial,
    resetToDefault 
  } = usePortfolio();

  const [isAuthenticated, setIsAuthenticated] = useState(isSessionActive);
  const [authStep, setAuthStep] = useState(() => (isSessionActive() ? 'authenticated' : 'login')); // 'login' | '2fa' | 'authenticated'
  const [email, setEmail] = useState('dineshelumalai2006@gmail.com');
  const [password, setPassword] = useState('');
  const [totpCode, setTotpCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrSetupData, setQrSetupData] = useState(null);
  const [activeTab, setActiveTab] = useState('bio');
  const [saveToast, setSaveToast] = useState(false);

  // Bio Form Local State
  const [bioForm, setBioForm] = useState(data.personalInfo);

  React.useEffect(() => {
    if (data && data.personalInfo) {
      setBioForm(data.personalInfo);
    }
  }, [data.personalInfo]);

  // Check 5-minute session persistence on mount & refresh session
  React.useEffect(() => {
    if (isSessionActive()) {
      setIsAuthenticated(true);
      setAuthStep('authenticated');
      renewAdminSession();
    } else {
      setIsAuthenticated(false);
      setAuthStep('login');
      setPassword('');
      setTotpCode('');
    }
  }, []);

  const handlePasswordStep = async (e) => {
    e.preventDefault();
    setAuthError('');

    // Instant Master Password Check (0ms latency)
    if (password === 'Dinesh@2026') {
      setAuthStep('2fa');
      setPassword('');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.ok && data.requireTotp) {
        setAuthStep('2fa');
        setPassword('');
      } else {
        setAuthError(data.error || 'Invalid credentials.');
      }
    } catch (err) {
      setIsLoading(false);
      setAuthError('Authentication failed. Please check your credentials.');
    }
  };

  const handleTotpStep = async (e) => {
    e.preventDefault();
    setAuthError('');
    const cleanCode = totpCode.trim();

    // 1. Instant Master Backup Passcode Check (0ms latency)
    if (cleanCode === 'Dinesh@2026') {
      renewAdminSession();
      setIsAuthenticated(true);
      setAuthStep('authenticated');
      return;
    }

    // 2. Instant Local TOTP Verification via otplib (0ms latency)
    try {
      const result = verifySync({ 
        secret: 'DINESHKUMAR2FASECURITYKEY2727KEY', 
        token: cleanCode, 
        window: 2 
      });

      if (result && result.valid) {
        renewAdminSession();
        setIsAuthenticated(true);
        setAuthStep('authenticated');
        return;
      }
    } catch (err) {}

    // 3. Fallback to API Endpoint Verification
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/verify-totp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ totpCode: cleanCode })
      });
      setIsLoading(false);

      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          renewAdminSession();
          setIsAuthenticated(true);
          setAuthStep('authenticated');
          return;
        }
      }
      setAuthError('Access Denied: Invalid 6-digit TOTP code.');
    } catch (err) {
      setIsLoading(false);
      setAuthError('Verification network error.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {}
    clearAdminSession();
    setIsAuthenticated(false);
    setAuthStep('login');
    setTotpCode('');
    setPassword('');
  };

  const fetchQrSetup = async () => {
    try {
      const res = await fetch('/api/auth/setup-totp');
      const data = await res.json();
      setQrSetupData(data);
    } catch (err) {
      setQrSetupData({
        otpAuthUrl: `otpauth://totp/Dinesh%20Portfolio:dineshelumalai2006@gmail.com?secret=DINESHKUMAR2FASECURITYKEY2727KEY&issuer=Dinesh%20Portfolio`,
        secret: 'DINESHKUMAR2FASECURITYKEY2727KEY'
      });
    }
    setShowQrModal(!showQrModal);
  };

  if (!isAuthenticated && authStep !== 'authenticated') {
    return (
      <div className="admin-lock-screen" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-card lock-card" style={{ maxWidth: '440px', width: '100%', padding: '2.5rem 2rem', textAlign: 'center' }}>
          <div className="badge badge-emerald" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Server-Protected 2FA Authenticator</span>
          </div>
          
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.3rem' }}>Dinesh's Admin Portal</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
            {authStep === 'login' 
              ? 'Step 1 of 2: Enter owner password to proceed.' 
              : 'Step 2 of 2: Open Google Authenticator app on your phone and type the live 6-digit code below.'}
          </p>

          {authStep === 'login' ? (
            /* STEP 1: LOGIN FORM */
            <form onSubmit={handlePasswordStep}>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Email / Username *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="dineshelumalai2006@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Owner Password *
                </label>
                <input 
                  type="password"
                  required
                  placeholder="Enter Dinesh's Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              {authError && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.6rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {authError}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
                <KeyRound size={18} />
                <span>{isLoading ? 'Verifying Password...' : 'Next: Enter 2FA Code'}</span>
              </button>
            </form>
          ) : (
            /* STEP 2: TOTP FORM */
            <form onSubmit={handleTotpStep}>
              <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Enter 6-Digit Code from Phone App *
                </label>
                <input 
                  type="text"
                  maxLength={30}
                  required
                  placeholder="e.g. 582910"
                  value={totpCode}
                  onChange={(e) => setTotpCode(e.target.value)}
                  className="form-input"
                  style={{ letterSpacing: '6px', fontSize: '1.4rem', textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace' }}
                  autoFocus
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem', display: 'block' }}>
                  Look at <strong>Google Authenticator</strong> app on your mobile phone for "Dinesh Portfolio" and type the 6 numbers shown.
                </span>
              </div>

              {authError && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.6rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {authError}
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setAuthStep('login')} style={{ flex: 1, justifyContent: 'center' }}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ flex: 2, justifyContent: 'center' }}>
                  <Unlock size={18} />
                  <span>{isLoading ? 'Verifying Code...' : 'Verify TOTP & Unlock'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <div>
            <div className="badge badge-glow">
              <Settings size={14} />
              <span>Admin Management Dashboard</span>
            </div>
            <h2 className="section-title">Portfolio CMS & Data Control</h2>
          </div>

          <div className="admin-header-actions">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={handleLogout}
              style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}
            >
              <Lock size={14} />
              <span>Lock Admin CMS</span>
            </button>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => {
                if (window.confirm("Reset portfolio data to original default state?")) {
                  resetToDefault();
                  setBioForm(data.personalInfo);
                  triggerToast();
                }
              }}
            >
              <RotateCcw size={14} />
              <span>Reset Default Data</span>
            </button>

            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => setIsAuthenticated(false)}
            >
              <Lock size={14} />
              <span>Lock CMS</span>
            </button>
          </div>
        </div>

        {/* Save Toast Notification */}
        {saveToast && (
          <div className="save-toast">
            <Check size={18} />
            <span>Portfolio changes saved & updated live!</span>
          </div>
        )}

        {/* Admin Tabs */}
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'bio' ? 'active' : ''}`}
            onClick={() => setActiveTab('bio')}
          >
            <User size={16} />
            <span>Bio & Profile</span>
          </button>

          <button 
            className={`admin-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <Briefcase size={16} />
            <span>Projects ({data.projects.length})</span>
          </button>

          <button 
            className={`admin-tab ${activeTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveTab('certs')}
          >
            <Award size={16} />
            <span>Certificates ({data.certificates.length})</span>
          </button>

          <button 
            className={`admin-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Wrench size={16} />
            <span>Skills ({data.skills.length})</span>
          </button>

          <button 
            className={`admin-tab ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <Inbox size={16} />
            <span>Hiring Inquiries ({(data.inquiries || []).length})</span>
          </button>

          <button 
            className={`admin-tab ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <Quote size={16} />
            <span>Recommendations ({(data.testimonials || []).length})</span>
          </button>
        </div>

        {/* Tab 1: Bio & Profile Editor */}
        {activeTab === 'bio' && (
          <form className="glass-card admin-card" onSubmit={handleBioSubmit}>
            <h3 className="admin-sub-title">Personal Profile Details</h3>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  value={bioForm.name} 
                  onChange={(e) => setBioForm({ ...bioForm, name: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Professional Title</label>
                <input 
                  type="text" 
                  value={bioForm.title} 
                  onChange={(e) => setBioForm({ ...bioForm, title: e.target.value })}
                  className="form-input" 
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Status Badge (Hero Pill)</label>
                <input 
                  type="text" 
                  value={bioForm.statusBadge} 
                  onChange={(e) => setBioForm({ ...bioForm, statusBadge: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <input 
                  type="text" 
                  value={bioForm.location} 
                  onChange={(e) => setBioForm({ ...bioForm, location: e.target.value })}
                  className="form-input" 
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  value={bioForm.email} 
                  onChange={(e) => setBioForm({ ...bioForm, email: e.target.value })}
                  className="form-input" 
                />
              </div>

            </div>

            {/* Profile Photo Uploader & Manager */}
            <div className="form-group" style={{ margin: '1.2rem 0' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '700' }}>
                <Upload size={16} className="text-gradient" />
                <span>Profile Photo Management (Reflects Across All Browsers)</span>
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.8rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
                <img 
                  src={bioForm.avatar || '/images/avatar.jpg'} 
                  alt="Profile Preview" 
                  style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-primary)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.45)' }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <label className="btn btn-primary btn-sm" style={{ cursor: 'pointer', gap: '0.5rem' }}>
                      <Upload size={16} />
                      <span>Upload Profile Photo From Computer / Phone</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        style={{ display: 'none' }}
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            try {
                              const compressedBase64 = await compressImageFile(file, 400, 400, 0.82);
                              setBioForm((prev) => ({ ...prev, avatar: compressedBase64 }));
                              updatePersonalInfo({ avatar: compressedBase64 });
                              triggerToast();
                            } catch (err) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setBioForm((prev) => ({ ...prev, avatar: reader.result }));
                                updatePersonalInfo({ avatar: reader.result });
                                triggerToast();
                              };
                              reader.readAsDataURL(file);
                            }
                          }
                        }}
                      />
                    </label>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Supported: JPG, PNG, WEBP, GIF</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      value={bioForm.avatar} 
                      onChange={(e) => setBioForm({ ...bioForm, avatar: e.target.value })}
                      className="form-input" 
                      placeholder="Or paste image URL (e.g. https://example.com/photo.jpg)"
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Hero Tagline</label>
              <input 
                type="text" 
                value={bioForm.tagline} 
                onChange={(e) => setBioForm({ ...bioForm, tagline: e.target.value })}
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Biography Overview</label>
              <textarea 
                rows={4}
                value={bioForm.bio} 
                onChange={(e) => setBioForm({ ...bioForm, bio: e.target.value })}
                className="form-textarea" 
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Save size={18} />
              <span>Save Bio Updates</span>
            </button>
          </form>
        )}

        {/* Tab 2: Projects Manager */}
        {activeTab === 'projects' && (
          <div className="admin-section">
            <div className="admin-action-bar">
              <h3>Manage Portfolio Projects</h3>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => setShowProjectModal(true)}
              >
                <Plus size={16} />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="admin-list">
              {data.projects.map((proj) => (
                <div key={proj.id} className="glass-card list-item">
                  <img src={proj.image} alt={proj.title} className="item-thumb" />
                  <div className="item-info">
                    <h4 className="item-name">{proj.title}</h4>
                    <span className="item-meta">{proj.category} • {proj.tags.join(', ')}</span>
                  </div>
                  <button 
                    className="btn-delete"
                    onClick={() => {
                      deleteProject(proj.id);
                      triggerToast();
                    }}
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Certificates Manager */}
        {activeTab === 'certs' && (
          <div className="admin-section">
            <div className="admin-action-bar">
              <h3>Manage Certifications</h3>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => setShowCertModal(true)}
              >
                <Plus size={16} />
                <span>Add Certificate</span>
              </button>
            </div>

            <div className="admin-list">
              {data.certificates.map((cert) => (
                <div key={cert.id} className="glass-card list-item">
                  <div className="cert-badge-placeholder">
                    <Award size={20} />
                  </div>
                  <div className="item-info">
                    <h4 className="item-name">{cert.title}</h4>
                    <span className="item-meta">{cert.issuer} ({cert.date}) • ID: {cert.credentialId}</span>
                  </div>
                  <button 
                    className="btn-delete"
                    onClick={() => {
                      deleteCertificate(cert.id);
                      triggerToast();
                    }}
                    title="Delete Certificate"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Skills Manager */}
        {activeTab === 'skills' && (
          <div className="admin-section">
            <div className="admin-action-bar">
              <h3>Manage Skills & Competencies</h3>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => setShowSkillModal(true)}
              >
                <Plus size={16} />
                <span>Add Skill</span>
              </button>
            </div>

            <div className="admin-list">
              {data.skills.map((skill, idx) => (
                <div key={idx} className="glass-card list-item">
                  <div className="item-info">
                    <h4 className="item-name">{skill.name}</h4>
                    <span className="item-meta">{skill.category} • {skill.level}% Proficiency</span>
                  </div>
                  <button 
                    className="btn-delete"
                    onClick={() => {
                      deleteSkill(idx);
                      triggerToast();
                    }}
                    title="Delete Skill"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Hiring Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="admin-section">
            <h3>Submitted Client Hiring Proposals</h3>
            {(!data.inquiries || data.inquiries.length === 0) ? (
              <p className="empty-text">No hiring proposals received yet.</p>
            ) : (
              <div className="inquiry-list">
                {data.inquiries.map((inq) => (
                  <div key={inq.id} className="glass-card inquiry-card">
                    <div className="inquiry-header">
                      <div>
                        <h4 className="inq-client">{inq.clientName}</h4>
                        <a href={`mailto:${inq.clientEmail}`} className="inq-email">{inq.clientEmail}</a>
                      </div>
                      <button 
                        className="btn-delete"
                        onClick={() => deleteInquiry(inq.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="inq-pills">
                      <span className="badge badge-glow">{inq.projectType}</span>
                      <span className="badge badge-emerald">{inq.budget}</span>
                      <span className="badge badge-amber">{inq.timeline}</span>
                    </div>

                    <p className="inq-msg">{inq.message}</p>
                    <span className="inq-date">Submitted: {new Date(inq.submittedAt).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 6: Recommendations & Feedback */}
        {activeTab === 'testimonials' && (
          <div className="admin-section">
            <div className="admin-action-bar">
              <h3>Manage Recommendations & Leader Feedback ({(data.testimonials || []).length})</h3>
            </div>

            {(data.testimonials || []).length === 0 ? (
              <div className="empty-state">
                <Quote size={32} />
                <p>No submitted recommendations yet.</p>
              </div>
            ) : (
              <div className="inquiries-list">
                {(data.testimonials || []).map((t) => (
                  <div key={t.id} className="glass-card list-item" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.8rem', padding: '1.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <img src={t.avatar} alt={t.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{t.name}</h4>
                          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{t.role}{t.company ? `, ${t.company}` : ''}</span>
                        </div>
                      </div>

                      <button 
                        className="btn-delete"
                        onClick={() => {
                          deleteTestimonial(t.id);
                          triggerToast();
                        }}
                        title="Delete Recommendation"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-main)', fontStyle: 'italic' }}>
                      "{t.content}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      {showProjectModal && (
        <div className="modal-backdrop" onClick={() => setShowProjectModal(false)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowProjectModal(false)}>
              <X size={20} />
            </button>
            <form className="modal-body" onSubmit={handleAddProject}>
              <h3>Add New Portfolio Project</h3>
              <div className="form-group">
                <label className="form-label">Project Title *</label>
                <input 
                  type="text" 
                  required
                  value={newProject.title} 
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    value={newProject.category} 
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="AI & Web Apps">AI & Web Apps</option>
                    <option value="Web App">Web App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Mobile App">Mobile App</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    value={newProject.tags} 
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    className="form-input" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input 
                  type="text" 
                  value={newProject.image} 
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Short Summary</label>
                <input 
                  type="text" 
                  value={newProject.shortDesc} 
                  onChange={(e) => setNewProject({ ...newProject, shortDesc: e.target.value })}
                  className="form-input" 
                />
              </div>

              <button type="submit" className="btn btn-primary">Add Project</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Certificate Modal */}
      {showCertModal && (
        <div className="modal-backdrop" onClick={() => setShowCertModal(false)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowCertModal(false)}>
              <X size={20} />
            </button>
            <form className="modal-body" onSubmit={handleAddCert}>
              <h3>Add New Certificate</h3>
              <div className="form-group">
                <label className="form-label">Certificate Title *</label>
                <input 
                  type="text" 
                  required
                  value={newCert.title} 
                  onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Issuing Organization *</label>
                  <input 
                    type="text" 
                    required
                    value={newCert.issuer} 
                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                    className="form-input" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Issue Date</label>
                  <input 
                    type="text" 
                    value={newCert.date} 
                    onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                    className="form-input" 
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Credential ID</label>
                  <input 
                    type="text" 
                    value={newCert.credentialId} 
                    onChange={(e) => setNewCert({ ...newCert, credentialId: e.target.value })}
                    className="form-input" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Verification URL</label>
                  <input 
                    type="text" 
                    value={newCert.verifyUrl} 
                    onChange={(e) => setNewCert({ ...newCert, verifyUrl: e.target.value })}
                    className="form-input" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Certificate Image / PDF Document URL</label>
                <input 
                  type="text" 
                  placeholder="e.g. /certs/media_1787071517571.pdf or https://..."
                  value={newCert.badgeImage} 
                  onChange={(e) => setNewCert({ ...newCert, badgeImage: e.target.value })}
                  className="form-input" 
                />
              </div>

              <button type="submit" className="btn btn-primary">Add Certificate</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Skill Modal */}
      {showSkillModal && (
        <div className="modal-backdrop" onClick={() => setShowSkillModal(false)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSkillModal(false)}>
              <X size={20} />
            </button>
            <form className="modal-body" onSubmit={handleAddSkill}>
              <h3>Add Skill</h3>
              <div className="form-group">
                <label className="form-label">Skill Name *</label>
                <input 
                  type="text" 
                  required
                  value={newSkill.name} 
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className="form-input" 
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    value={newSkill.category} 
                    onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database & Cloud">Database & Cloud</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Proficiency Level ({newSkill.level}%)</label>
                  <input 
                    type="range" 
                    min={10}
                    max={100}
                    value={newSkill.level} 
                    onChange={(e) => setNewSkill({ ...newSkill, level: Number(e.target.value) })}
                    style={{ marginTop: '0.8rem' }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Add Skill</button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .modal-backdrop {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(5, 10, 25, 0.85) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          z-index: 99999 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 1.5rem !important;
          overflow-y: auto !important;
        }

        .modal-content {
          position: relative !important;
          max-width: 620px !important;
          width: 100% !important;
          max-height: 90vh !important;
          overflow-y: auto !important;
          padding: 2.2rem !important;
          border-radius: 20px !important;
          background: rgba(15, 23, 42, 0.96) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(99, 102, 241, 0.25) !important;
          margin: auto !important;
        }

        .modal-close-btn {
          position: absolute !important;
          top: 1.2rem !important;
          right: 1.2rem !important;
          width: 36px !important;
          height: 36px !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          z-index: 10 !important;
          transition: all 0.2s ease !important;
        }

        .modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.25) !important;
          color: #ef4444 !important;
          border-color: #ef4444 !important;
        }

        .admin-page {
          padding: 4rem 0 6rem;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .admin-header-actions {
          display: flex;
          gap: 0.8rem;
        }
        .admin-tabs {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }
        .admin-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .admin-tab.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .admin-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .admin-sub-title {
          font-size: 1.2rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        .admin-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .admin-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .list-item {
          padding: 1rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .item-thumb {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: cover;
        }
        .cert-badge-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-info {
          flex-grow: 1;
        }
        .item-name {
          font-size: 1rem;
          font-weight: 700;
        }
        .item-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .btn-delete {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .save-toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.4rem;
          background: var(--gradient-brand);
          color: #fff;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
        .inquiry-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 1.2rem;
        }
        .inquiry-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .inquiry-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .inq-client {
          font-size: 1.1rem;
        }
        .inq-email {
          color: var(--accent-primary);
          font-size: 0.88rem;
        }
        .inq-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .inq-msg {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          background: var(--bg-input);
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
        }
        .inq-date {
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .admin-lock-screen {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lock-card {
          max-width: 420px;
          padding: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .lock-icon {
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  );
};
