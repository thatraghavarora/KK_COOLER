import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { useLanguage } from '../context/LanguageContext'

const productsEn = [
  'Personal Cooler', 'Commercial Cooler', 'Tower Cooler', 'Pedestal Fan',
  'All Purpose Fan', 'Exhaust Fan', 'Room Heater', 'Iron', 'Other',
]

const productsHi = [
  'पर्सनल कूलर', 'कमर्शियल / डेजर्ट कूलर', 'टावर कूलर', 'पैडेस्टल पंखा',
  'ऑल पर्पस पंखा', 'एग्जॉस्ट पंखा', 'रूम हीटर', 'प्रेस (Iron)', 'अन्य',
]

export default function EnquiryPage() {
  const { isHindi, t } = useLanguage()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', product: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const products = isHindi ? productsHi : productsEn

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const getWhatsAppUrl = () => {
    const greeting = isHindi
      ? `नमस्ते श्री कमल अरोड़ा (के.के. कूलर जोधपुर),%0A%0Aमैंने आपकी वेबसाइट से पूछताछ भेजी है:%0A- नाम: ${encodeURIComponent(form.name)}%0A- फोन: ${encodeURIComponent(form.phone)}%0A- ईमेल: ${encodeURIComponent(form.email || 'N/A')}%0A- प्रोडक्ट: ${encodeURIComponent(form.product)}%0A- मात्रा: ${encodeURIComponent(form.quantity || '1')}%0A- संदेश / आवश्यकता: ${encodeURIComponent(form.message || 'N/A')}`
      : `Hello KK COOLER JODHPUR (Mr. Kamal Arora),%0A%0AI want to make an enquiry from your website:%0A- Name: ${encodeURIComponent(form.name)}%0A- Phone: ${encodeURIComponent(form.phone)}%0A- Email: ${encodeURIComponent(form.email || 'N/A')}%0A- Product: ${encodeURIComponent(form.product)}%0A- Quantity: ${encodeURIComponent(form.quantity || '1')}%0A- Message: ${encodeURIComponent(form.message || 'N/A')}`
    return `https://wa.me/919351359518?text=${greeting}`
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    window.open(getWhatsAppUrl(), '_blank')
  }

  return (
    <>
      <PageBanner
        title={t.nav.enquiry}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.enquiry }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'अपनी पूछताछ भेजें' : 'Send Your Enquiry'}</h2>
            <p>
              {isHindi
                ? 'न्यूनतम फैक्ट्री रेट और मॉडल उपलब्धता के लिए सीधे हमारे जोधपुर केंद्र से व्हाट्सएप पर जुड़ें।'
                : 'Connect with our Jodhpur factory directly via WhatsApp for fastest quotation and model availability.'}
            </p>
          </div>

          <div style={{ maxWidth: '650px', margin: '0 auto 30px' }}>
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20make%20an%20instant%20cooler%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                background: '#25D366',
                color: '#ffffff',
                padding: '16px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '26px' }}></i>
              <span>{isHindi ? 'व्हाट्सएप पर तत्काल पूछताछ: +91 9351359518' : 'Instant Enquiry on WhatsApp: +91 9351359518'}</span>
            </a>
          </div>

          <div className="enquiry-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>💬</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>
                  {isHindi ? 'व्हाट्सएप पूछताछ खोली जा रही है...' : 'Opening WhatsApp Enquiry...'}
                </h3>
                <p style={{ color: 'var(--text-light)', maxWidth: '400px', margin: '0 auto 25px' }}>
                  {isHindi
                    ? 'यदि व्हाट्सएप अपने आप नहीं खुला, तो नीचे दिए गए बटन पर क्लिक करके +91 9351359518 पर जुड़ें।'
                    : "If WhatsApp didn't open automatically, click the button below to connect with us on +91 9351359518."}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ background: '#25D366', borderColor: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
                  {isHindi ? 'व्हाट्सएप खोलें (+91 9351359518)' : 'Open WhatsApp (+91 9351359518)'}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="enq-name">{isHindi ? 'पूरा नाम' : 'Full Name'} *</label>
                    <input id="enq-name" type="text" name="name" required placeholder={isHindi ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'} value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enq-phone">{isHindi ? 'फोन नंबर' : 'Phone Number'} *</label>
                    <input id="enq-phone" type="tel" name="phone" required placeholder={isHindi ? 'अपना फोन नंबर दर्ज करें' : 'Enter your phone number'} value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="enq-email">{isHindi ? 'ईमेल एड्रेस' : 'Email Address'}</label>
                  <input id="enq-email" type="email" name="email" placeholder={isHindi ? 'ईमेल आईडी' : 'Enter your email address'} value={form.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="enq-product">{isHindi ? 'उत्पाद चुनें' : 'Product Interested In'} *</label>
                    <select id="enq-product" name="product" required value={form.product} onChange={handleChange}>
                      <option value="">{isHindi ? '-- उत्पाद चुनें --' : '-- Select Product --'}</option>
                      {products.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enq-quantity">{isHindi ? 'मात्रा (Quantity)' : 'Quantity Required'}</label>
                    <input id="enq-quantity" type="text" name="quantity" placeholder={isHindi ? 'उदा. 5 या 10 नग' : 'e.g. 10 units'} value={form.quantity} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="enq-message">{isHindi ? 'अतिरिक्त आवश्यकताएं / संदेश' : 'Additional Requirements'}</label>
                  <textarea id="enq-message" name="message" placeholder={isHindi ? 'अपनी आवश्यकता का विस्तार से विवरण लिखें...' : 'Describe your requirement in detail...'} value={form.message} onChange={handleChange}></textarea>
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
                    fontWeight: 700
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                  {isHindi ? 'व्हाट्सएप द्वारा पूछताछ भेजें (+91 9351359518)' : 'Submit Enquiry Directly via WhatsApp'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
