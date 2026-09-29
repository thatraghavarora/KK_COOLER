import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { allCoolers, coolerCategories, heroBanners, comparisonTable, wholesaleInfo } from '../data/coolersData'
import { getLocalizedCooler } from '../utils/hindiTranslator'
import heroVideo from '../assets/background.mp4'
import ProductCard from '../components/ProductCard'

const featuresEn = [
  { icon: 'fas fa-history', title: '15+ Years Experience', desc: 'Premium Indian manufacturer of high-performance air coolers, built for Indian conditions.' },
  { icon: 'fas fa-sync-alt', title: 'Reverse / Forward Motor', desc: 'Reverse for cooling, Forward for ventilation — on every model from YOYO to TERMINATOR.' },
  { icon: 'fas fa-fan', title: '3-Leaf & 4-Leaf Fans', desc: '12.5" compact fans up to 20.5" jumbo 4-leaf maximum-air-delivery fans.' },
  { icon: 'fas fa-industry', title: 'Direct Factory Pricing', desc: 'Wholesale counter at Bhadu Market, Jodhpur — best wholesale rates & bulk orders.' },
]

const featuresHi = [
  { icon: 'fas fa-history', title: '15+ वर्षों का अनुभव', desc: 'हाई-परफॉर्मेंस एयर कूलर्स के प्रीमियम भारतीय निर्माता — भारतीय परिस्थितियों हेतु निर्मित।' },
  { icon: 'fas fa-sync-alt', title: 'रिवर्स / फॉरवर्ड मोटर', desc: 'रिवर्स — ठंडी हवा हेतु, फॉरवर्ड — वेंटिलेशन हेतु — YOYO से TERMINATOR तक हर मॉडल में।' },
  { icon: 'fas fa-fan', title: '3-लीफ व 4-लीफ पंखे', desc: '12.5" कॉम्पैक्ट पंखों से 20.5" जंबो 4-लीफ मैक्सिमम एयर डिलीवरी पंखों तक।' },
  { icon: 'fas fa-industry', title: 'सीधे फैक्ट्री भाव में', desc: 'भादू मार्केट, जोधपुर होलसेल काउंटर — सर्वोत्तम थोक दरें व बल्क ऑर्डर।' },
]

const statsEn = [
  { num: '50,000', label: 'Happy Customers', suffix: '+' },
  { num: '100', label: 'Cities Covered', suffix: '+' },
  { num: '15', label: 'Years Experience', suffix: '+' },
  { num: '15', label: 'Cooler Models', suffix: '' },
]

const statsHi = [
  { num: '50,000', label: 'संतुष्ट ग्राहक', suffix: '+' },
  { num: '100', label: 'शहरों में सप्लाय', suffix: '+' },
  { num: '15', label: 'वर्षों का अनुभव', suffix: '+' },
  { num: '15', label: 'कूलर मॉडल्स', suffix: '' },
]

export default function HomePage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const [selectedType, setSelectedType] = useState('all')
  const [heroIndex, setHeroIndex] = useState(0)

  const displayedCoolers = useMemo(() => {
    const list = selectedType === 'all'
      ? allCoolers
      : allCoolers.filter(c => c.category === selectedType)
    return list.map(c => getLocalizedCooler(c, isHindi))
  }, [selectedType, isHindi])

  const features = isHindi ? featuresHi : featuresEn
  const stats = isHindi ? statsHi : statsEn
  const hero = heroBanners[heroIndex]

  const goHero = (dir) => {
    setHeroIndex((prev) => (prev + dir + heroBanners.length) % heroBanners.length)
  }

  return (
    <>
      {/* ===== HERO VIDEO BACKGROUND (no image / no text, no black gap) ===== */}
      <section className="hero hero-video-section" style={{ position: 'relative', background: '#000', lineHeight: 0, padding: 0, margin: 0, overflow: 'hidden' }}>
        <video
          className="hero-video-bg"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', background: '#000', verticalAlign: 'top' }}
        />
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon"><i className={f.icon}></i></div>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS — ALL 15 MODELS ===== */}
      <section className="section section-alt" id="products">
        <div className="container">
          <div className="section-title">
            <span className="badge-tag" style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>
              {isHindi ? 'के.के. कूलर जोधपुर — 15 मॉडल' : 'KK COOLER JODHPUR — 15 MODELS'}
            </span>
            <h2>{isHindi ? 'संपूर्ण 15-मॉडल कूलर रेंज' : 'Explore Our Complete 15-Model Range'}</h2>
            <p>{isHindi ? 'हर पोस्टर पर क्लिक करें — फुल साइज कैटलॉग पोस्टर, साइज, टैंक, पंखा व मोटर विवरण खुलेगा।' : 'Click any cooler to open its full-size catalog poster with size, tank, fan & motor details.'}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {coolerCategories.map(cat => (
              <div
                key={cat.id} onClick={() => setSelectedType(cat.id)}
                style={{
                  background: selectedType === cat.id ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : '#ffffff',
                  color: selectedType === cat.id ? '#ffffff' : 'var(--dark)',
                  borderRadius: '16px', padding: '24px', cursor: 'pointer',
                  border: selectedType === cat.id ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                  boxShadow: selectedType === cat.id ? '0 15px 35px rgba(192, 19, 42, 0.25)' : '0 4px 20px rgba(0,0,0,0.05)',
                  display: 'flex', alignItems: 'center', gap: '20px',
                }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '12px', background: '#ffffff', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: selectedType === cat.id ? '#ffffff' : 'var(--primary)', marginBottom: '4px', fontWeight: 700 }}>{cat.name}</h3>
                  <div style={{ fontSize: '12px', color: selectedType === cat.id ? '#fca5a5' : '#64748b', fontWeight: 600 }}>{cat.count}</div>
                  <div style={{ fontSize: '11px', marginTop: '4px', color: selectedType === cat.id ? '#cbd5e1' : '#94a3b8' }}>{cat.tagline}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '35px' }}>
            {[
              { id: 'all', label: isHindi ? 'सभी (15)' : 'All (15)' },
              { id: 'personal', label: isHindi ? 'कॉम्पैक्ट (5)' : 'Compact (5)' },
              { id: 'tower', label: isHindi ? 'फैमिली (2)' : 'Family (2)' },
              { id: 'commercial', label: isHindi ? 'जंबो (8)' : 'Jumbo (8)' },
            ].map(tab => (
              <button
                key={tab.id} onClick={() => setSelectedType(tab.id)}
                style={{
                  padding: '10px 22px', borderRadius: '30px', border: 'none',
                  background: selectedType === tab.id ? 'var(--primary)' : '#ffffff',
                  color: selectedType === tab.id ? '#ffffff' : 'var(--dark)',
                  fontWeight: selectedType === tab.id ? 700 : 600, fontSize: '13px', cursor: 'pointer',
                  boxShadow: selectedType === tab.id ? '0 6px 20px rgba(192, 19, 42, 0.35)' : '0 2px 10px rgba(0,0,0,0.06)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="product-list-grid">
            {displayedCoolers.map(cooler => (
              <ProductCard key={cooler.id} cooler={cooler} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link to={getLocalizedPath('/all-coolers')} className="btn btn-blue" style={{ padding: '14px 34px', fontSize: '15px', fontWeight: 700 }}>
              {isHindi ? 'पूरा कैटलॉग पेज देखें (15 मॉडल)' : 'View Full Catalog Page (15 Models)'} <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE (from catalog) ===== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'कैटलॉग तुलना तालिका' : 'Catalog Comparison Table'}</h2>
            <p>{isHindi ? 'कैटलॉग में छपे अनुसार — साइज, टैंक, पंखा व सर्कल।' : 'Exactly as printed in the catalog — size, tank, blade & circle.'}</p>
          </div>
          <div className="specs-table-wrapper" style={{ background: '#fff', borderRadius: '16px', overflowX: 'auto', border: '1px solid #e2e8f0', boxShadow: '0 6px 25px rgba(0,0,0,0.06)' }}>
            <table style={{ width: '100%', minWidth: '640px', borderCollapse: 'collapse', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: '#1a1a2e', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Model</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Size</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Tank</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Fan</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Circle</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Open</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, idx) => {
                  const cooler = allCoolers.find(c => c.name.includes(row.model))
                  return (
                    <tr key={row.model} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 800, color: 'var(--primary)' }}>{row.model}</td>
                      <td style={{ padding: '10px 16px' }}>{row.size}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>{row.tank} L</td>
                      <td style={{ padding: '10px 16px' }}>{row.fan}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'right' }}>{row.circle}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                        {cooler && <Link to={getLocalizedPath(`/product/${cooler.id}`)} style={{ color: 'var(--primary)', fontWeight: 700 }}>→</Link>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '10px', textAlign: 'center' }}>
            {isHindi ? 'नोट: कूलिंग एरिया, CFM, वाटेज व भाव कैटलॉग में नहीं दिए गए हैं — सर्वोत्तम भाव हेतु संपर्क करें।' : 'Note: cooling-area, CFM, wattage & prices are not printed in the catalog — contact for best price.'}
          </p>
        </div>
      </section>

      {/* ===== WHOLESALE COUNTER (poster sized to section) ===== */}
      <section className="section section-alt wholesale-section">
        <div className="container">
          <div className="wholesale-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: '0', alignItems: 'stretch', background: '#fff', borderRadius: '18px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div className="wholesale-img-wrap" style={{ padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', minWidth: 0 }}>
              <Link to={getLocalizedPath('/contact-us')} style={{ display: 'block', width: '100%', maxWidth: '420px' }}>
                <img src={wholesaleInfo.image || heroBanners[3].image} alt="Wholesale Counter" className="wholesale-img" style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', borderRadius: '12px', display: 'block', margin: '0 auto' }} loading="lazy" />
              </Link>
            </div>
            <div className="wholesale-content" style={{ padding: '30px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '2px', color: 'var(--primary)' }}>WHOLESALE COUNTER</span>
              <h2 style={{ fontSize: '1.7rem', margin: '6px 0 12px' }}>{isHindi ? 'सीधे फैक्ट्री से थोक में लें' : 'Direct From Factory — Best Wholesale Rates'}</h2>
              <ul style={{ marginBottom: '18px' }}>
                {wholesaleInfo.points.map(p => (
                  <li key={p} style={{ fontSize: '14px', marginBottom: '6px' }}><i className="fas fa-check-circle" style={{ color: '#16a34a', marginRight: '8px' }} />{p}</li>
                ))}
              </ul>
              <div style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)', marginRight: '8px' }} />
                {wholesaleInfo.address} • <i className="fas fa-phone" style={{ marginLeft: '8px', marginRight: '6px' }} />{wholesaleInfo.phone}
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href={`https://wa.me/919351359518?text=${encodeURIComponent('Hello KK COOLER, I want wholesale rates for bulk order')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-whatsapp" style={{ marginRight: '8px' }} />{isHindi ? 'थोक भाव पूछें' : 'Ask Wholesale Rate'}
                </a>
                <Link to={getLocalizedPath('/contact-us')} className="btn" style={{ background: '#1a1a2e', color: '#fff' }}>{isHindi ? 'संपर्क करें' : 'Contact Us'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">{s.num}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'भीषण गर्मी को मात देने के लिए तैयार हैं?' : 'Ready to Beat the Heat?'}</h2>
          <p>{isHindi ? '15 मॉडलों में से अपने घर, दुकान या हॉल हेतु सर्वोत्तम कूलर चुनें।' : 'Pick the perfect cooler from 15 catalog models for your home, shop or hall.'}</p>
          <div className="cta-buttons">
            <a href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20send%20an%20enquiry%20for%20coolers" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
              {isHindi ? 'व्हाट्सएप पर संपर्क करें' : 'Send Enquiry on WhatsApp'}
            </a>
            <a href="tel:9351359518" className="btn" style={{ background: 'white', color: '#c0132a', fontWeight: 700 }}>
              {isHindi ? 'फोन करें: 9351359518' : 'Call 9351359518'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
