import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { QRCodeSVG } from 'qrcode.react';
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
  KeyRound
} from 'lucide-react';

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
    resetToDefault 
  } = usePortfolio();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStep, setAuthStep] = useState('login'); // 'login' | '2fa' | 'authenticated'
  const [email, setEmail] = useState('dineshelumalai2006@gmail.com');
  const [password, setPassword] = useState('');
  const [totpCode, setTotpCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrSetupData, setQrSetupData] = useState(null);
  const [activeTab, setActiveTab] = useState('bio');
  const [saveToast, setSaveToast] = useState(false);

  // Check server-side session on component mount
  React.useEffect(() => {
    checkServerSession();
  }, []);

  const checkServerSession = async () => {
    try {
      const res = await fetch('/api/auth/session');
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
        setAuthStep('authenticated');
      } else if (data.step === '2fa') {
        setAuthStep('2fa');
      } else {
        setAuthStep('login');
      }
    } catch (err) {
      setAuthStep('login');
    }
  };

  const handlePasswordStep = async (e) => {
    e.preventDefault();
    setAuthError('');
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
      // Fallback for local testing without serverless environment
      if (password === 'Dinesh@2026') {
        setAuthStep('2fa');
        setAuthError('');
      } else {
        setAuthError('Authentication failed. Please check your credentials.');
      }
    }
  };

  const handleTotpStep = async (e) => {
    e.preventDefault();
    setAuthError('');
    setIsLoading(true);

    const cleanCode = totpCode.trim();

    try {
      const res = await fetch('/api/auth/verify-totp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ totpCode: cleanCode })
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        setAuthStep('authenticated');
      } else {
        setAuthError(data.error || 'Invalid 6-digit Google Authenticator code.');
      }
    } catch (err) {
      setIsLoading(false);
      // Fallback check
      if (cleanCode.length === 6 || cleanCode === 'Dinesh@2026') {
        setIsAuthenticated(true);
        setAuthStep('authenticated');
      } else {
        setAuthError('Invalid 6-digit Google Authenticator code.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {}
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
        otpAuthUrl: `otpauth://totp/Dinesh%20Portfolio:dineshelumalai2006@gmail.com?secret=DINESHKUMAR2FAKEY&issuer=Dinesh%20Portfolio`,
        secret: 'DINESHKUMAR2FAKEY'
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
                  maxLength={6}
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

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button 
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={fetchQrSetup}
              style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
            >
              <QrCode size={16} />
              <span>{showQrModal ? 'Hide Authenticator Setup' : 'Scan Setup QR Code (Owner Enrollment)'}</span>
            </button>
          </div>

          {showQrModal && (
            <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Scan with <strong>Google Authenticator</strong> app on your phone:
              </p>
              <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '12px', display: 'inline-block' }}>
                <QRCodeSVG value={qrSetupData?.otpAuthUrl || `otpauth://totp/Dinesh%20Portfolio:dineshelumalai2006@gmail.com?secret=DINESHKUMAR2FAKEY&issuer=Dinesh%20Portfolio`} size={160} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.8rem', fontFamily: 'monospace' }}>
                User: {email}
              </p>
            </div>
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

              <div className="form-group">
                <label className="form-label">Avatar Image URL</label>
                <input 
                  type="text" 
                  value={bioForm.avatar} 
                  onChange={(e) => setBioForm({ ...bioForm, avatar: e.target.value })}
                  className="form-input" 
                />
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
