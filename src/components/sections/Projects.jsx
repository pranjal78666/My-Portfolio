import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import './Projects.css'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  const getProjectIcon = (name) => {
    if (name === 'ThinkCEO') return '💼'
    if (name === 'ImprintCity') return '🛍️'
    return '📦'
  }

  return (
    <section className="projects section dark">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal-bottom">Projects</h2>
          <p className="section-subtitle reveal-bottom">Real-world production experience building scalable applications</p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="project-card reveal-bottom">
              <div className="project-badge">{getProjectIcon(project.name)}</div>

              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-category">{project.category}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Timeline</span>
                  <span className="meta-value">{project.startDate} — {project.endDate}</span>
                </div>
              </div>

              <div className="project-sections">
                <div className="section-group">
                  <h4 className="section-heading">What I Worked On</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="section-group">
                  <h4 className="section-heading">Tech Stack</h4>
                  <div className="tech-chips">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {project.liveUrl && (
                <div className="project-cta">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                    View Live Site
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </a>
                </div>
              )}

              <button
                className="project-expand-btn"
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                aria-label="Toggle project details"
              >
                <span>{expandedProject === idx ? 'Show Less' : 'Show More'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7"></path>
                </svg>
              </button>

              {expandedProject === idx && (
                <div className="project-expanded">
                  <p className="expanded-description">{project.longDescription}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
