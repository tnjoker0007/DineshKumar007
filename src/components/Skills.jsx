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
  Layers
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Skills = () => {
  const { data } = usePortfolio();
  const skillList = Array.isArray(data?.skills) ? data.skills : [];
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract unique categories present in the skills array
  const rawCategories = skillList.map(s => s.category).filter(Boolean);
  const uniqueCategories = Array.from(new Set(rawCategories));
  
  // Ensure 'Others' is present in category filter options
  let categories = ['All', ...uniqueCategories];
  if (!categories.some(c => c.toLowerCase() === 'others')) {
    categories.push('Others');
  }

  const filteredSkills = activeCategory === 'All' 
    ? skillList 
    : activeCategory === 'Others'
    ? skillList.filter(s => !s.category || s.category.trim().toLowerCase().includes('other'))
    : skillList.filter(s => s.category && s.category.trim().toLowerCase() === activeCategory.trim().toLowerCase());

  const getCategoryIcon = (cat) => {
    if (!cat) return Layers;
    const c = cat.toLowerCase();
    if (c.includes('program') || c.includes('code')) return Code;
    if (c.includes('front') || c.includes('web') || c.includes('dev')) return Server;
    if (c.includes('back')) return Database;
    if (c.includes('security') || c.includes('tech')) return Shield;
    if (c.includes('db') || c.includes('data') || c.includes('cloud')) return Database;
    if (c.includes('manage') || c.includes('lead')) return Users;
    if (c.includes('creative') || c.includes('design') || c.includes('ui')) return Palette;
    if (c.includes('hardware') || c.includes('ev')) return Cpu;
    if (c.includes('other')) return Layers;
    return Wrench;
  };

  return (
    <section className="skills-section" id="skills-section">
      <div className="container">
        <ScrollReveal animation="slide-up">
          <div className="section-header">
            <div className="badge badge-glow">
              <Sparkles size={14} />
              <span>Technical Proficiency</span>
            </div>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cat-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid-3">
          {filteredSkills.map((skill, index) => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <ScrollReveal key={index} delay={(index % 3) * 100} animation="pop-up">
                <div className="glass-card skill-card animate-fade">
                  <div className="skill-info">
                    <div className="skill-title-group">
                      <div className="skill-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-cat-tag">{skill.category || 'Others'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
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
        .cat-tab-btn {
          padding: 0.55rem 1.3rem;
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
        .cat-tab-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }
        .cat-tab-btn.active {
          background: var(--gradient-brand);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(99, 102, 241, 0.35);
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.2rem;
        }
        .skill-card {
          padding: 1.2rem 1.4rem;
          display: flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
        }
        .skill-info {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .skill-title-group {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }
        .skill-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.12);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .skill-name {
          font-weight: 700;
          font-size: 1rem;
          display: block;
          color: var(--text-main);
        }
        .skill-cat-tag {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-top: 0.1rem;
        }
      `}</style>
    </section>
  );
};
