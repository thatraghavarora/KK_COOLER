import { useState } from 'react'
import PageBanner from '../components/PageBanner'

const products = [
  'Personal Cooler', 'Commercial Cooler', 'Tower Cooler', 'Pedestal Fan',
  'All Purpose Fan', 'Exhaust Fan', 'Room Heater', 'Iron', 'Other',
]

export default function EnquiryPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', product: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    const text = `Hello KK COOLER JODHPUR,%0A%0AI want to make an enquiry:%0A- Name: ${encodeURIComponent(form.name)}%0A- Phone: ${encodeURIComponent(form.phone)}%0A- Email: ${encodeURIComponent(form.email || 'N/A')}%0A- Product: ${encodeURIComponent(form.product)}%0A- Quantity: ${encodeURIComponent(form.quantity || '1')}%0A- Message: ${encodeURIComponent(form.message || 'N/A')}`
    window.open(`https://wa.me/919351359518?text=${text}`, '_blank')
  }

  return (
    <>
      <PageBanner title="Enquiry" breadcrumb={[{ label: 'Enquiry' }]} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Send Your Enquiry</h2>
            <p>Connect with our Jodhpur factory directly via WhatsApp for fastest quotation and model availability.</p>
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
              <span>Instant Enquiry on WhatsApp: +91 9351359518</span>
            </a>
          </div>

          <div className="enquiry-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Opening WhatsApp Enquiry...</h3>
                <p style={{ color: 'var(--text-light)', maxWidth: '400px', margin: '0 auto 25px' }}>
                  If WhatsApp didn't open automatically, click the button below to connect with us on +91 9351359518.
                </p>
                <a
                  href={`https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20am%20enquiring%20about%20${encodeURIComponent(form.product || 'coolers')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ background: '#25D366', borderColor: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
                  Open WhatsApp (+91 9351359518)
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="enq-name">Full Name *</label>
                    <input id="enq-name" type="text" name="name" required placeholder="Enter your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enq-phone">Phone Number *</label>
                    <input id="enq-phone" type="tel" name="phone" required placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="enq-email">Email Address</label>
                  <input id="enq-email" type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="enq-product">Product Interested In *</label>
                    <select id="enq-product" name="product" required value={form.product} onChange={handleChange}>
                      <option value="">-- Select Product --</option>
                      {products.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enq-quantity">Quantity Required</label>
                    <input id="enq-quantity" type="text" name="quantity" placeholder="e.g. 10 units" value={form.quantity} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="enq-message">Additional Requirements</label>
                  <textarea id="enq-message" name="message" placeholder="Describe your requirement in detail..." value={form.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
                  <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginTop: '50px' }}>
            {[
              { icon: 'fas fa-phone-alt', label: 'Call Us', value: '0120-4271918\n9760098098', color: 'var(--primary)' },
              { icon: 'fas fa-envelope', label: 'Email Us', value: 'info@kkcoolerjodhpur.com', color: 'var(--accent)' },
              { icon: 'fas fa-clock', label: 'Working Hours', value: 'Mon–Sat: 9 AM – 6 PM', color: 'var(--primary)' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--light)',
                borderRadius: '10px',
                padding: '25px 20px',
                textAlign: 'center',
                borderTop: `3px solid ${item.color}`,
              }}>
                <div style={{ width: '50px', height: '50px', background: item.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: 'white', fontSize: '18px' }}>
                  <i className={item.icon}></i>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: '5px', fontSize: '14px' }}>{item.label}</div>
                <div style={{ color: 'var(--text-light)', fontSize: '13.5px', whiteSpace: 'pre-line' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
