import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { useLanguage } from '../context/LanguageContext'
import { allCoolers, factoryDetails, comparisonTable } from '../data/coolersData'
import { getLocalizedCooler } from '../utils/hindiTranslator'
import ProductCard from '../components/ProductCard'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const [activeImg, setActiveImg] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const raw = useMemo(
    () => allCoolers.find(c => c.id === id) || allCoolers[0],
    [id]
  )
  const cooler = useMemo(() => getLocalizedCooler(raw, isHindi), [raw, isHindi])

  const relatedCoolers = useMemo(() => {
    return allCoolers
      .filter(c => c.id !== raw.id && c.category === raw.category)
      .slice(0, 3)
      .map(c => getLocalizedCooler(c, isHindi))
  }, [raw, isHindi])

  const gallery = cooler.gallery && cooler.gallery.length > 0
    ? cooler.gallery
    : [{ label: 'Catalog Poster', image: cooler.image }]

  const mainImg = gallery[Math.min(activeImg, gallery.length - 1)]

  const categoryLabel = isHindi
    ? (raw.category === 'personal' ? 'कॉम्पैक्ट कूलर्स' : raw.category === 'commercial' ? 'जंबो डेजर्ट कूलर्स' : 'फैमिली कूलर्स')
    : cooler.categoryName

  const whatsappMessage = encodeURIComponent(
    `Hello KK COOLER JODHPUR!\n\nI am interested in:\nProduct: ${raw.name}\nModel Number: ${raw.modelNumber}\nSize: ${raw.dimensions}\nTank: ${raw.tankCapacity}\n\nPlease share best price & delivery timeline.`
  )

  const categoryPath = raw.category === 'personal'
    ? '/personal-coolers'
    : raw.category === 'commercial'
      ? '/commercial-cooler'
      : '/tower-coolers'

  return (
    <>
      <PageBanner
        title={raw.name}
        breadcrumb={[
          { label: t.nav.allCoolers, path: '/all-coolers' },
          { label: categoryLabel, path: categoryPath },
          { label: raw.modelNumber }
        ]}
      />

      <section className="section" style={{ paddingTop: '30px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="product-detail-layout" style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px',
            alignItems: 'start', marginBottom: '50px',
          }}>
            {/* Left: FULL CATALOG POSTER (all details printed on it) */}
            <div>
              <div className="product-detail-media-box" style={{
                background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)', overflow: 'hidden', position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: '15px', left: '15px', background: 'var(--primary)',
                  color: '#fff', fontSize: '12px', fontWeight: 700, padding: '5px 12px',
                  borderRadius: '20px', zIndex: 2,
                }}>
                  {cooler.badge} • {cooler.capacity}
                </span>
                <span style={{
                  position: 'absolute', top: '15px', right: '15px', background: '#1a1a2e',
                  color: '#fff', fontSize: '11px', fontWeight: 700, padding: '5px 12px',
                  borderRadius: '20px', zIndex: 2,
                }}>
                  15+ {isHindi ? 'वर्ष' : 'Years'}
                </span>
                <button
                  onClick={() => setZoomed(true)}
                  style={{ display: 'block', width: '100%', cursor: 'zoom-in', border: 'none', background: '#fff', padding: 0 }}
                  title={isHindi ? 'पूरा पोस्टर पढ़ने हेतु क्लिक करें' : 'Click to read full poster'}
                >
                  <img
                    src={mainImg.image}
                    alt={`${raw.name} — full catalog poster with size, tank, fan & motor details`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </button>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', textAlign: 'center' }}>
                <i className="fas fa-search-plus" style={{ marginRight: '6px' }} />
                {isHindi
                  ? 'पोस्टर पर क्लिक करें — साइज, टैंक, पंखा व मोटर सहित संपूर्ण विवरण फुल साइज में पढ़ें'
                  : 'Tap poster to zoom — read size, tank, fan & motor details in full size'}
              </p>

              {gallery.length > 1 && (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gallery.length}, 1fr)`, gap: '8px', marginTop: '12px' }}>
                  {gallery.map((item, idx) => (
                    <button
                      key={idx} onClick={() => setActiveImg(idx)}
                      style={{
                        background: activeImg === idx ? '#fff' : '#f8fafc',
                        border: activeImg === idx ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                        borderRadius: '10px', padding: '6px', cursor: 'pointer', textAlign: 'center',
                      }}
                    >
                      <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '6px' }}>
                        <img src={item.image} alt={item.label} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: activeImg === idx ? 'var(--primary)' : '#64748b', marginTop: '4px' }}>
                        {item.label}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div style={{
                marginTop: '20px', padding: '15px 20px', background: '#f8fafc', borderRadius: '12px',
                border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '12px',
              }}>
                <div><i className="fas fa-award" style={{ color: 'var(--primary)', marginRight: '8px' }} /><strong>15+ {isHindi ? 'वर्ष' : 'Years'}</strong> {isHindi ? 'अनुभव' : 'Experience'}</div>
                <div><i className="fas fa-sync-alt" style={{ color: '#16a34a', marginRight: '8px' }} /><strong>Reverse / Forward</strong> {isHindi ? 'मोटर' : 'Motor'}</div>
                <div><i className="fas fa-fan" style={{ color: '#eab308', marginRight: '8px' }} /><strong>{raw.fanBlower.split('—')[0]}</strong></div>
                <div><i className="fas fa-truck" style={{ color: '#0284c7', marginRight: '8px' }} /><strong>{isHindi ? 'होलसेल उपलब्ध' : 'Wholesale'}</strong> 93513 59518</div>
              </div>
            </div>

            {/* Right: transcribed details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(192,19,42,0.1)', color: 'var(--primary)', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px' }}>
                  {categoryLabel}
                </span>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>
                  {isHindi ? 'मॉडल:' : 'Model:'} <strong style={{ color: 'var(--dark)' }}>{raw.modelNumber}</strong>
                </span>
              </div>

              <h1 className="product-detail-title" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>
                {raw.name}
              </h1>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px', fontStyle: 'italic' }}>{cooler.highlight}</p>

              {/* Catalog quick facts */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '22px' }}>
                {[
                  { label: isHindi ? 'साइज' : 'Size', value: raw.dimensions },
                  { label: isHindi ? 'टैंक' : 'Tank', value: `${raw.tankCapacity}` },
                  { label: isHindi ? 'पंखा' : 'Fan', value: raw.fanBlower },
                  { label: isHindi ? 'मोटर' : 'Motor', value: isHindi ? 'रिवर्स (कूलिंग) / फॉरवर्ड (वेंटिलेशन)' : 'Reverse (Cooling) / Forward (Ventilation)' },
                ].map((b, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{b.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{b.value}</div>
                  </div>
                ))}
              </div>

              {/* Price: catalog has no prices */}
              <div style={{ background: '#f8fafc', padding: '18px 24px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '22px' }}>
                <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                  {isHindi ? 'भाव (कैटलॉग में छपा नहीं है)' : 'Price (not printed in catalog)'}
                </span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {isHindi ? 'सर्वोत्तम भाव हेतु संपर्क करें' : 'Contact for Best Price'}
                </div>
                <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: 700 }}>✓ {isHindi ? 'होलसेल व बल्क रेट उपलब्ध' : 'Wholesale & bulk rates available'}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                <a
                  href={`https://wa.me/${factoryDetails.whatsapp}?text=${whatsappMessage}`}
                  target="_blank" rel="noreferrer"
                  style={{
                    background: '#25D366', color: '#fff', padding: '14px 24px', borderRadius: '12px',
                    fontWeight: 700, fontSize: '16px', textAlign: 'center', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '22px' }} />
                  {isHindi ? 'व्हाट्सएप पर भाव पूछें (93513 59518)' : 'Ask Price on WhatsApp (93513 59518)'}
                </a>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <a href="tel:9351359518" style={{ background: '#1a1a2e', color: '#fff', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textAlign: 'center', textDecoration: 'none' }}>
                    <i className="fas fa-phone-alt" style={{ marginRight: '8px' }} />93513 59518
                  </a>
                  <button onClick={() => window.print()} style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                    <i className="fas fa-print" style={{ marginRight: '8px' }} />{isHindi ? 'प्रिंट करें' : 'Print'}
                  </button>
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', fontSize: '13px', color: '#475569' }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>
                  <i className="fas fa-store" style={{ marginRight: '6px' }} />KK COOLER Wholesale Counter
                </div>
                <div>{factoryDetails.address}</div>
                <div style={{ marginTop: '6px', fontSize: '12px', color: '#64748b' }}>
                  {isHindi ? 'समय:' : 'Timings:'} 10:00 AM – 7:00 PM • {factoryDetails.experience}
                </div>
              </div>
            </div>
          </div>

          {/* Transcribed spec sheet */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
              {isHindi ? 'कैटलॉग विवरण (जस का तस)' : 'Catalog Specification (Transcribed)'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
              {isHindi
                ? 'नीचे दिया विवरण ऊपर दिख रहे पोस्टर से अक्षरशः लिया गया है।'
                : 'Below is transcribed word-for-word from the poster shown above.'}
            </p>
            <div className="specs-table-wrapper" style={{ background: '#fff', borderRadius: '16px', overflowX: 'auto', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', minWidth: '460px', borderCollapse: 'collapse', fontSize: '14px' }}>
                <tbody>
                  {Object.entries(raw.specsSheet).map(([key, val], idx) => (
                    <tr key={key} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', width: '35%', borderRight: '1px solid #e2e8f0' }}>{key}</td>
                      <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '20px' }}>
              {isHindi ? 'मुख्य विशेषताएं (पोस्टर अनुसार)' : 'Key Features (As Per Poster)'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px' }}>
              {raw.keyFeatures.map((feat, i) => (
                <div key={i} style={{ background: '#fff', padding: '18px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(192,19,42,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: '13px' }} />
                  </div>
                  <p style={{ fontSize: '14px', color: '#334155', margin: 0 }}>{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison strip */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px' }}>
              {isHindi ? 'सभी 15 मॉडलों से तुलना करें' : 'Compare All 15 Models'}
            </h2>
            <div className="specs-table-wrapper" style={{ background: '#fff', borderRadius: '12px', overflowX: 'auto', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', minWidth: '620px', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#1a1a2e', color: '#fff' }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left' }}>Model</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left' }}>Size</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>Tank</th>
                    <th style={{ padding: '10px 14px' }}>Fan</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right' }}>Circle</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, idx) => (
                    <tr key={row.model} style={{ background: row.model === raw.name.replace('KK COOLER ', '').split(' —')[0] ? '#fef2f2' : (idx % 2 === 0 ? '#f8fafc' : '#fff'), borderBottom: '1px solid #e2e8f0', fontWeight: row.model === raw.name.replace('KK COOLER ', '').split(' —')[0] ? 800 : 400 }}>
                      <td style={{ padding: '9px 14px', color: 'var(--primary)' }}>{row.model}</td>
                      <td style={{ padding: '9px 14px' }}>{row.size}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'right' }}>{row.tank} L</td>
                      <td style={{ padding: '9px 14px' }}>{row.fan}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'right' }}>{row.circle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Related */}
          {relatedCoolers.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px', flexWrap: 'wrap', gap: '10px' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                  {isHindi ? `इसी श्रेणी के अन्य मॉडल` : `More in ${raw.categoryName}`}
                </h2>
                <Link to={getLocalizedPath(categoryPath)} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px' }}>
                  {isHindi ? 'सभी देखें →' : 'View All →'}
                </Link>
              </div>
              <div className="product-list-grid">
                {relatedCoolers.map(rc => (
                  <ProductCard key={rc.id} cooler={rc} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen poster zoom */}
      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, overflow: 'auto', padding: '20px', cursor: 'zoom-out' }}
        >
          <button
            onClick={() => setZoomed(false)}
            style={{ position: 'fixed', top: '16px', right: '16px', background: '#fff', border: 'none', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', zIndex: 10000 }}
            aria-label="Close"
          >×</button>
          <img src={mainImg.image} alt={raw.name} style={{ maxWidth: '900px', width: '100%', margin: '40px auto', display: 'block', borderRadius: '12px' }} />
        </div>
      )}
    </>
  )
}
