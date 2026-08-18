import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, ExternalLink, Github, Sparkles, X, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  const { data, selectedProject, setSelectedProject } = usePortfolio();
  const { projects } = data;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Web Apps', 'Web App', 'UI/UX Design', 'Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Helper to verify if a valid external link was explicitly provided in Admin CMS
  const isValidUrl = (url) => {
    if (!url) return false;
    const u = url.trim().toLowerCase();
    return u.length > 0 && u !== '#' && u !== 'none' && !u.includes('example.com') && !u.includes('github.com/example');
  };

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Briefcase size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">Selected Works & Case Studies</h2>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid-3">
          {filteredProjects.map((project) => {
            const hasLive = isValidUrl(project.liveUrl);
            const hasGithub = isValidUrl(project.githubUrl);

            return (
              <div 
                key={project.id} 
                className="glass-card project-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Preview */}
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <span className="btn-view-details">
                      <span>View Case Details</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  {project.featured && (
                    <span className="badge-featured">Featured</span>
                  )}
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.shortDesc}</p>

                  {/* Tech Tags */}
                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tag-item">{tag}</span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tag-item">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  {/* External Links: Render ONLY when added in Admin CMS */}
                  {(hasLive || hasGithub) && (
                    <div className="project-actions" onClick={(e) => e.stopPropagation()}>
                      {hasLive && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="link-icon-btn"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {hasGithub && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="link-icon-btn"
                          title="Source Code"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />

            <div className="modal-body">
              <span className="badge badge-glow">{selectedProject.category}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-desc">{selectedProject.longDesc || selectedProject.shortDesc}</p>

              <div className="modal-tags">
                <h4 className="tags-heading">Technologies Used:</h4>
                <div className="tags-flex">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Modal External Action Buttons: Render ONLY when added in Admin CMS */}
              {(isValidUrl(selectedProject.liveUrl) || isValidUrl(selectedProject.githubUrl)) && (
                <div className="modal-actions">
                  {isValidUrl(selectedProject.liveUrl) && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Visit Live Site</span>
                    </a>
                  )}
                  {isValidUrl(selectedProject.githubUrl) && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Github size={16} />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          padding: 5rem 0;
          position: relative;
        }
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .filter-btn {
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }
        .filter-btn.active {
          background: var(--gradient-brand);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .project-card {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .project-image-box {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .project-card:hover .project-img {
          transform: scale(1.08);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 13, 22, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .btn-view-details {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.1rem;
          background: var(--gradient-brand);
          color: #fff;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .badge-featured {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 0.25rem 0.75rem;
          background: var(--gradient-brand);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: var(--radius-full);
        }
        .project-body {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex-grow: 1;
        }
        .project-category {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
        }
        .project-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.4rem;
        }
        .tag-item {
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: var(--bg-input);
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .project-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.6rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-light);
        }
        .link-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-input);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .link-icon-btn:hover {
          background: var(--accent-primary);
          color: #fff;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 0;
          border-radius: var(--radius-lg);
        }
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .modal-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .modal-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .modal-title {
          font-size: 1.6rem;
          font-weight: 800;
        }
        .modal-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.96rem;
        }
        .tags-heading {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }
        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .modal-tag {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          font-size: 0.82rem;
          font-weight: 600;
        }
        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
};
