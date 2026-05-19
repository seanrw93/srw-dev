import { FormEvent, useRef, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { BsCalendar2Check } from 'react-icons/bs'
import Reveal from '../ui/Reveal'

const CONTACT_LINKS = [
  {
    icon: <HiOutlineMail />,
    label: 'srw.dev.freelance@protonmail.com',
    href: 'mailto:srw.dev.freelance@protonmail.com',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_PROFILE',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
  },
  {
    icon: <BsCalendar2Check />,
    label: 'Réserver un appel sur Calendly',
    href: 'https://calendly.com/YOUR_USERNAME',
  },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    setStatus('sending')

    const formData = new FormData(formRef.current)

    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_KEY
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        formRef.current.reset()
        setStatus('success')
      } else {
        console.error(data)
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--dark">
      <div className="section-inner">
        <div className="contact-inner">

          {/* Left side */}
          <div className="contact-info">
            <span className="section-label">Contact</span>

            <Reveal>
              <h2
                className="section-title"
                style={{ marginBottom: '14px' }}
              >
                Travaillons ensemble
              </h2>
            </Reveal>

            <Reveal delay={60}>
              <p>
                Décrivez votre projet ou votre besoin.
                Je vous réponds sous 24h.
              </p>
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
                    <div
                      className="contact-link-icon"
                      aria-hidden="true"
                    >
                      {icon}
                    </div>

                    {label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side */}
          <Reveal delay={80}>
            <div className="contact-form-wrap">

              <form ref={formRef} onSubmit={handleSubmit}>

                {/* Subject */}
                <input
                  type="hidden"
                  name="subject"
                  value="Nouveau message - Sean RW"
                />

                {/* Honeypot anti-spam */}
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="form-group">
                  <label htmlFor="name">Nom</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.fr"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reqtype">
                    Type de demande
                  </label>

                  <select
                    id="reqtype"
                    name="type"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Sélectionnez une option
                    </option>

                    <option value="Création de site">
                      Création de site
                    </option>

                    <option value="Optimisation performance">
                      Optimisation performance
                    </option>

                    <option value="Mission freelance / régie">
                      Mission freelance / régie
                    </option>

                    <option value="Audit gratuit">
                      Audit gratuit
                    </option>

                    <option value="Autre">
                      Autre
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

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
                    {status === 'sending'
                      ? 'Envoi en cours…'
                      : 'Envoyer le message'}
                  </button>
                )}

                {status === 'error' && (
                  <p
                    style={{
                      color: 'var(--light-muted)',
                      fontSize: '0.8rem',
                      marginTop: '8px',
                      textAlign: 'center',
                    }}
                  >
                    Erreur lors de l&apos;envoi.
                    Réessayez ou contactez-moi directement à :
                    <br />
                    srw.dev.freelance@protonmail.com
                  </p>
                )}

                {status === 'success' && (
                  <div
                    className="form-success"
                    style={{ display: 'block' }}
                  >
                    Message envoyé.
                    Je vous réponds sous 24h.
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