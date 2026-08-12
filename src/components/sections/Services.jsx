import { portfolioData } from '../../data/portfolio'
import './Services.css'

export default function Services() {
  return (
    <section className="services section dark">
      <div className="container">
        <h2 className="section-title reveal-bottom">What I Do</h2>
        <p className="section-subtitle">Services & expertise tailored to your project needs</p>

        <div className="services-grid">
          {portfolioData.services.map((service, idx) => (
            <div key={idx} className="service-card reveal-bottom">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="services-cta reveal-bottom">
          <div className="cta-icon">💡</div>
          <h3 className="cta-title">Ready to start something amazing?</h3>
          <p className="cta-subtitle">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
          <a href="#contact" className="cta-button">
            Get in Touch
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <p className="cta-footer">Interested in a specific project or service?</p>
        </div>
      </div>
    </section>
  )
}
