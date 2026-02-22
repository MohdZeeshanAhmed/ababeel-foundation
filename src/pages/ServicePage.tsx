import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { projectBySlug } from '../data/projects'
import { site } from '../site'
import './SimplePage.css'

const slugAliases: Record<string, string> = {
  healthcare: 'medical-camps',
  finance: 'hunar',
  education: 'shama',
  'urgent-relief': 'manna-salwa',
  'social-welfare': 'beyond-books',
  'food-distribution': 'manna-salwa',
  'blanket-distribution': 'upcycle',
}

export default function ServicePage() {
  const { slug } = useParams()

  const project = useMemo(() => {
    if (!slug) return null
    const resolvedSlug = slugAliases[slug] ?? slug
    return projectBySlug(resolvedSlug)
  }, [slug])

  return (
    <>
      <section className="page container simple-page" aria-label="Project details">
        <header className="simple-head">
          <p className="eyebrow">Our Projects</p>
          <h1 className="simple-title">{project?.title ?? 'Project'}</h1>
          <p className="simple-subtitle">{project?.about ?? 'This project page is not available.'}</p>
        </header>

        {project ? (
          <>
            {project.services?.length ? (
              <div className="simple-card">
                <h2>{project.servicesTitle ?? 'Services'}</h2>
                <ul className="simple-list">
                  {project.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.process?.length ? (
              <div className="simple-card">
                <h2>{project.processTitle ?? 'How It Works'}</h2>
                <ul className="simple-list">
                  {project.process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.beneficiaries?.length ? (
              <div className="simple-card">
                <h2>{project.beneficiariesTitle ?? 'Who It Benefits'}</h2>
                <ul className="simple-list">
                  {project.beneficiaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.highlights?.length ? (
              <div className="simple-card">
                <h2>{project.highlightsTitle ?? 'Highlights'}</h2>
                <ul className="simple-list">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.goal ? (
              <div className="simple-card">
                <h2>{project.goalTitle ?? 'Goal'}</h2>
                <p>{project.goal}</p>
              </div>
            ) : null}

            {project.impact ? (
              <div className="simple-card">
                <h2>{project.impactTitle ?? 'Impact'}</h2>
                <p>{project.impact}</p>
              </div>
            ) : null}

            {project.statusNote ? (
              <div className="simple-card">
                <h2>Status</h2>
                <p>{project.statusNote}</p>
              </div>
            ) : null}

            {project.photoNotes?.length ? (
              <div className="simple-card">
                <h2>Photo Placement</h2>
                <ul className="simple-list">
                  {project.photoNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </>
        ) : null}

        <div className="simple-card simple-cta-box">
          <h2>Get help or support this program</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
            <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
