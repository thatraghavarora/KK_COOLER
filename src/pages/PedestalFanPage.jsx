import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const productsEn = [
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

const productsHi = [
  {
    name: 'के.के. कूलर पैडेस्टल पंखा 400mm',
    specs: ['ब्लेड साइज: 400mm (16")', 'मोटर: 75W', 'स्पीड: 3 सेटिंग्स', 'ऑसिलेशन: 90°', 'ऊंचाई एडजस्टेबल', 'ISI मार्क'],
  },
  {
    name: 'के.के. कूलर पैडेस्टल पंखा 450mm',
    specs: ['ब्लेड साइज: 450mm (18")', 'मोटर: 90W', 'स्पीड: 3 सेटिंग्स', 'ऑसिलेशन: 120°', 'थर्मल ओवरलोड सुरक्षा', '5-लीफ ब्लेड'],
  },
  {
    name: 'के.के. कूलर हैवी ड्यूटी पैडेस्टल',
    specs: ['ब्लेड साइज: 500mm (20")', 'मोटर: 120W', 'स्पीड: 5 सेटिंग्स', 'हैवी ड्यूटी मोटर', 'मेटल बॉडी', 'इंडस्ट्रियल ग्रेड'],
  },
  {
    name: 'के.के. कूलर स्लिम पैडेस्टल पंखा',
    specs: ['ब्लेड साइज: 400mm', 'मोटर: 65W', 'स्लिम डिजाइन', 'रिमोट कंट्रोल', 'टाइमर: 1-8 घंटे', 'एलईडी इंडिकेटर'],
  },
]

const areas = ['Jodhpur', 'Jaipur', 'Bikaner', 'Udaipur', 'Ajmer', 'Kota', 'Rajasthan', 'Gujarat']

export default function PedestalFanPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const products = isHindi ? productsHi : productsEn

  return (
    <>
      <PageBanner
        title={t.nav.pedestalFan}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.pedestalFan }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'पैडेस्टल पंखे' : 'Pedestal Fans'}</h2>
            <p>{isHindi ? 'घरों, कार्यालयों और दुकानों के लिए उच्च प्रदर्शन वाले मजबूत पैडेस्टल पंखे।' : 'High-performance pedestal fans for homes, offices, and commercial establishments. Energy-efficient with powerful airflow and quiet operation.'}</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #8f0a1d10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-fan"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>
                      {isHindi ? 'पैडेस्टल पंखा' : 'PEDESTAL FAN'}
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'उपलब्धता क्षेत्र' : 'Available In'}</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {(isHindi
              ? ['जोधपुर', 'जयपुर', 'बीकानेर', 'उदयपुर', 'अजमेर', 'कोटा', 'राजस्थान', 'गुजरात']
              : ['Jodhpur', 'Jaipur', 'Bikaner', 'Udaipur', 'Ajmer', 'Kota', 'Rajasthan', 'Gujarat']
            ).map((a, i) => (
              <span key={i} style={{ background: 'white', border: '1px solid var(--light-gray)', borderRadius: '25px', padding: '8px 20px', fontSize: '14px', color: 'var(--primary)', fontWeight: 500 }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)', marginRight: '7px' }}></i>{a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'थोक भाव में पंखे खरीदने हेतु संपर्क करें' : 'Looking for Bulk Fan Orders?'}</h2>
          <p>{isHindi ? 'सीधे निर्माता भाव में प्राप्त करें।' : 'Contact KK COOLER JODHPUR today for special dealer prices.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/enquiry')} className="btn btn-outline">{isHindi ? 'पूछताछ करें' : 'Send Enquiry'}</Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
