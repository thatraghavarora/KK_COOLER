import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const products = [
  {
    name: 'KK COOLER Exhaust Fan 150mm',
    specs: ['Blade: 150mm (6")', 'Motor: 20W', 'Speed: 1200 RPM', 'Air Flow: 140 m³/hr', 'For: Bathroom/Kitchen', 'Noise: < 38dB'],
  },
  {
    name: 'KK COOLER Exhaust Fan 200mm',
    specs: ['Blade: 200mm (8")', 'Motor: 30W', 'Speed: 1000 RPM', 'Air Flow: 210 m³/hr', 'Shutter Type', 'Easy Installation'],
  },
  {
    name: 'KK COOLER Exhaust Fan 250mm',
    specs: ['Blade: 250mm (10")', 'Motor: 45W', 'Speed: 950 RPM', 'Air Flow: 300 m³/hr', 'Industrial Use', 'Metal Body'],
  },
  {
    name: 'KK COOLER Ventilation Fan 300mm',
    specs: ['Blade: 300mm (12")', 'Motor: 60W', 'Speed: 850 RPM', 'Air Flow: 420 m³/hr', 'For Large Spaces', 'Dust Resistant'],
  },
]

export default function ExhaustFanPage() {
  return (
    <>
      <PageBanner title="Exhaust Fan" breadcrumb={[{ label: 'Our Products' }, { label: 'Exhaust Fan' }]} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Exhaust Fans</h2>
            <p>High-quality exhaust fans for kitchens, bathrooms, offices, and industrial spaces. Ensure fresh air circulation and remove stale air effectively.</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #8f0a1d10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-tachometer-alt"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>EXHAUST FAN</div>
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
      <section className="cta-section">
        <div className="container">
          <h2>Improve Air Quality with KK COOLER Exhaust Fans!</h2>
          <p>ISI certified exhaust fans at best prices. Suitable for all residential and commercial applications.</p>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-outline">Send Enquiry</Link>
            <Link to="/contact-us" className="btn" style={{ background: 'white', color: '#e84c0d', fontWeight: 700 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
