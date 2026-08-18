import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  Wrench, 
  Terminal, 
  Sparkles,
  Shield,
  Users,
  Video,
  Cpu,
  Share2
} from 'lucide-react';

export const Skills = () => {
  const { data } = usePortfolio();
  const skillList = Array.isArray(data?.skills) ? data.skills : [];
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract unique categories present in the skills array
  const rawCategories = skillList.map(s => s.category).filter(Boolean);
  const uniqueCategories = Array.from(new Set(rawCategories));
  const categories = ['All', ...uniqueCategories];

  const filteredSkills = activeCategory === 'All' 
    ? skillList 
    : skillList.filter(s => s.category && s.category.trim().toLowerCase() === activeCategory.trim().toLowerCase());

  const getCategoryIcon = (cat) => {
    if (!cat) return Wrench;
    const c = cat.toLowerCase();
    if (c.includes('program') || c.includes('code')) return Code;
    if (c.includes('web') || c.includes('dev')) return Server;
    if (c.includes('security') || c.includes('tech')) return Shield;
    if (c.includes('db') || c.includes('data')) return Database;
    if (c.includes('manage') || c.includes('lead')) return Users;
    if (c.includes('creative') || c.includes('design') || c.includes('ui')) return Video;
    if (c.includes('hardware') || c.includes('ev')) return Cpu;
    return Terminal;
  };

  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Sparkles size={14} />
            <span>Tech Stack & Expertise</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid-2">
          {filteredSkills.map((skill, index) => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <div key={index} className="glass-card skill-card animate-fade">
                <div className="skill-info">
                  <div className="skill-title-group">
                    <div className="skill-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-cat-tag">{skill.category}</span>
                    </div>
                  </div>
                  <span className="skill-level-text">{skill.level}%</span>
                </div>

                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 5rem 0;
          position: relative;
        }
        .category-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }
        .category-tab {
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
        .category-tab:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
        }
        .category-tab.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        .skills-grid {
          gap: 1.2rem;
        }
        .skill-card {
          padding: 1.3rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .skill-title-group {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .skill-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(99, 102, 241, 0.12);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
          display: block;
        }
        .skill-cat-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: block;
        }
        .skill-level-text {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .skill-bar-track {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: var(--bg-input);
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: var(--gradient-brand);
          transition: width 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};
