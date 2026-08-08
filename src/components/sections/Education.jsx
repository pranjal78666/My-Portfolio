import { portfolioData } from '../../data/portfolio'
import './Education.css'

export default function Education() {
  return (
    <section className="education section">
      <div className="container">
        <h2 className="section-title reveal-bottom">Education</h2>

        <div className="education-grid">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="education-card reveal-bottom">
              <div className="education-icon">🎓</div>

              <div className="education-content">
                <h3 className="school-name">{edu.school}</h3>
                <p className="school-location">{edu.location}</p>

                <div className="degree-info">
                  <span className="degree">{edu.degree}</span>
                  <span className="separator">•</span>
                  <span className="field">{edu.field}</span>
                </div>

                <p className="study-period">
                  {edu.startDate} — {edu.endDate}
                </p>

                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications-section reveal-bottom">
          <h3 className="certifications-title">Certifications & Courses</h3>
          <div className="certifications-grid">
            <div className="certification-card">
              <span className="cert-icon">📜</span>
              <span className="cert-name">Prompt Engineering with ChatGPT</span>
              <span className="cert-issuer">Simplilearn</span>
            </div>
            <div className="certification-card">
              <span className="cert-icon">☁️</span>
              <span className="cert-name">Cloud Computing</span>
              <span className="cert-issuer">NPTEL, IIT Kharagpur</span>
            </div>
            <div className="certification-card">
              <span className="cert-icon">🧪</span>
              <span className="cert-name">Software Testing</span>
              <span className="cert-issuer">NPTEL, IIIT Bangalore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
