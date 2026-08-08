import { useState } from 'react'
import { portfolioData } from '../../data/portfolio'
import './Projects.css'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section className="projects section dark">
      <div className="container">
        <h2 className="section-title reveal-bottom">Featured Projects</h2>

        <div className="projects-grid">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="project-card reveal-bottom">
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-timeline">
                <span className="timeline-badge">
                  {project.startDate} → {project.endDate}
                </span>
              </div>

              <div className="project-highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <div className="tech-label">Tech Stack:</div>
                <div className="tech-chips">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-chip more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>

              <button
                className="project-expand-btn"
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
              >
                {expandedProject === idx ? 'Hide Details' : 'View Details'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>

              {expandedProject === idx && (
                <div className="project-expanded">
                  <p className="expanded-description">{project.longDescription}</p>

                  <div className="expanded-section">
                    <h4>Full Feature List</h4>
                    <ul className="features-list">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="expanded-section">
                    <h4>Complete Tech Stack</h4>
                    <div className="tech-chips full">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
