import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const productsEn = [
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

const productsHi = [
  {
    name: 'के.के. कूलर ड्राई प्रेस 1000W',
    specs: ['पावर: 1000W', 'प्रकार: ड्राई आयरन', 'सोलप्लेट: नॉन-स्टिक', 'तापमान: रोटरी डायल', 'हल्का वजन: 1.1 किग्रा', 'इंडिकेटर लाइट'],
  },
  {
    name: 'के.के. कूलर स्टीम प्रेस 1400W',
    specs: ['पावर: 1400W', 'प्रकार: स्टीम आयरन', 'सोलप्लेट: सिरेमिक', 'स्टीम बर्स्ट', 'पानी क्षमता: 250ml', 'सेल्फ-क्लीन'],
  },
  {
    name: 'के.के. कूलर ड्राई प्रेस 750W',
    specs: ['पावर: 750W', 'प्रकार: ड्राई आयरन', 'सोलप्लेट: टेफ्लॉन', 'तापमान: 5 सेटिंग्स', 'वजन: 0.9 किग्रा', 'आरामदायक हैंडल'],
  },
  {
    name: 'के.के. कूलर ट्रैवल प्रेस 1000W',
    specs: ['पावर: 1000W', 'ड्यूल वोल्टेज: 110-240V', 'कॉम्पैक्ट व फोल्डेबल', 'स्टीम विकल्प', 'कैरी पाउच', 'ऑटो शट-ऑफ'],
  },
]

export default function IronPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const products = isHindi ? productsHi : productsEn

  return (
    <>
      <PageBanner
        title={t.nav.iron}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.iron }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'इलेक्ट्रिक प्रेस (Irons)' : 'Electric Irons'}</h2>
            <p>{isHindi ? 'ड्राई, स्टीम और ट्रैवल वेरिएंट्स में उच्च गुणवत्ता वाली टिकाऊ इलेक्ट्रिक प्रेस।' : "Get perfectly pressed clothes every time with KK COOLER's range of irons. Available in dry, steam, and travel variants for all your pressing needs."}</p>
          </div>
          <div className="product-list-grid">
            {products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-card-img" style={{ background: 'linear-gradient(135deg, #c0132a15, #e8193a10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '52px', color: 'var(--primary)', opacity: 0.8 }}><i className="fas fa-tshirt"></i></div>
                    <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '8px' }}>
                      {isHindi ? 'इलेक्ट्रिक प्रेस' : 'ELECTRIC IRON'}
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
          <h2>{isHindi ? 'सर्वश्रेष्ठ दरों पर इलेक्ट्रिक प्रेस पाएं!' : 'Get KK COOLER Irons at the Best Price!'}</h2>
          <p>{isHindi ? 'घरेलू एवं व्यावसायिक उपयोग हेतु टिकाऊ एवं सुरक्षित प्रेस।' : 'Durable, efficient irons for home and business use. Bulk orders available at special rates.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/enquiry')} className="btn btn-outline">{isHindi ? 'पूछताछ करें' : 'Send Enquiry'}</Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
