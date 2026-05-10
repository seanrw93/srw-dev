import { FormEvent, useRef, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { BsCalendar2Check } from 'react-icons/bs'
import Reveal from '../ui/Reveal'

const CONTACT_LINKS = [
  { icon: <HiOutlineMail />, label: 'srw.dev.freelance@protonmail.com', href: 'mailto:srw.dev.freelance@protonmail.com' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com' },
  { icon: <BsCalendar2Check />, label: 'Réserver un appel sur Calendly', href: 'https://calendly.com' },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(formRef.current),
      })
      const data = await res.json()
      if (data.success) {
        formRef.current.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--dark">
      <div className="section-inner">
        <div className="contact-inner">

          {/* Left: info */}
          <div className="contact-info">
            <span className="section-label">Contact</span>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: '14px' }}>
                Travaillons ensemble
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p>Décrivez votre projet ou votre besoin. Je vous réponds sous 24h.</p>
            </Reveal>
            <div className="contact-links">
              {CONTACT_LINKS.map(({ icon, label, href }) => (
                <Reveal key={href}>
                  <a
                    href={href}
                    className="contact-link"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div className="contact-link-icon" aria-hidden="true">{icon}</div>
                    {label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={80}>
            <div className="contact-form-wrap">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS" />
                <input type="hidden" name="subject" value="Nouveau message - Sean RW" />

                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="votre@email.fr" required />
                </div>
                <div className="form-group">
                  <label htmlFor="reqtype">Type de demande</label>
                  <select id="reqtype" name="type" required>
                    <option value="" disabled>Sélectionnez une option</option>
                    <option>Création de site</option>
                    <option>Optimisation performance</option>
                    <option>Mission freelance / régie</option>
                    <option>Audit gratuit</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre besoin..."
                    required
                  />
                </div>

                {status !== 'success' && (
                  <button
                    type="submit"
                    className="btn btn-outline form-submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </button>
                )}

                {status === 'error' && (
                  <p style={{ color: 'var(--light-muted)', fontSize: '0.8rem', marginTop: '8px', textAlign: 'center' }}>
                    Erreur lors de l'envoi. Réessayez ou écrivez directement à srw.dev.freelance@protonmail.com
                  </p>
                )}

                {status === 'success' && (
                  <div className="form-success" style={{ display: 'block' }}>
                    Message envoyé. Je vous réponds sous 24h.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
