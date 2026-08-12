import { portfolioData } from '../../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title reveal-bottom">About Me</h2>

        <div className="about-grid">
          {/* Left: Summary */}
          <div className="about-content reveal-left">
            <div className="about-summary">
              <p className="summary-text">
                I'm a Full Stack Developer with 1+ year of professional experience building modern, scalable web applications. My expertise spans both frontend and backend technologies, allowing me to solve complex problems end-to-end.
              </p>

              <p className="summary-text">
                Recently worked at Galaxy Weblinks Inc., I contributed to SaaS and E-commerce platforms, managing everything from UI implementation to database optimization. I'm passionate about clean code, performance optimization, and building systems that just work.
              </p>
            </div>

            <div className="about-highlights">
              <h3 className="highlights-title">Core Strengths</h3>
              <ul className="highlights-list">
                <li>Full Stack Development (Frontend + Backend)</li>
                <li>SaaS & E-commerce Applications</li>
                <li>REST API Design & Integration</li>
                <li>Database Design & Optimization</li>
                <li>Performance Optimization</li>
                <li>Production Debugging & Support</li>
              </ul>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="about-stats reveal-right">
            <div className="stats-card">
              <div className="stats-icon">📦</div>
              <h4>Tech Stack</h4>
              <p>React, Vue, Next.js, Node.js, PHP, MySQL</p>
            </div>

            <div className="stats-card">
              <div className="stats-icon">🚀</div>
              <h4>Specialization</h4>
              <p>SaaS & E-commerce Platforms</p>
            </div>

            <div className="stats-card">
              <div className="stats-icon">🔗</div>
              <h4>API Integration</h4>
              <p>Vendor APIs, REST, Payment Systems</p>
            </div>

            <div className="stats-card">
              <div className="stats-icon">⚡</div>
              <h4>Performance</h4>
              <p>Optimization, Debugging, Production Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
