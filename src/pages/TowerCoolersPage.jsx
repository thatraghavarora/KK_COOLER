import { useMemo } from 'react'
import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { coolersData } from '../data/coolersData'
import { getLocalizedCooler } from '../utils/hindiTranslator'

export default function TowerCoolersPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()

  const towerCoolers = useMemo(() => {
    return coolersData
      .filter(c => c.category === 'tower')
      .map(c => getLocalizedCooler(c, isHindi))
  }, [isHindi])

  return (
    <>
      <PageBanner
        title={isHindi ? 'टावर कूलर्स' : 'Tower Coolers'}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: isHindi ? 'टावर कूलर्स' : 'Tower Coolers' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? `टावर कूलर्स (${towerCoolers.length} स्लीक मॉडल)` : `Tower Coolers (${towerCoolers.length} Sleek Models)`}</h2>
            <p>
              {isHindi
                ? 'आधुनिक और आकर्षक टावर कूलर्स जो कम जगह में शक्तिशाली कूलिंग प्रदान करते हैं। लिविंग रूम, बेडरूम और ऑफिस केबिन हेतु उत्तम।'
                : 'Sleek, stylish tower coolers that combine modern aesthetics with superior cooling performance. Perfect for living rooms, master bedrooms, and office cabins.'}
            </p>
          </div>
          <div className="product-list-grid">
            {towerCoolers.map((cooler) => (
              <div className="product-card" key={cooler.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="product-card-img" style={{ background: '#ffffff', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', position: 'relative', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--primary)', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                    {cooler.badge}
                  </span>
                  <Link to={getLocalizedPath(`/product/${cooler.id}`)} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img src={cooler.image} alt={cooler.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Link>
                </div>
                <div className="product-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {isHindi ? 'मॉडल:' : 'Model:'} {cooler.modelNumber}
                  </div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px' }}>
                    <Link to={getLocalizedPath(`/product/${cooler.id}`)} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {cooler.name}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>
                    {cooler.highlight}
                  </p>

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
                    {(cooler.specs || cooler.keyFeatures || []).slice(0, 4).map((s, j) => (
                      <li key={j} style={{ fontSize: '12px', marginBottom: '4px' }}><i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '6px' }} />{s}</li>
                    ))}
                  </ul>

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
                        gap: '6px'
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
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'आधुनिक टावर कूलर्स के लिए संपर्क करें' : 'Looking for Modern Tower Coolers?'}</h2>
          <p>{isHindi ? 'जोधपुर फैक्ट्री से सीधे न्यूनतम दामों पर प्राप्त करें।' : 'Contact KK COOLER JODHPUR for factory rates and fast doorstep delivery.'}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire%20about%20tower%20coolers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i>
              {isHindi ? 'व्हाट्सएप पूछताछ (+91 9351359518)' : 'WhatsApp Enquiry (+91 9351359518)'}
            </a>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">
              {isHindi ? 'संपर्क करें' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
