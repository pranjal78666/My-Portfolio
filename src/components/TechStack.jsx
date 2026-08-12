import './TechStack.css'

export default function TechStack() {
  const techs = [
    { name: 'Javascript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '𝕯' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PHP', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'REST APIs', icon: '🔌' }
  ]

  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-stack-content">
          <div className="tech-label">Core Stack</div>
          <div className="tech-list">
            {techs.map((tech, idx) => (
              <div key={idx} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
