import { useState, useEffect } from 'react'
import { portfolioData } from '../../data/portfolio'
import './Hero.css'

export default function Hero() {
  const roles = [
    'Associate Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'PHP Developer'
  ]

  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 80
    const delay = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-sphere gradient-1"></div>
        <div className="gradient-sphere gradient-2"></div>
        <div className="gradient-mesh"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-top-section">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Available for Full Stack Developer Roles</span>
              </div>
              <button
                className="btn btn-secondary btn-small"
                onClick={() => handleScroll('contact')}
                title="Let's Talk"
              >
                Let's Talk
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>

            <h1 className="hero-title">
              <span className="hero-name">Pranjal</span>
              <span className="hero-name-secondary">Shrivastava</span>
            </h1>

            <div className="hero-title-section">
              <h2 className="hero-subtitle">
                Full Stack Developer
              </h2>
              <p className="hero-tagline">
                Building scalable SaaS & E-commerce experiences
              </p>
            </div>

            <div className="hero-rotating-roles">
              <span className="role-prefix">Currently: </span>
              <span className="role-text">{displayedText}</span>
              <span className="role-cursor">|</span>
            </div>

            <p className="hero-description">
              {portfolioData.personal.summary}
            </p>

            <div className="hero-stats">
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.label}</div>
                  <div className="stat-label">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <button
                className="btn btn-primary btn-large"
                onClick={() => handleScroll('projects')}
              >
                View My Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>

              <a
                href="/assets/Pranjal_Shrivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
              >
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="hero-socials">
              <span className="socials-label">Get in touch:</span>
              <div className="social-links">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a
                  href={portfolioData.personal.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="hero-image">
            <div className="image-frame">
              <div className="image-glow"></div>
              <img
                src="/assets/profile_image.jpeg"
                alt="Pranjal Shrivastava - Full Stack Developer"
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="scroll-indicator"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
        }}
        aria-label="Scroll down to explore"
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
    </section>
  )
}
