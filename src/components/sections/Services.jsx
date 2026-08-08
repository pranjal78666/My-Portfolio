import { portfolioData } from '../../data/portfolio'
import './Services.css'

export default function Services() {
  return (
    <section className="services section dark">
      <div className="container">
        <h2 className="section-title reveal-bottom">Services</h2>
        <p className="section-subtitle">What I Can Build For You</p>

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
          <p>Interested in a specific project or service?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
