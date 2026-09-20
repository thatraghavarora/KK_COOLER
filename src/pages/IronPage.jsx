import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const products = [
  {
    name: 'KK COOLER Dry Iron 1000W',
    specs: ['Power: 1000W', 'Type: Dry Iron', 'Soleplate: Non-Stick', 'Temperature: Dial', 'Lightweight: 1.1 kg', 'Indicator Light'],
  },
  {
    name: 'KK COOLER Steam Iron 1400W',
    specs: ['Power: 1400W', 'Type: Steam Iron', 'Soleplate: Ceramic', 'Steam Burst', 'Water Capacity: 250ml', 'Self-Clean'],
  },
  {
    name: 'KK COOLER Dry Iron 750W',
    specs: ['Power: 750W', 'Type: Dry Iron', 'Soleplate: Teflon', 'Temperature: 5 Settings', 'Weight: 0.9 kg', 'Ergonomic Handle'],
  },
  {
    name: 'KK COOLER Travel Iron 1000W',
    specs: ['Power: 1000W', 'Dual Voltage: 110-240V', 'Compact & Foldable', 'Steam Option', 'Carry Pouch', 'Auto Shut-Off'],
  },
]

export default function IronPage() {
  return (
    <>
      <PageBanner title="Iron" breadcrumb={[{ label: 'Our Products' }, { label: 'Iron' }]} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Electric Irons</h2>
            <p>Get perfectly pressed clothes every time with KK COOLER's range of irons. Available in dry, steam, and travel variants for all your pressing needs.</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #e8193a10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-tshirt"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>ELECTRIC IRON</div>
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
          <h2>Get KK COOLER Irons at the Best Price!</h2>
          <p>Durable, efficient irons for home and business use. Bulk orders available at special rates.</p>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-outline">Send Enquiry</Link>
            <Link to="/contact-us" className="btn" style={{ background: 'white', color: '#e84c0d', fontWeight: 700 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
