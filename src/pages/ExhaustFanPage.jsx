import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const productsEn = [
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

const productsHi = [
  {
    name: 'के.के. कूलर एग्जॉस्ट पंखा 150mm',
    specs: ['ब्लेड: 150mm (6")', 'मोटर: 20W', 'स्पीड: 1200 RPM', 'एयर फ्लो: 140 m³/घंटा', 'उपयोग: बाथरूम/रसोई', 'शोर: < 38dB शांत'],
  },
  {
    name: 'के.के. कूलर एग्जॉस्ट पंखा 200mm',
    specs: ['ब्लेड: 200mm (8")', 'मोटर: 30W', 'स्पीड: 1000 RPM', 'एयर फ्लो: 210 m³/घंटा', 'शटर टाइप', 'आसान फिटिंग'],
  },
  {
    name: 'के.के. कूलर एग्जॉस्ट पंखा 250mm',
    specs: ['ब्लेड: 250mm (10")', 'मोटर: 45W', 'स्पीड: 950 RPM', 'एयर फ्लो: 300 m³/घंटा', 'इंडस्ट्रियल उपयोग', 'मेटल बॉडी'],
  },
  {
    name: 'के.के. कूलर वेंटिलेशन पंखा 300mm',
    specs: ['ब्लेड: 300mm (12")', 'मोटर: 60W', 'स्पीड: 850 RPM', 'एयर फ्लो: 420 m³/घंटा', 'बड़े स्थानों हेतु', 'धूल-रोधी'],
  },
]

export default function ExhaustFanPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const products = isHindi ? productsHi : productsEn

  return (
    <>
      <PageBanner
        title={t.nav.exhaustFan}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.exhaustFan }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'एग्जॉस्ट पंखे' : 'Exhaust Fans'}</h2>
            <p>{isHindi ? 'रसोई, बाथरूम, कार्यालयों और कारखानों के लिए उच्च गुणवत्ता वाले शक्तिशाली एग्जॉस्ट पंखे।' : 'High-quality exhaust fans for kitchens, bathrooms, offices, and industrial spaces. Ensure fresh air circulation and remove stale air effectively.'}</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #8f0a1d10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-tachometer-alt"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>
                      {isHindi ? 'एग्जॉस्ट पंखा' : 'EXHAUST FAN'}
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
          <h2>{isHindi ? 'बेहतरीन हवा हेतु एग्जॉस्ट पंखे लगाएं' : 'Improve Air Quality with KK COOLER Exhaust Fans!'}</h2>
          <p>{isHindi ? 'सर्वश्रेष्ठ दरों पर मजबूत मेटल और प्लास्टिक एग्जॉस्ट पंखे उपलब्ध हैं।' : 'ISI certified exhaust fans at best prices. Suitable for all residential and commercial applications.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/enquiry')} className="btn btn-outline">{isHindi ? 'पूछताछ करें' : 'Send Enquiry'}</Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
