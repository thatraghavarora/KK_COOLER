import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { useLanguage } from '../context/LanguageContext'

export default function ContactPage() {
  const { isHindi, t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const getWhatsAppUrl = () => {
    const greeting = isHindi
      ? `नमस्ते श्री कमल अरोड़ा (के.के. कूलर जोधपुर),%0A%0Aमैंने आपकी वेबसाइट से संपर्क संदेश भेजा है:%0A👤 *नाम:* ${encodeURIComponent(form.name)}%0A📞 *फोन:* ${encodeURIComponent(form.phone)}%0A✉️ *ईमेल:* ${encodeURIComponent(form.email || 'N/A')}%0A📋 *विषय:* ${encodeURIComponent(form.subject)}%0A💬 *संदेश:* ${encodeURIComponent(form.message)}%0A%0Aकृपया मुझसे संपर्क करें।`
      : `Hello KK COOLER JODHPUR (Mr. Kamal Arora),%0A%0AI have submitted a contact enquiry via your website:%0A👤 *Name:* ${encodeURIComponent(form.name)}%0A📞 *Phone:* ${encodeURIComponent(form.phone)}%0A✉️ *Email:* ${encodeURIComponent(form.email || 'N/A')}%0A📋 *Subject:* ${encodeURIComponent(form.subject)}%0A💬 *Message:* ${encodeURIComponent(form.message)}%0A%0APlease get in touch with me regarding this.`
    return `https://wa.me/919351359518?text=${greeting}`
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    const url = getWhatsAppUrl()
    window.open(url, '_blank')
  }

  return (
    <>
      <PageBanner
        title={t.contact.title}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.contact.title }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h3>{t.contact.getInTouch}</h3>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.factoryAddress}</div>
                  <div className="value">
                    Plot No. 168 / Plot No. 19, Ambika Nagar / Aditya Nagar, Near Dali Bai Circle (Dali Bai Mandir), Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001<br />
                    <small style={{ color: '#fca5a5' }}>
                      {isHindi ? 'लैंडमार्क: डाली बाई सर्किल / डाली बाई चौराहा के समीप' : 'Landmark: Close to Dali Bai Circle / Dalibai Chouraha'}
                    </small>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-user-tie"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.proprietor}</div>
                  <div className="value">{t.contact.proprietorVal}</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.phoneTitle}</div>
                  <div className="value"><a href="tel:9351359518" style={{ color: 'white' }}>+91 9351359518</a><br /><a href="tel:9760098098" style={{ color: 'white' }}>9760098098</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon" style={{ background: '#25D366' }}><i className="fab fa-whatsapp"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.whatsappTitle}</div>
                  <div className="value"><a href="https://wa.me/919351359518?text=Hello%20Mr.%20Kamal%20Arora%20(KK%20Cooler),%20I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" style={{ color: '#86efac', fontWeight: 700 }}>+91 9351359518 ({isHindi ? 'चैट करें' : 'Click to Chat'})</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.emailTitle}</div>
                  <div className="value"><a href="mailto:info@kkcoolerjodhpur.com" style={{ color: 'white' }}>info@kkcoolerjodhpur.com</a></div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{t.contact.hoursTitle}</div>
                  <div className="value">{t.contact.hoursVal}</div>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon"><i className="fas fa-globe"></i></div>
                <div className="contact-detail-text">
                  <div className="label">{isHindi ? 'वेबसाइट' : 'Website'}</div>
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
              <h3>{t.contact.formTitle}</h3>
              <p style={{ color: '#64748b', fontSize: '13.5px', marginBottom: '20px' }}>
                {t.contact.formSubtitle}
              </p>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                  <div style={{ fontSize: '55px', marginBottom: '18px' }}>💬</div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>
                    {isHindi ? 'व्हाट्सएप से कनेक्ट किया जा रहा है...' : 'Connecting to WhatsApp...'}
                  </h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>
                    {isHindi
                      ? 'आपका संदेश तैयार कर लिया गया है। यदि व्हाट्सएप अपने आप नहीं खुला, तो नीचे दिए गए बटन पर क्लिक करके सीधे श्री कमल अरोड़ा (+91 9351359518) को भेजें।'
                      : "Your message has been prepared for WhatsApp. If WhatsApp didn't open automatically, click the button below to connect with Mr. Kamal Arora on +91 9351359518."}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ background: '#25D366', borderColor: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '15px' }}
                    >
                      <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                      {isHindi ? 'व्हाट्सएप खोलें (+91 9351359518)' : 'Open WhatsApp (+91 9351359518)'}
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ fontSize: '13px', padding: '8px 18px' }}
                      onClick={() => setSubmitted(false)}
                    >
                      {isHindi ? 'दूसरा संदेश भेजें' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ct-name">{t.contact.fullName} *</label>
                      <input id="ct-name" type="text" name="name" required placeholder={isHindi ? 'आपका पूरा नाम' : 'Your full name'} value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ct-phone">{t.contact.phone} *</label>
                      <input id="ct-phone" type="tel" name="phone" required placeholder={isHindi ? 'आपका फोन नंबर' : 'Your phone number'} value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-email">{t.contact.email}</label>
                    <input id="ct-email" type="email" name="email" placeholder={isHindi ? 'ईमेल आईडी' : 'Your email address'} value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-subject">{t.contact.subject} *</label>
                    <input id="ct-subject" type="text" name="subject" required placeholder={isHindi ? 'विषय लिखें' : 'What is this about?'} value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-message">{t.contact.message} *</label>
                    <textarea id="ct-message" name="message" required placeholder={isHindi ? 'अपना संदेश या आवश्यकता यहाँ लिखें...' : 'Write your message here...'} value={form.message} onChange={handleChange}></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '15px',
                      background: '#25D366',
                      borderColor: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontWeight: 700,
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '19px' }}></i>
                    {t.contact.sendMessage}
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
                {t.contact.mapTitle}
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
              {t.contact.directionsBtn}
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
