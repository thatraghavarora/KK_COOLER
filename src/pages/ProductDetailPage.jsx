import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { useLanguage } from '../context/LanguageContext'
import { allCoolers, factoryDetails } from '../data/coolersData'
import { getLocalizedCooler, specsLabelsHi } from '../utils/hindiTranslator'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const [activeMediaTab, setActiveMediaTab] = useState(0) // 0: front, 1: side, 2: back, 3: video

  const cooler = useMemo(() => {
    const raw = allCoolers.find(c => c.id === id) || allCoolers[0]
    return getLocalizedCooler(raw, isHindi)
  }, [id, isHindi])

  const relatedCoolers = useMemo(() => {
    return allCoolers
      .filter(c => c.id !== cooler.id && c.category === cooler.category)
      .slice(0, 3)
      .map(c => getLocalizedCooler(c, isHindi))
  }, [cooler, isHindi])

  const discountPercent = Math.round(((cooler.mrp - cooler.sellingPrice) / cooler.mrp) * 100)

  const categoryLabel = isHindi
    ? (cooler.category === 'personal' ? 'पर्सनल कूलर्स' : cooler.category === 'commercial' ? 'कमर्शियल कूलर्स' : 'टावर कूलर्स')
    : cooler.categoryName

  const whatsappMessage = encodeURIComponent(
    isHindi
      ? `नमस्ते के.के. कूलर जोधपुर!\n\nमुझे इस मॉडल की जानकारी एवं सर्वोत्तम फैक्ट्री कोटेशन चाहिए:\nउत्पाद: ${cooler.name}\nमॉडल नंबर: ${cooler.modelNumber}\nश्रेणी: ${categoryLabel}\nभाव: ₹${cooler.sellingPrice.toLocaleString('en-IN')}\n\nकृपया डिलीवरी का समय और सर्वोत्तम कोटेशन साझा करें।`
      : `Hello KK COOLER JODHPUR!\n\nI am interested in:\nProduct: ${cooler.name}\nModel Number: ${cooler.modelNumber}\nCategory: ${cooler.categoryName}\nPrice: ₹${cooler.sellingPrice.toLocaleString('en-IN')}\n\nPlease share the best factory quotation and delivery timeline to my location.`
  )

  const handlePrintSpecs = () => {
    window.print()
  }

  const categoryPath = cooler.category === 'personal'
    ? '/personal-coolers'
    : cooler.category === 'commercial'
      ? '/commercial-cooler'
      : '/tower-coolers'

  return (
    <>
      <PageBanner
        title={cooler.name}
        breadcrumb={[
          { label: t.nav.allCoolers, path: '/all-coolers' },
          { label: categoryLabel, path: categoryPath },
          { label: cooler.modelNumber }
        ]}
      />

      <section className="section" style={{ paddingTop: '30px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Main Top Grid */}
          <div className="product-detail-layout" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '60px'
          }}>
            {/* Left: Media Gallery & Video */}
            <div>
              {/* Main Media Box */}
              <div className="product-detail-media-box" style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                position: 'relative',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: activeMediaTab === 3 ? '0' : '20px',
                marginBottom: '16px'
              }}>
                {/* Badge */}
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  zIndex: 2,
                  boxShadow: '0 4px 10px rgba(192,19,42,0.3)'
                }}>
                  {cooler.badge}
                </span>

                {/* Made in Jodhpur Tag */}
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#1a1a2e',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  zIndex: 2
                }}>
                  <i className="fas fa-certificate" style={{ color: '#fbbf24', marginRight: '5px' }} />
                  {isHindi ? 'जोधपुर निर्मित' : 'Jodhpur Made'}
                </span>

                {activeMediaTab === 3 ? (
                  <video
                    src={cooler.video}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={cooler.gallery[activeMediaTab]?.image || cooler.image}
                    alt={`${cooler.name} - ${cooler.gallery[activeMediaTab]?.label}`}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.12))',
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
              </div>

              {/* Thumbnail Selector Tabs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(68px, 1fr))', gap: '8px' }}>
                {cooler.gallery.map((item, idx) => {
                  const tabLabel = isHindi
                    ? (idx === 0 ? 'सामने (Front)' : idx === 1 ? 'साइड (Side)' : 'पीछे (Back)')
                    : item.label

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveMediaTab(idx)}
                      style={{
                        background: activeMediaTab === idx ? '#fff' : '#f8fafc',
                        border: activeMediaTab === idx ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '8px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        boxShadow: activeMediaTab === idx ? '0 4px 12px rgba(192,19,42,0.2)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={item.image} alt={tabLabel} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: activeMediaTab === idx ? 'var(--primary)' : '#64748b', marginTop: '4px' }}>
                        {tabLabel}
                      </div>
                    </button>
                  )
                })}

                {/* Video Tab */}
                <button
                  onClick={() => setActiveMediaTab(3)}
                  style={{
                    background: activeMediaTab === 3 ? '#1a1a2e' : '#f8fafc',
                    color: activeMediaTab === 3 ? '#ffffff' : '#1a1a2e',
                    border: activeMediaTab === 3 ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    boxShadow: activeMediaTab === 3 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fas fa-play-circle" style={{ fontSize: '24px', color: activeMediaTab === 3 ? '#ef4444' : 'var(--primary)', marginBottom: '4px' }} />
                  <div style={{ fontSize: '10px', fontWeight: 700 }}>{isHindi ? 'वीडियो डेमो' : 'Product Video'}</div>
                </button>
              </div>

              {/* Assurance strip */}
              <div style={{
                marginTop: '20px',
                padding: '15px 20px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-award" style={{ color: 'var(--primary)', fontSize: '16px' }} />
                  <span><strong>10+ {isHindi ? 'वर्ष' : 'Years'}</strong> {isHindi ? 'जोधपुर का भरोसा' : 'Jodhpur Heritage'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#16a34a', fontSize: '16px' }} />
                  <span><strong>1 {isHindi ? 'वर्ष' : 'Year'}</strong> {isHindi ? 'पूर्ण वारंटी' : 'Full Warranty'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-bolt" style={{ color: '#eab308', fontSize: '16px' }} />
                  <span><strong>100% {isHindi ? 'कॉपर मोटर' : 'Copper'}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-truck" style={{ color: '#0284c7', fontSize: '16px' }} />
                  <span><strong>{isHindi ? 'राजस्थान व पूरे भारत' : 'Pan-India'}</strong> {isHindi ? 'में डिलीवरी' : 'Dispatch'}</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Order CTAs */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  background: 'rgba(192, 19, 42, 0.1)',
                  color: 'var(--primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  {categoryLabel}
                </span>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>
                  {isHindi ? 'मॉडल:' : 'Model:'} <strong style={{ color: 'var(--dark)' }}>{cooler.modelNumber}</strong>
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                  {isHindi ? 'फैक्ट्री स्टॉक उपलब्ध' : 'Ready in Factory Stock'}
                </span>
              </div>

              {/* Title */}
              <h1 className="product-detail-title" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px', lineHeight: '1.2' }}>
                {cooler.name}
              </h1>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px', fontStyle: 'italic' }}>
                {cooler.highlight}
              </p>

              {/* Price Block */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                padding: '18px 24px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                marginBottom: '22px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '14px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', fontWeight: 600 }}>
                    {isHindi ? 'सीधा फैक्ट्री ऑफर भाव' : 'Direct Factory Offer Price'}
                  </span>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'Rubik, sans-serif' }}>
                    ₹{cooler.sellingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div style={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '1.2rem', fontWeight: 500 }}>
                  MRP ₹{cooler.mrp.toLocaleString('en-IN')}
                </div>
                <div style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px'
                }}>
                  {isHindi
                    ? `बचत ${discountPercent}% (₹${(cooler.mrp - cooler.sellingPrice).toLocaleString('en-IN')} की छूट)`
                    : `Save ${discountPercent}% (₹${(cooler.mrp - cooler.sellingPrice).toLocaleString('en-IN')} OFF)`}
                </div>
              </div>

              {/* Quick Specs 4-Box Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '25px'
              }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{isHindi ? 'टैंक क्षमता' : 'Tank Capacity'}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.capacity}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{isHindi ? 'कूलिंग एरिया' : 'Cooling Area'}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.coolingCapacity.split('(')[0]}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{isHindi ? 'एयर थ्रो' : 'Air Throw'}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.airThrow || cooler.airDelivery}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{isHindi ? 'मोटर' : 'Motor Winding'}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{isHindi ? '100% शुद्ध कॉपर' : '100% Pure Copper'}</div>
                </div>
              </div>

              {/* Big Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                <a
                  href={`https://wa.me/${factoryDetails.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '22px' }} />
                  {isHindi ? 'व्हाट्सएप पर ऑर्डर / पूछताछ करें (+91 9351359518)' : 'Order / Enquire on WhatsApp (+91 9351359518)'}
                </a>

                <div className="product-cta-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <a
                    href={`tel:${factoryDetails.phone}`}
                    style={{
                      background: '#1a1a2e',
                      color: '#ffffff',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fas fa-phone-alt" />
                    {isHindi ? 'कॉल करें: 9351359518' : 'Call: 9351359518'}
                  </a>

                  <button
                    onClick={handlePrintSpecs}
                    style={{
                      background: '#ffffff',
                      color: 'var(--dark)',
                      border: '1px solid #cbd5e1',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fas fa-download" />
                    {isHindi ? 'ब्रोशर / PDF सेव करें' : 'Download Brochure'}
                  </button>
                </div>
              </div>

              {/* Factory Address Card */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px 20px',
                fontSize: '13px',
                color: '#475569'
              }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-industry" />
                  {isHindi ? 'के.के. एंटरप्राइजेज - फैक्ट्री एवं शोरूम' : 'KK Cooler (K.K. Enterprises) Factory & Showroom'}
                </div>
                <div>
                  {isHindi ? 'प्लॉट नं. 168 / 19, अम्बिका नगर / आदित्य नगर, डाली बाई सर्किल के पास (डाली बाई मन्दिर), मसूरिया / भादू मार्केट, जोधपुर, राजस्थान – 342001' : factoryDetails.address}
                </div>
                <div style={{ marginTop: '6px', fontSize: '12px', color: '#64748b' }}>
                  {isHindi ? 'प्रोप्राइटर:' : 'Proprietor:'} <strong>{isHindi ? 'श्री कमल अरोड़ा' : factoryDetails.proprietor}</strong> | {isHindi ? 'समय:' : 'Timings:'} 10:00 AM – 7:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Full Specifications Table Section (All 23 Parameters) */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                  {isHindi ? 'संपूर्ण 23-पैरामीटर तकनीकी विवरण शीट' : 'Complete 23-Parameter Technical Specification Sheet'}
                </h2>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '14px' }}>
                  {isHindi ? `मॉडल: ${cooler.modelNumber} के संपूर्ण तकनीकी विनिर्देश` : `Official manufacturer specifications for model: ${cooler.modelNumber}`}
                </p>
              </div>

              <button
                onClick={handlePrintSpecs}
                className="btn btn-outline"
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-print" />
                {isHindi ? 'प्रिंट / सेव करें' : 'Print / Save Spec Sheet'}
              </button>
            </div>

            {/* Spec Table */}
            <div className="specs-table-wrapper" style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              boxShadow: '0 6px 25px rgba(0,0,0,0.06)',
              border: '1px solid #e2e8f0'
            }}>
              <table style={{ width: '100%', minWidth: '460px', borderCollapse: 'collapse', fontSize: '14px' }}>
                <tbody>
                  {Object.entries(cooler.specsSheet).map(([key, val], idx) => {
                    const rowLabel = isHindi ? (specsLabelsHi[key] || key) : key

                    return (
                      <tr
                        key={key}
                        style={{
                          background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                          borderBottom: '1px solid #e2e8f0'
                        }}
                      >
                        <td style={{
                          padding: '14px 24px',
                          fontWeight: 600,
                          color: '#334155',
                          width: '35%',
                          borderRight: '1px solid #e2e8f0'
                        }}>
                          {rowLabel}
                        </td>
                        <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                          {val}
                        </td>
                      </tr>
                    )
                  })}
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      {isHindi ? 'बॉडी मटेरियल' : 'Body Material'}
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.bodyMaterial}
                    </td>
                  </tr>
                  <tr style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      {isHindi ? 'उपलब्ध रंग' : 'Available Colours'}
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.availableColors}
                    </td>
                  </tr>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      {isHindi ? 'उत्पाद आयाम (L x W x H)' : 'Dimensions (L x W x H)'}
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.dimensions}
                    </td>
                  </tr>
                  <tr style={{ background: '#ffffff' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      {isHindi ? 'फैक्ट्री संपर्क एवं व्हाट्सएप' : 'Factory Contact & WhatsApp'}
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      +91 {factoryDetails.phone} ({isHindi ? 'व्हाट्सएप उपलब्ध' : 'WhatsApp Enabled'}) | {factoryDetails.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '20px' }}>
              {isHindi ? 'मुख्य विशेषताएं और इंजीनियरिंग खूबियां' : 'Key Features & Engineering Highlights'}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '18px'
            }}>
              {cooler.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    padding: '18px 20px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(192,19,42,0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className="fas fa-check" style={{ fontSize: '13px' }} />
                  </div>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: 0 }}>
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Coolers in this Category */}
          {relatedCoolers.length > 0 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '25px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                  {isHindi ? `मिलते-जुलते अन्य ${categoryLabel}` : `More in ${cooler.categoryName}`}
                </h2>
                <Link
                  to={getLocalizedPath(categoryPath)}
                  style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                >
                  {isHindi ? 'इस श्रेणी के सभी मॉडल देखें →' : `View All ${cooler.categoryName} →`}
                </Link>
              </div>

              <div className="product-list-grid">
                {relatedCoolers.map(rc => (
                  <div key={rc.id} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="product-card-img" style={{ height: '220px', background: '#ffffff', padding: '16px', position: 'relative' }}>
                      <Link to={getLocalizedPath(`/product/${rc.id}`)} style={{ display: 'block', width: '100%', height: '100%' }}>
                        <img src={rc.image} alt={rc.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </Link>
                    </div>
                    <div className="product-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>{isHindi ? 'मॉडल:' : 'Model:'} {rc.modelNumber}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '4px 0 8px' }}>
                        <Link to={getLocalizedPath(`/product/${rc.id}`)} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {rc.name}
                        </Link>
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>
                          ₹{rc.sellingPrice.toLocaleString('en-IN')}
                        </span>
                        <span style={{ fontSize: '11px', color: '#94a3b8', textDecoration: 'line-through' }}>
                          ₹{rc.mrp.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <Link
                        to={getLocalizedPath(`/product/${rc.id}`)}
                        className="btn btn-outline"
                        style={{ marginTop: 'auto', textAlign: 'center', fontSize: '12px', padding: '8px' }}
                      >
                        {isHindi ? 'विवरण देखें' : 'View Specifications'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
