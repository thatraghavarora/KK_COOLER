import { useState } from 'react'
import PageBanner from '../components/PageBanner'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner title="Contact Us" breadcrumb={[{ label: 'Contact Us' }]} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h3>Get In Touch</h3>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Store &amp; Factory Address</div>
                  <div className="value">
                    Plot No. 168 / Plot No. 19, Ambika Nagar / Aditya Nagar, Near Dali Bai Circle (Dali Bai Mandir), Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001<br />
                    <small style={{ color: '#fca5a5' }}>Landmark: Close to Dali Bai Circle / Dalibai Chouraha</small>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-user-tie"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Proprietor</div>
                  <div className="value">Mr. Kamal Arora (K.K. Enterprises)</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Phone Numbers</div>
                  <div className="value"><a href="tel:9351359518" style={{ color: 'white' }}>+91 9351359518</a><br /><a href="tel:9760098098" style={{ color: 'white' }}>9760098098</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon" style={{ background: '#25D366' }}><i className="fab fa-whatsapp"></i></div>
                <div className="contact-detail-text">
                  <div className="label">WhatsApp Number</div>
                  <div className="value"><a href="https://wa.me/919351359518?text=Hello%20Mr.%20Kamal%20Arora%20(KK%20Cooler),%20I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" style={{ color: '#86efac', fontWeight: 700 }}>+91 9351359518 (Click to Chat)</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Email Address</div>
                  <div className="value"><a href="mailto:info@kkcoolerjodhpur.com" style={{ color: 'white' }}>info@kkcoolerjodhpur.com</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Operating Hours</div>
                  <div className="value">Open daily from 10:00 AM to 6:00 PM / 7:00 PM</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-globe"></i></div>
                <div className="contact-detail-text">
                  <div className="label">Website</div>
                  <div className="value">www.kkcoolerjodhpur.com</div>
                </div>
              </div>

              <div className="contact-social">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                  <div style={{ fontSize: '55px', marginBottom: '18px' }}>✅</div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Message Sent Successfully!</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '20px' }}>
                    Thank you for contacting us. We will get back to you within 24 hours.
                  </p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ct-name">Full Name *</label>
                      <input id="ct-name" type="text" name="name" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ct-phone">Phone Number *</label>
                      <input id="ct-phone" type="tel" name="phone" required placeholder="Your phone number" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-email">Email Address</label>
                    <input id="ct-email" type="email" name="email" placeholder="Your email address" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-subject">Subject *</label>
                    <input id="ct-subject" type="text" name="subject" required placeholder="What is this about?" value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-message">Message *</label>
                    <textarea id="ct-message" name="message" required placeholder="Write your message here..." value={form.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                    <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                <i className="fas fa-map-location-dot" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                Factory &amp; Store Location Map
              </h3>
              <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '13.5px' }}>
                Plot No. 168 / Plot No. 19, Ambika Nagar / Aditya Nagar, Near Dali Bai Circle (Dali Bai Mandir), Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+No.+168+Ambika+Nagar+Near+Dali+Bai+Circle+Jodhpur+Rajasthan+342001"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '9px 18px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fas fa-directions" style={{ color: 'var(--primary)' }}></i>
              Open in Google Maps / Directions
            </a>
          </div>

          <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
            <iframe
              title="KK COOLER JODHPUR - Dali Bai Circle, Jodhpur, Rajasthan"
              src="https://maps.google.com/maps?q=Plot+No.+168,+Ambika+Nagar,+Near+Dali+Bai+Circle,+Masuria,+Jodhpur,+Rajasthan+342001&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
