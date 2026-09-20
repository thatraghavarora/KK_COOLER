import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const productsEn = [
  {
    name: 'KK COOLER Table Fan 300mm',
    specs: ['Blade: 300mm (12")', 'Motor: 50W', 'Speed: 3', 'Tilt: Adjustable', 'Compact & Portable', 'Quiet Operation'],
  },
  {
    name: 'KK COOLER Wall Fan 400mm',
    specs: ['Blade: 400mm (16")', 'Motor: 70W', 'Speed: 3', 'Wall Mountable', 'Auto-Oscillation', 'ISI Certified'],
  },
  {
    name: 'KK COOLER Ceiling Fan 1200mm',
    specs: ['Blade: 1200mm (48")', 'Motor: 75W', 'Speed: 5', 'Energy Saver', 'Aerodynamic Blades', '5-Year Warranty'],
  },
  {
    name: 'KK COOLER Ceiling Fan 1400mm',
    specs: ['Blade: 1400mm (56")', 'Motor: 85W', 'Speed: 5', 'Anti-Rust Blades', 'High Air Delivery', 'Thermal Overload'],
  },
]

const productsHi = [
  {
    name: 'के.के. कूलर टेबल पंखा 300mm',
    specs: ['ब्लेड: 300mm (12")', 'मोटर: 50W', 'स्पीड: 3 सेटिंग्स', 'झुकाव: एडजस्टेबल', 'कॉम्पैक्ट व पोर्टेबल', 'शांत संचालन'],
  },
  {
    name: 'के.के. कूलर वॉल पंखा 400mm',
    specs: ['ब्लेड: 400mm (16")', 'मोटर: 70W', 'स्पीड: 3 सेटिंग्स', 'दीवार पर लगाने योग्य', 'ऑटो-ऑसिलेशन', 'ISI प्रमाणित'],
  },
  {
    name: 'के.के. कूलर सीलिंग पंखा 1200mm',
    specs: ['ब्लेड: 1200mm (48")', 'मोटर: 75W', 'स्पीड: 5 सेटिंग्स', 'बिजली बचत', 'एयरोडायनामिक ब्लेड्स', '5-वर्ष की वारंटी'],
  },
  {
    name: 'के.के. कूलर सीलिंग पंखा 1400mm',
    specs: ['ब्लेड: 1400mm (56")', 'मोटर: 85W', 'स्पीड: 5 सेटिंग्स', 'जंग-रोधी ब्लेड्स', 'तेज एयर डिलीवरी', 'थर्मल ओवरलोड'],
  },
]

export default function AllPurposeFansPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const products = isHindi ? productsHi : productsEn

  return (
    <>
      <PageBanner
        title={t.nav.allPurposeFan}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.allPurposeFan }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'ऑल पर्पस पंखे' : 'All Purpose Fans'}</h2>
            <p>{isHindi ? 'टेबल पंखे, वॉल पंखे, सीलिंग पंखे — हर स्थान के लिए ऊर्जा-कुशल पंखे।' : 'Versatile fans for every space — table fans, wall fans, ceiling fans and more. All designed for maximum airflow and energy efficiency.'}</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #e8193a10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-circle-notch"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>
                      {isHindi ? 'ऑल पर्पस पंखा' : 'ALL PURPOSE FAN'}
                    </div>
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
          <h2>{isHindi ? 'थोक भाव में ऑल पर्पस पंखे पाएं!' : 'Get All Purpose Fans at Wholesale Rates!'}</h2>
          <p>{isHindi ? 'थोक ऑर्डर्स और डीलरशिप पूछताछ आमंत्रित हैं।' : 'Bulk orders welcome. Dealer & distributor inquiries also invited.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/enquiry')} className="btn btn-outline">{isHindi ? 'पूछताछ करें' : 'Send Enquiry'}</Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
