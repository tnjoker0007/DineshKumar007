import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultPortfolioData } from '../data/defaultData';

const PortfolioContext = createContext();

const LOCAL_STORAGE_KEY = 'dinesh_kumar_portfolio_v2';
const THEME_STORAGE_KEY = 'asma_portfolio_theme_v1';

export const PortfolioProvider = ({ children }) => {
  // Load initial data from localStorage or default
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to parse local storage data:", e);
    }
    return defaultPortfolioData;
  });

  // Active theme (dark/light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  });

  // Current page routing: 'home', 'certificates', 'hire', 'admin'
  const [currentPage, setCurrentPage] = useState('home');

  // Selected project modal state
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync theme with html root attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // Persist data changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  }, [data]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // CRUD Actions
  const updatePersonalInfo = (newInfo) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...newInfo }
    }));
  };

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: 'p_' + Date.now(),
      tags: typeof project.tags === 'string' ? project.tags.split(',').map(t => t.trim()) : project.tags
    };
    setData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects]
    }));
  };

  const updateProject = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    }));
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
  };

  const addCertificate = (cert) => {
    const newCert = {
      ...cert,
      id: 'c_' + Date.now(),
      skills: typeof cert.skills === 'string' ? cert.skills.split(',').map(s => s.trim()) : cert.skills
    };
    setData((prev) => ({
      ...prev,
      certificates: [newCert, ...prev.certificates]
    }));
  };

  const updateCertificate = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      certificates: prev.certificates.map((c) => (c.id === id ? { ...c, ...updatedFields } : c))
    }));
  };

  const deleteCertificate = (id) => {
    setData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((c) => c.id !== id)
    }));
  };

  const addSkill = (skill) => {
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const deleteSkill = (index) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, idx) => idx !== index)
    }));
  };

  const addExperience = (exp) => {
    const newExp = {
      ...exp,
      id: 'e_' + Date.now(),
      achievements: typeof exp.achievements === 'string' ? exp.achievements.split('\n').filter(Boolean) : exp.achievements
    };
    setData((prev) => ({
      ...prev,
      experience: [newExp, ...prev.experience]
    }));
  };

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id)
    }));
  };

  const addInquiry = (inquiry) => {
    const newInquiry = {
      ...inquiry,
      id: 'inq_' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    setData((prev) => ({
      ...prev,
      inquiries: [newInquiry, ...(prev.inquiries || [])]
    }));
  };

  const deleteInquiry = (id) => {
    setData((prev) => ({
      ...prev,
      inquiries: (prev.inquiries || []).filter((inq) => inq.id !== id)
    }));
  };

  const resetToDefault = () => {
    setData(defaultPortfolioData);
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
        resetToDefault
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
