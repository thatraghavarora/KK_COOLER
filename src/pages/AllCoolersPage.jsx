import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { useLanguage } from '../context/LanguageContext'
import { allCoolers, coolerCategories } from '../data/coolersData'

export default function AllCoolersPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCoolers = useMemo(() => {
    return allCoolers.filter(cooler => {
      const matchesTab = activeTab === 'all' || cooler.category === activeTab
      const matchesSearch =
        cooler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cooler.capacity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cooler.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTab && matchesSearch
    })
  }, [activeTab, searchQuery])

  return (
    <>
      <PageBanner
        title={t.nav.allCoolers}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: t.nav.allCoolers }]}
      />

      {/* Category Overview Cards */}
      <section style={{ padding: '50px 0 20px', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '35px' }}>
            <h2>{isHindi ? 'के.के. कूलर जोधपुर — संपूर्ण उत्पाद रेंज' : 'KK COOLER JODHPUR — Complete Product Range'}</h2>
            <p>{isHindi ? 'जोधपुर, राजस्थान में निर्मित — मजबूत सामग्री, ऊर्जा-कुशल कॉपर मोटर और भीषण गर्मी में भी तेज ठंडी हवा।' : 'Manufactured in Jodhpur, Rajasthan with heavy-duty materials, energy-efficient motors, and supreme desert cooling throw.'}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}>
            {coolerCategories.map(cat => {
              const catTitle = isHindi
                ? (cat.id === 'personal' ? 'पर्सनल कूलर्स' : cat.id === 'commercial' ? 'कमर्शियल व डेजर्ट कूलर्स' : 'टावर कूलर्स')
                : cat.name

              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    background: activeTab === cat.id ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : '#ffffff',
                    color: activeTab === cat.id ? '#ffffff' : 'var(--dark)',
                    borderRadius: '16px',
                    padding: '24px',
                    cursor: 'pointer',
                    border: activeTab === cat.id ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                    boxShadow: activeTab === cat.id ? '0 15px 35px rgba(192, 19, 42, 0.25)' : '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '12px',
                    background: '#ffffff',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    flexShrink: 0
                  }}>
                    <img src={cat.image} alt={catTitle} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.2rem',
                      color: activeTab === cat.id ? '#ffffff' : 'var(--primary)',
                      marginBottom: '4px',
                      fontWeight: 700
                    }}>
                      {catTitle}
                    </h3>
                    <div style={{ fontSize: '13px', color: activeTab === cat.id ? '#fca5a5' : '#64748b', fontWeight: 600 }}>
                      {cat.count}
                    </div>
                    <div style={{ fontSize: '12px', marginTop: '6px', color: activeTab === cat.id ? '#cbd5e1' : '#94a3b8' }}>
                      {cat.tagline}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Catalog Section with Filter & Search */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '35px',
            padding: '20px 24px',
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            {/* Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: t.home.tabAll },
                { id: 'personal', label: t.home.tabPersonal },
                { id: 'commercial', label: t.home.tabCommercial },
                { id: 'tower', label: t.home.tabTower },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '25px',
                    border: 'none',
                    background: activeTab === tab.id ? 'var(--primary)' : '#f1f5f9',
                    color: activeTab === tab.id ? '#ffffff' : '#334155',
                    fontWeight: activeTab === tab.id ? 700 : 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '260px' }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder={isHindi ? 'कूलर का नाम, मॉडल या क्षमता खोजें...' : 'Search model, capacity, type...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 14px 9px 38px',
                  borderRadius: '25px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              {isHindi ? 'कुल' : 'Showing'} <strong style={{ color: 'var(--dark)' }}>{filteredCoolers.length}</strong> {isHindi ? 'कूलर मॉडल्स उपलब्ध' : 'Cooler Models'}
            </div>
          </div>

          {/* Product Grid */}
          {filteredCoolers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8fafc', borderRadius: '16px' }}>
              <i className="fas fa-box-open" style={{ fontSize: '45px', color: '#cbd5e1', marginBottom: '15px' }} />
              <h3 style={{ color: 'var(--dark)' }}>{isHindi ? 'कोई मॉडल नहीं मिला' : 'No Coolers Found'}</h3>
              <p style={{ color: '#64748b', fontSize: '14px' }}>{isHindi ? 'कृपया दूसरा सर्च शब्द आजमाएं।' : 'Try clearing your search query or switching tabs.'}</p>
              <button
                onClick={() => { setActiveTab('all'); setSearchQuery('') }}
                className="btn btn-primary"
                style={{ marginTop: '15px', fontSize: '13px' }}
              >
                {isHindi ? 'सभी कूलर्स देखें' : 'View All Coolers'}
              </button>
            </div>
          ) : (
            <div className="product-list-grid">
              {filteredCoolers.map(cooler => (
                <div className="product-card" key={cooler.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Image Container */}
                  <div
                    className="product-card-img"
                    style={{
                      background: '#ffffff',
                      height: '240px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                      position: 'relative',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: cooler.category === 'commercial' ? '#1a1a2e' : 'var(--primary)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      letterSpacing: '0.5px'
                    }}>
                      {cooler.badge}
                    </span>

                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '8px',
                      textTransform: 'uppercase'
                    }}>
                      {isHindi
                        ? (cooler.category === 'personal' ? 'पर्सनल' : cooler.category === 'commercial' ? 'कमर्शियल' : 'टावर')
                        : cooler.categoryName}
                    </span>

                    <Link
                      to={getLocalizedPath(`/product/${cooler.id}`)}
                      style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}
                    >
                      <img
                        src={cooler.image}
                        alt={cooler.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </Link>
                  </div>

                  {/* Body */}
                  <div className="product-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {isHindi ? 'मॉडल:' : 'Model:'} {cooler.modelNumber}
                    </div>

                    <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px' }}>
                      <Link
                        to={getLocalizedPath(`/product/${cooler.id}`)}
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
                      >
                        {cooler.name}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                      {cooler.highlight}
                    </p>

                    {/* Pricing */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                        ₹{cooler.sellingPrice?.toLocaleString('en-IN') || cooler.sellingPrice}
                      </span>
                      <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>
                        MRP ₹{cooler.mrp?.toLocaleString('en-IN') || cooler.mrp}
                      </span>
                      <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
                        {isHindi ? 'फैक्ट्री रेट' : 'Factory Direct'}
                      </span>
                    </div>

                    <ul className="product-specs" style={{ flex: 1, marginBottom: '16px' }}>
                      {(cooler.specs || cooler.keyFeatures || []).slice(0, 4).map((spec, i) => (
                        <li key={i} style={{ fontSize: '12px', marginBottom: '4px' }}>
                          <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '6px' }} />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                      <Link
                        to={getLocalizedPath(`/product/${cooler.id}`)}
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
                          gap: '6px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <i className="fas fa-list-check" />
                        {isHindi ? 'पूरी 23+ तकनीकी जानकारी देखें' : 'View Full Details & 23+ Specs'}
                      </Link>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <a
                          href={`https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(cooler.name)}%20(Model:%20${encodeURIComponent(cooler.modelNumber)})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          style={{
                            flex: 1,
                            fontSize: '12.5px',
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
                          <i className="fab fa-whatsapp" style={{ fontSize: '15px' }} />
                          {isHindi ? 'कोटेशन लें' : 'Enquiry / Quote'}
                        </a>
                        <a
                          href={`https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20am%20interested%20in%20${encodeURIComponent(cooler.name)}%20(Model:%20${encodeURIComponent(cooler.modelNumber)})`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: '#25D366',
                            color: '#ffffff',
                            padding: '9px 12px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            fontSize: '15px'
                          }}
                          title="WhatsApp: +91 9351359518"
                        >
                          <i className="fab fa-whatsapp" />
                        </a>
                        <a
                          href="tel:9351359518"
                          style={{
                            background: '#f1f5f9',
                            color: '#1e293b',
                            padding: '9px 12px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            fontSize: '14px',
                            border: '1px solid #cbd5e1'
                          }}
                          title="Call Factory: 9351359518"
                        >
                          <i className="fas fa-phone-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why KK Cooler Strip */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'के.के. कूलर जोधपुर ही क्यों?' : 'Why Choose KK COOLER JODHPUR?'}</h2>
            <p>{isHindi ? 'राजस्थान की कठोर ग्रीष्म ऋतु का सामना करने के लिए विशेष रूप से निर्मित।' : "Every cooler is engineered to withstand Rajasthan's extreme heat with unmatched longevity."}</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {[
              { icon: 'fas fa-shield-alt', title: isHindi ? '100% कॉपर मोटर' : '100% Copper Motor', desc: isHindi ? '24 घंटे लगातार चलने वाली हैवी-ड्यूटी कॉपर वाइंडिंग मोटर।' : 'Heavy-duty copper winding motors built for 24/7 continuous operation.' },
              { icon: 'fas fa-wind', title: isHindi ? 'तेज एयर थ्रो' : 'Supreme Air Throw', desc: isHindi ? 'लंबी दूरी तक ठंडी हवा पहुंचाने वाले विशेष डिजाइन किए गए पंखे।' : 'Specially engineered fan blades for powerful long-distance cooling.' },
              { icon: 'fas fa-tint', title: isHindi ? 'सघन हनीकॉम्ब पैड्स' : 'Dense Honeycomb', desc: isHindi ? 'अधिकतम ठंडक प्रदान करने वाले घने वाटर-एब्सॉर्बिंग कूलिंग पैड्स।' : 'Thick hydrophilic honeycomb pads for maximum humidity absorption & chill.' },
              { icon: 'fas fa-bolt', title: isHindi ? 'इन्वर्टर पर अनुकूल' : 'Inverter Friendly', desc: isHindi ? 'कम बिजली खपत के साथ घरेलू इन्वर्टर पर सुचारू संचालन।' : 'Optimized electrical components run seamlessly on home inverters.' },
            ].map((f, i) => (
              <div key={i} style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                borderTop: '3px solid var(--primary)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(192, 19, 42, 0.1)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '20px'
                }}>
                  <i className={f.icon} />
                </div>
                <h4 style={{ fontSize: '15px', marginBottom: '8px', color: 'var(--dark)' }}>{f.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'थोक या डीलरशिप ऑर्डर के लिए संपर्क करें' : 'Looking for Bulk / Wholesale Orders?'}</h2>
          <p>{isHindi ? 'जोधपुर फैक्ट्री से सीधे न्यूनतम डीलर दरें प्राप्त करें।' : 'Get exclusive dealer rates directly from our Jodhpur manufacturing unit.'}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20place%20a%20bulk%20dealership%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
              {isHindi ? 'व्हाट्सएप पर थोक पूछताछ' : 'Bulk WhatsApp Enquiry'}
            </a>
            <a href="tel:9351359518" className="btn" style={{ background: 'white', color: '#c0132a', fontWeight: 700 }}>
              {isHindi ? 'कॉल करें: 9351359518' : 'Call: 9351359518'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
