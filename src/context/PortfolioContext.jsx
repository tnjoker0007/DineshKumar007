import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultPortfolioData } from '../data/defaultData';

const PortfolioContext = createContext();

const LOCAL_STORAGE_KEY = 'dinesh_kumar_portfolio_v2';
const THEME_STORAGE_KEY = 'asma_portfolio_theme_v1';

const ensureDataDefaults = (raw) => {
  if (!raw || typeof raw !== 'object') return defaultPortfolioData;
  return {
    ...defaultPortfolioData,
    ...raw,
    personalInfo: { ...defaultPortfolioData.personalInfo, ...(raw.personalInfo || {}) },
    projects: Array.isArray(raw.projects) ? raw.projects : defaultPortfolioData.projects,
    certificates: Array.isArray(raw.certificates) ? raw.certificates : defaultPortfolioData.certificates,
    skills: Array.isArray(raw.skills) ? raw.skills : defaultPortfolioData.skills,
    experience: Array.isArray(raw.experience) ? raw.experience : defaultPortfolioData.experience,
    education: Array.isArray(raw.education) ? raw.education : defaultPortfolioData.education,
    services: Array.isArray(raw.services) ? raw.services : defaultPortfolioData.services,
    testimonials: Array.isArray(raw.testimonials) ? raw.testimonials : defaultPortfolioData.testimonials,
    inquiries: Array.isArray(raw.inquiries) ? raw.inquiries : defaultPortfolioData.inquiries
  };
};

export const PortfolioProvider = ({ children }) => {
  // Load initial data from localStorage or default with fail-safe defaults
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.personalInfo) return ensureDataDefaults(parsed);
      }
    } catch (e) {
      console.error("Failed to parse local storage data:", e);
    }
    return defaultPortfolioData;
  });

  // Helper to resolve initial page from browser URL
  const getInitialPageFromUrl = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    if (path.includes('certificat')) return 'certificates';
    if (path.includes('hire')) return 'hire';
    if (path.includes('admin')) return 'admin';
    return 'home';
  };

  // Active theme (dark/light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  });

  // Current page routing synced with browser URL: 'home', 'certificates', 'hire', 'admin'
  const [currentPage, setCurrentPageState] = useState(getInitialPageFromUrl);

  const setCurrentPage = (page) => {
    setCurrentPageState(page);
    if (typeof window !== 'undefined') {
      const targetPath = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
    }
  };

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getInitialPageFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Selected project modal state
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync global server data on mount & background sync every 15 seconds
  useEffect(() => {
    fetchGlobalData();

    // Non-intrusive background sync (15s) for optimal page speed and 0 latency
    const intervalId = setInterval(() => {
      fetchGlobalData();
    }, 15000);

    // Sync across tabs in the same browser via storage event
    const handleStorageChange = (e) => {
      if (e.key === LOCAL_STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (parsed && parsed.personalInfo) {
            setData(ensureDataDefaults(parsed));
          }
        } catch (err) {}
      }
    };

    // Refetch immediately when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchGlobalData();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const fetchGlobalData = async () => {
    try {
      const res = await fetch('/api/admin/data?t=' + Date.now());
      if (res.ok) {
        const result = await res.json();
        // Only update local state if real cloud data exists on server
        if (result.success && result.data && result.data.personalInfo && result.source === 'upstash_rest_cloud') {
          const sanitized = ensureDataDefaults(result.data);
          
          setData((prev) => {
            const localTimestamp = prev.lastUpdated || 0;
            const cloudTimestamp = sanitized.lastUpdated || 0;
            
            // If local data was modified by user more recently than cloud data, keep local and push to cloud
            if (localTimestamp > cloudTimestamp) {
              saveGlobalData(prev);
              return prev;
            }
            return sanitized;
          });
        }
      }
    } catch (e) {
      console.log("Server fetch fallback to local data");
    }
  };

  const saveGlobalData = async (newData) => {
    try {
      await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: newData, masterKey: 'Dinesh@2026' })
      });
    } catch (e) {}
  };

  // Sync theme with html root attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // Persist data changes to localStorage only
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save data:", e);
    }
  }, [data]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // CRUD Actions - Explicitly trigger saveToCloud on user edits
  const updatePersonalInfo = (newInfo) => {
    setData((prev) => {
      const updated = {
        ...prev,
        personalInfo: { ...prev.personalInfo, ...newInfo },
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: 'p_' + Date.now(),
      tags: typeof project.tags === 'string' ? project.tags.split(',').map(t => t.trim()) : project.tags
    };
    setData((prev) => {
      const updated = {
        ...prev,
        projects: [newProject, ...prev.projects],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const updateProject = (id, updatedFields) => {
    setData((prev) => {
      const updated = {
        ...prev,
        projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteProject = (id) => {
    setData((prev) => {
      const updated = {
        ...prev,
        projects: prev.projects.filter((p) => p.id !== id),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addCertificate = (cert) => {
    const newCert = {
      ...cert,
      id: 'c_' + Date.now(),
      skills: typeof cert.skills === 'string' ? cert.skills.split(',').map(s => s.trim()) : cert.skills
    };
    setData((prev) => {
      const updated = {
        ...prev,
        certificates: [newCert, ...prev.certificates],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const updateCertificate = (id, updatedFields) => {
    setData((prev) => {
      const updated = {
        ...prev,
        certificates: prev.certificates.map((c) => (c.id === id ? { ...c, ...updatedFields } : c)),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteCertificate = (id) => {
    setData((prev) => {
      const updated = {
        ...prev,
        certificates: prev.certificates.filter((c) => c.id !== id),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addSkill = (skill) => {
    setData((prev) => {
      const updated = {
        ...prev,
        skills: [...prev.skills, skill],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteSkill = (index) => {
    setData((prev) => {
      const updated = {
        ...prev,
        skills: prev.skills.filter((_, idx) => idx !== index),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addExperience = (exp) => {
    const newExp = {
      ...exp,
      id: 'e_' + Date.now(),
      achievements: typeof exp.achievements === 'string' ? exp.achievements.split('\n').filter(Boolean) : exp.achievements
    };
    setData((prev) => {
      const updated = {
        ...prev,
        experience: [newExp, ...prev.experience],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteExperience = (id) => {
    setData((prev) => {
      const updated = {
        ...prev,
        experience: prev.experience.filter((e) => e.id !== id),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addInquiry = (inquiry) => {
    const newInquiry = {
      ...inquiry,
      id: 'inq_' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    setData((prev) => {
      const updated = {
        ...prev,
        inquiries: [newInquiry, ...(prev.inquiries || [])],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteInquiry = (id) => {
    setData((prev) => {
      const updated = {
        ...prev,
        inquiries: (prev.inquiries || []).filter((inq) => inq.id !== id),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const addTestimonial = (item) => {
    const newItem = {
      ...item,
      id: 't_' + Date.now(),
      stars: item.stars || 5,
      avatar: item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=6366f1&color=fff`,
      createdAt: new Date().toISOString()
    };
    setData((prev) => {
      const updated = {
        ...prev,
        testimonials: [newItem, ...(prev.testimonials || [])],
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const deleteTestimonial = (id) => {
    setData((prev) => {
      const updated = {
        ...prev,
        testimonials: (prev.testimonials || []).filter((t) => t.id !== id),
        lastUpdated: Date.now()
      };
      saveGlobalData(updated);
      return updated;
    });
  };

  const resetToDefault = () => {
    const defaultDataWithTimestamp = {
      ...defaultPortfolioData,
      lastUpdated: Date.now()
    };
    setData(defaultDataWithTimestamp);
    saveGlobalData(defaultDataWithTimestamp);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        theme,
        toggleTheme,
        currentPage,
        setCurrentPage,
        selectedProject,
        setSelectedProject,
        updatePersonalInfo,
        addProject,
        updateProject,
        deleteProject,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        addSkill,
        deleteSkill,
        addExperience,
        deleteExperience,
        addInquiry,
        deleteInquiry,
        addTestimonial,
        deleteTestimonial,
        resetToDefault
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
