import { useMemo, useState } from 'react'
import Footer from '../components/Footer'
import { site } from '../site'
import donationPoster from '../assets/donation.jpg'
import './DonatePage.css'

type Row = { label: string; value: string; copy: string }

export default function DonatePage() {
  const rows: Row[] = useMemo(
    () => [
      { label: 'UPI ID', value: site.donation.upiId, copy: site.donation.upiId },
      { label: 'PhonePe / GPay', value: site.donation.phonePeGpay, copy: site.donation.phonePeGpay },
      { label: 'Account Number', value: site.donation.accountNumber, copy: site.donation.accountNumber },
      { label: 'IFSC Code', value: site.donation.ifsc, copy: site.donation.ifsc },
    ],
    [],
  )

  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      window.setTimeout(() => setCopiedKey((v) => (v === key ? null : v)), 1200)
    } catch {
      setCopiedKey(null)
    }
  }

  const upiLink = useMemo(() => {
    const pa = encodeURIComponent(site.donation.upiId)
    const pn = encodeURIComponent(site.name)
    return `upi://pay?pa=${pa}&pn=${pn}`
  }, [])

  return (
    <>
      <section className="page container donate" aria-label="Donate">
        <header className="donate-head">
          <p className="eyebrow">Donate</p>
          <h1 className="donate-title">Support Ababeel Foundation</h1>
          <p className="donate-subtitle">
            “The believer&apos;s shade on the Day of Judgment will be his charity.” (Tirmidhi)
          </p>
        </header>

        <div className="donate-grid">
          <div className="poster">
            <img src={donationPoster} alt="Ababeel Foundation donation QR and bank details" loading="lazy" />
          </div>

          <div className="details">
            <div className="detail-card">
              <h2>Donation details</h2>
              <p className="muted">
                You can donate via UPI/PhonePe/GPay or direct bank transfer. Tap copy to paste into your payment app.
              </p>

              <div className="rows" role="list">
                {rows.map((r) => (
                  <div key={r.label} className="row" role="listitem">
                    <div>
                      <div className="label">{r.label}</div>
                      <div className="value">{r.value}</div>
                    </div>
                    <button type="button" className="copy" onClick={() => copy(r.label, r.copy)}>
                      {copiedKey === r.label ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="actions">
                <a className="btn primary" href={upiLink}>
                  Open UPI
                </a>
                <a className="btn ghost" href={site.contactUrl}>
                  Contact for receipt
                </a>
              </div>
            </div>

            <div className="detail-card">
              <h3>Need help?</h3>
              <p className="muted">
                Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
                <a href={site.phoneHref}>{site.phoneDisplay}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

