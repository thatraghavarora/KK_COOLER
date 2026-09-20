import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const products = [
  {
    name: 'KK COOLER Room Heater 1000W',
    specs: ['Power: 1000W', 'Heating: Quartz', 'Coverage: 120 sq.ft', 'Thermostat Control', 'Tip-Over Safety', 'Instant Heat'],
  },
  {
    name: 'KK COOLER Fan Heater 2000W',
    specs: ['Power: 2000W', 'Heating: PTC', 'Coverage: 250 sq.ft', 'Fan Forced Heat', '2-Heat Settings', 'Cool Blow Option'],
  },
  {
    name: 'KK COOLER Oil Filled Heater 9-Fin',
    specs: ['Power: 2400W', 'Type: Oil Filled', 'Coverage: 300 sq.ft', '3-Heat Settings', 'Timer: 24hr', 'Child Lock'],
  },
  {
    name: 'KK COOLER Halogen Heater 1200W',
    specs: ['Power: 1200W', 'Type: Halogen', 'Coverage: 150 sq.ft', 'Instant Warm', 'Portable', 'Energy Efficient'],
  },
]

export default function RoomHeaterPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()

  return (
    <>
      <PageBanner
        title={t.nav.roomHeater}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.roomHeater }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'रूम हीटर्स' : 'Room Heaters'}</h2>
            <p>{isHindi ? 'सर्दियों में गर्म और सुरक्षित वातावरण के लिए कुशल एवं टिकाऊ रूम हीटर्स।' : "Stay warm through every winter with KK COOLER's efficient and safe room heaters. Available in quartz, fan, oil-filled, and halogen variants."}</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #8f0a1d10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-fire"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>ROOM HEATER</div>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <ul className="product-specs">
                    {p.specs.map((s, j) => (
                      <li key={j}><i className="fas fa-check-circle"></i>{s}</li>
                    ))}
                  </ul>
                  <Link to={getLocalizedPath('/enquiry')} className="btn btn-primary" style={{ marginTop: '12px', display: 'inline-block', fontSize: '13px', padding: '9px 22px' }}>
                    {isHindi ? 'कोटेशन लें' : 'Get Quote'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'सर्दियों में पाएं आरामदायक गर्मी' : 'Stay Warm This Winter with KK COOLER!'}</h2>
          <p>{isHindi ? 'सुरक्षित, किफायती और ऊर्जा-कुशल रूम हीटर्स।' : 'Safe, efficient, and affordable room heaters. Order now before winter arrives.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/enquiry')} className="btn btn-outline">{isHindi ? 'पूछताछ करें' : 'Send Enquiry'}</Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
