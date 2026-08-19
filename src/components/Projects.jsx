import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, ExternalLink, Github, Sparkles, X, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Projects = () => {
  const { data, selectedProject, setSelectedProject } = usePortfolio();
  const projectList = Array.isArray(data?.projects) ? data.projects : [];
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Web Apps', 'Web App', 'UI/UX Design', 'Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? projectList
    : projectList.filter(p => p && p.category && p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Helper to ensure tags are always an array even if stored as comma-separated string
  const ensureTagsArray = (tags) => {
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string' && tags.trim().length > 0) {
      return tags.split(',').map(s => s.trim()).filter(Boolean);
    }
    return [];
  };

  // Helper to verify if a valid external link was explicitly provided in Admin CMS
  const isValidUrl = (url) => {
    if (!url) return false;
    const u = url.trim().toLowerCase();
    return u.length > 0 && u !== '#' && u !== 'none' && !u.includes('example.com') && !u.includes('github.com/example');
  };

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <ScrollReveal animation="slide-up">
          <div className="section-header">
            <div className="badge badge-glow">
              <Briefcase size={14} />
              <span>Featured Portfolio</span>
            </div>
            <h2 className="section-title">Selected Works & Case Studies</h2>
          </div>
        </ScrollReveal>

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
          {filteredProjects.map((project, idx) => {
            const hasLive = isValidUrl(project.liveUrl);
            const hasGithub = isValidUrl(project.githubUrl);
            const tags = ensureTagsArray(project.tags);

            return (
              <ScrollReveal key={project.id} delay={(idx % 3) * 120} animation="pop-up">
                <div 
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
                    {tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tag-item">{tag}</span>
                    ))}
                    {tags.length > 4 && (
                      <span className="tag-item">+{tags.length - 4}</span>
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
            </ScrollReveal>
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
                  {ensureTagsArray(selectedProject.tags).map((tag, idx) => (
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
          border-color: var(--border-light);
        }
        .filter-btn.active {
          background: var(--accent-blue);
          color: #ffffff;
          border-color: var(--accent-blue);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }
        .projects-grid {
          gap: 2rem;
        }
        .project-card {
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl), 0 0 20px rgba(59, 130, 246, 0.15);
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
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .btn-view-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .badge-featured {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.9);
          backdrop-filter: blur(4px);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-category {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.4rem;
        }
        .project-title {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .project-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 1.2rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          margin-bottom: 1rem;
        }
        .tag-item {
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: var(--bg-input);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .project-actions {
          display: flex;
          gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .link-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .link-icon-btn:hover {
          color: var(--accent-blue);
          border-color: var(--accent-blue);
          background: rgba(59, 130, 246, 0.1);
        }

        .modal-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }
        .modal-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 1rem 0;
        }
        .modal-tags {
          margin: 1.5rem 0;
        }
        .tags-heading {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-dim);
          margin-bottom: 0.6rem;
        }
        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .modal-tag {
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-input);
          color: var(--accent-blue);
          font-size: 0.82rem;
          font-weight: 500;
        }
        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
      `}</style>
    </section>
  );
};
