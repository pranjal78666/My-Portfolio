import { portfolioData } from '../../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <h2 className="section-title reveal-bottom">Professional Experience</h2>

        <div className="experience-timeline">
          {portfolioData.experience.map((job, idx) => (
            <div key={idx} className="timeline-item reveal-bottom">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx < portfolioData.experience.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="job-header">
                  <div className="job-info">
                    <h3 className="company-name">{job.company}</h3>
                    <p className="job-position">{job.position}</p>
                  </div>
                  <div className="job-meta">
                    <span className="job-date">{job.startDate} — {job.endDate}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                </div>

                <p className="job-location">{job.location}</p>

                <div className="job-description">
                  <p>{job.description}</p>
                </div>

                <div className="job-responsibilities">
                  <h4 className="responsibilities-title">Key Responsibilities</h4>
                  <ul className="responsibilities-list">
                    {job.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-technologies">
                  <h4 className="tech-title">Technologies</h4>
                  <div className="tech-list">
                    {job.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
