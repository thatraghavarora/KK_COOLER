import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { coolersData } from '../data/coolersData'

const commercialCoolers = coolersData.filter(c => c.category === 'commercial')

export default function CommercialCoolerPage() {
  return (
    <>
      <PageBanner title="Commercial Coolers" breadcrumb={[{ label: 'Our Products' }, { label: 'Commercial Coolers' }]} />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Commercial Coolers ({commercialCoolers.length} Heavy-Duty Models)</h2>
            <p>Powerful commercial air coolers designed for offices, shops, factories, and large halls. Industrial-grade copper motors, heavy-duty pumps, and 23+ deep technical specifications.</p>
          </div>
          <div className="product-list-grid">
            {commercialCoolers.map((cooler) => (
              <div className="product-card" key={cooler.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="product-card-img" style={{ background: '#ffffff', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', position: 'relative', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#1a1a2e', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                    {cooler.badge}
                  </span>
                  <Link to={`/product/${cooler.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img src={cooler.image} alt={cooler.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Link>
                </div>
                <div className="product-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Model: {cooler.modelNumber}
                  </div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px' }}>
                    <Link to={`/product/${cooler.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {cooler.name}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                    {cooler.highlight}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {cooler.sellingPrice}
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      {cooler.mrp}
                    </span>
                    <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
                      Factory Direct
                    </span>
                  </div>

                  <ul className="product-specs" style={{ flex: 1, marginBottom: '16px' }}>
                    {cooler.specs.slice(0, 4).map((s, j) => (
                      <li key={j} style={{ fontSize: '12px', marginBottom: '4px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '6px' }} />{s}</li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                    <Link
                      to={`/product/${cooler.id}`}
                      className="btn"
                      style={{
                        background: '#1a1a2e',
                        color: '#ffffff',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        padding: '9px',
                        textAlign: 'center',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <i className="fas fa-list-check" />
                      View Full Details & 23+ Specs
                    </Link>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={`https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(cooler.name)}%20(Model:%20${encodeURIComponent(cooler.modelNumber)})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ flex: 1, fontSize: '12.5px', padding: '9px', textAlign: 'center', borderRadius: '8px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                      >
                        <i className="fab fa-whatsapp" style={{ fontSize: '15px' }} />
                        Enquiry / Quote
                      </a>
                      <a
                        href={`https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20am%20interested%20in%20${encodeURIComponent(cooler.name)}%20(Model:%20${encodeURIComponent(cooler.modelNumber)})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: '#25D366', color: '#ffffff', padding: '9px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                        title="Instant WhatsApp Enquiry: +91 9351359518"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Looking for Bulk Orders?</h2>
          <p>We offer special discounts for bulk orders and institutional purchases. Get in touch now!</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20send%20an%20enquiry%20for%20Commercial%20Coolers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
              Send Enquiry on WhatsApp
            </a>
            <a href="tel:9351359518" className="btn" style={{ background: 'white', color: '#e84c0d', fontWeight: 700 }}>Call 9351359518</a>
          </div>
        </div>
      </section>
    </>
  )
}
