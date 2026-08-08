import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { portfolioData } from '../../data/portfolio'
import './Contact.css'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  })

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.from_name.trim()) {
      setFormState(prev => ({
        ...prev,
        isError: true,
        errorMessage: 'Please enter your name'
      }))
      return false
    }

    if (!formData.from_email.trim()) {
      setFormState(prev => ({
        ...prev,
        isError: true,
        errorMessage: 'Please enter your email'
      }))
      return false
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.from_email)) {
      setFormState(prev => ({
        ...prev,
        isError: true,
        errorMessage: 'Please enter a valid email address'
      }))
      return false
    }

    if (!formData.subject.trim()) {
      setFormState(prev => ({
        ...prev,
        isError: true,
        errorMessage: 'Please enter a subject'
      }))
      return false
    }

    if (!formData.message.trim()) {
      setFormState(prev => ({
        ...prev,
        isError: true,
        errorMessage: 'Please enter your message'
      }))
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      isError: false,
      errorMessage: ''
    }))

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        }
      )

      if (response.status === 200) {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          isSuccess: true,
          isError: false
        }))

        // Reset form
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormState(prev => ({
            ...prev,
            isSuccess: false
          }))
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        errorMessage: 'Failed to send message. Please try again or contact me directly via email.'
      }))
    }
  }

  return (
    <section className="contact section">
      <div className="container">
        <h2 className="section-title reveal-bottom">Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info reveal-left">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>

            <a
              href={`mailto:${portfolioData.personal.social.email}`}
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginBottom: '2rem' }}
            >
              📧 Send Email
            </a>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📨</div>
                <div className="method-content">
                  <h4>Email</h4>
                  <a href={`mailto:${portfolioData.personal.social.email}`}>
                    {portfolioData.personal.social.email}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <a href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`}>
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                    @pranjal78666
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="social-label">Follow me:</span>
              <div className="social-icons">
                <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form reveal-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="from_name">Full Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={formState.isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email Address</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your@email.com"
                disabled={formState.isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                disabled={formState.isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                disabled={formState.isSubmitting}
              ></textarea>
            </div>

            {formState.isSuccess && (
              <div className="form-message success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {formState.isError && (
              <div className="form-message error">
                ✕ {formState.errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 5l7 7m0 0l-7 7m7-7H6"></path>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
