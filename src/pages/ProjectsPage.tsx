import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import './SimplePage.css'

export default function ProjectsPage() {
  return (
    <>
      <section className="page container simple-page" aria-label="Our projects">
        <header className="simple-head">
          <p className="eyebrow">Our Projects</p>
          <h1 className="simple-title">Focused Programs For Education, Nutrition, Health and Skills</h1>
          <p className="simple-subtitle">
            Ababeel Foundation operates focused programs that address education, nutrition, health and employable
            skills.
          </p>
        </header>

        <div className="simple-grid">
          {projects.map((project) => (
            <article className="simple-card" key={project.slug}>
              <div className="simple-card-media">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
              <h2>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <Link className="btn link" to={`/services/${project.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
