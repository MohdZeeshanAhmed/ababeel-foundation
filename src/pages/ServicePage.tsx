import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { site } from '../site'
import './SimplePage.css'

type Service = { title: string; body: string }

const services: Record<string, Service> = {
  healthcare: {
    title: 'Healthcare',
    body: 'Health cards help beneficiaries access a wide range of services so families can receive care without financial burden — supported by partner hospitals, clinics, and diagnostics.',
  },
  finance: {
    title: 'Finance',
    body: 'Ababeel Foundation supports families through repayments, financial aid, and essential services — bringing hope and stability when it’s needed most.',
  },
  education: {
    title: 'Education',
    body: 'Ababeel Foundation supports education for underprivileged children and youth by covering school and college fees so financial barriers don’t block learning.',
  },
  'urgent-relief': {
    title: 'Urgent Relief',
    body: 'Ababeel Foundation responds swiftly to emergencies and disasters by providing relief support so affected families receive timely aid such as food, shelter, and basic necessities.',
  },
  'social-welfare': {
    title: 'Social Welfare',
    body: 'Welfare programs aim to nourish the underserved and meet critical needs such as clean drinking water, hygiene, and essential assistance for vulnerable communities.',
  },
  'food-distribution': {
    title: 'Food Distribution',
    body: 'Regular nutrition drives to support communities with meals and essentials.',
  },
  'blanket-distribution': {
    title: 'Blanket Distribution',
    body: 'Seasonal winter outreach to help keep families warm and safe.',
  },
}

export default function ServicePage() {
  const { slug } = useParams()

  const service = useMemo(() => {
    if (!slug) return null
    return services[slug] ?? null
  }, [slug])

  return (
    <>
      <section className="page container simple-page" aria-label="Service">
        <header className="simple-head">
          <p className="eyebrow">Our Services</p>
          <h1 className="simple-title">{service?.title ?? 'Service'}</h1>
          <p className="simple-subtitle">{service?.body ?? 'This service page is not available.'}</p>
        </header>

        <div className="simple-card">
          <h2>Get help or support this program</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
          <p>
            For Ummeed Health Card details, <a href={site.contactUrl}>contact us</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
