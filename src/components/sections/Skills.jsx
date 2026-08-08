import { portfolioData } from '../../data/portfolio'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: portfolioData.skills.frontend,
      color: '#646cff'
    },
    {
      title: 'Backend',
      skills: portfolioData.skills.backend,
      color: '#10b981'
    },
    {
      title: 'Databases',
      skills: portfolioData.skills.databases,
      color: '#f59e0b'
    },
    {
      title: 'Developer Tools',
      skills: portfolioData.skills.tools,
      color: '#8b5cf6'
    },
    {
      title: 'Practices',
      skills: portfolioData.skills.practices,
      color: '#ec4899'
    }
  ]

  return (
    <section className="skills section dark">
      <div className="container">
        <h2 className="section-title reveal-bottom">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category reveal-bottom">
              <div className="category-header">
                <div className="category-icon" style={{ backgroundColor: category.color }}></div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-badge">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
