import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const products = [
  {
    name: 'KK COOLER Pedestal Fan 400mm',
    specs: ['Blade Size: 400mm (16")', 'Motor: 75W', 'Speed: 3 Settings', 'Oscillation: 90°', 'Height Adjustable', 'ISI Marked'],
  },
  {
    name: 'KK COOLER Pedestal Fan 450mm',
    specs: ['Blade Size: 450mm (18")', 'Motor: 90W', 'Speed: 3 Settings', 'Oscillation: 120°', 'Thermal Overload Protect', '5-Leaf Blade'],
  },
  {
    name: 'KK COOLER Heavy Duty Pedestal',
    specs: ['Blade Size: 500mm (20")', 'Motor: 120W', 'Speed: 5 Settings', 'Heavy Duty Motor', 'Metal Body', 'Industrial Grade'],
  },
  {
    name: 'KK COOLER Slim Pedestal Fan',
    specs: ['Blade Size: 400mm', 'Motor: 65W', 'Slim Design', 'Remote Control', 'Timer: 1-8 Hours', 'LED Indicator'],
  },
]

const areas = ['Bihar', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Lucknow', 'Kanpur', 'Patna', 'Jaipur']

export default function PedestalFanPage() {
  return (
    <>
      <PageBanner title="Pedestal Fan" breadcrumb={[{ label: 'Our Products' }, { label: 'Pedestal Fan' }]} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Pedestal Fans</h2>
            <p>High-performance pedestal fans for homes, offices, and commercial establishments. Energy-efficient with powerful airflow and quiet operation.</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #8f0a1d10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-fan"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>PEDESTAL FAN</div>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <ul className="product-specs">
                    {p.specs.map((s, j) => (
                      <li key={j}><i className="fas fa-check-circle"></i>{s}</li>
                    ))}
                  </ul>
                  <Link to="/enquiry" className="btn btn-primary" style={{ marginTop: '12px', display: 'inline-block', fontSize: '13px', padding: '9px 22px' }}>Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>Available In Your State</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {areas.map((a, i) => (
              <span key={i} style={{ background: 'white', border: '2px solid var(--primary)', borderRadius: '25px', padding: '8px 22px', fontSize: '14px', color: 'var(--primary)', fontWeight: 600 }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)', marginRight: '7px' }}></i>{a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Order Pedestal Fans at Factory Price!</h2>
          <p>Get the best deals on pedestal fans across all states. Bulk order discounts available.</p>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-outline">Send Enquiry</Link>
            <Link to="/contact-us" className="btn" style={{ background: 'white', color: '#e84c0d', fontWeight: 700 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
