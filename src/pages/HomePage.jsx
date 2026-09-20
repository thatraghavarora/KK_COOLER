import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
const heroBg = 'https://res.cloudinary.com/t6yv9yib/video/upload/v1789879011/Make_a_second_video_to_acco.mp4'
import personalCoolerImg from '../assets/perosnal_cooler.png'
import commercialCoolerImg from '../assets/commerinal_cooler.png'
import towerCoolerImg from '../assets/tower_cooler.png'
import { allCoolers, coolerCategories } from '../data/coolersData'

const featuresEn = [
  { icon: 'fas fa-history', title: '10+ Years Experience', desc: 'Over a decade of excellence in manufacturing heavy-duty desert and plastic coolers in Jodhpur.' },
  { icon: 'fas fa-bolt', title: '100% Pure Copper Motor', desc: 'High air throw, maximum durability, low power consumption, and long lifespan.' },
  { icon: 'fas fa-temperature-arrow-down', title: 'Engineered for Rajasthan Heat', desc: 'Specially designed to deliver ice-cold airflow even in extreme 48°C+ summer heat.' },
  { icon: 'fas fa-industry', title: 'Direct Factory Pricing', desc: 'Wholesale, retail, and B2B distributor rates directly from our Jodhpur factory.' },
]

const featuresHi = [
  { icon: 'fas fa-history', title: '10+ वर्षों का अनुभव', desc: 'जोधपुर में हैवी-ड्यूटी डेजर्ट और प्लास्टिक कूलर्स के निर्माण में एक दशक से अधिक का विश्वसनीय अनुभव।' },
  { icon: 'fas fa-bolt', title: '100% शुद्ध कॉपर मोटर', desc: 'तेज हवा का थ्रो, अधिकतम मजबूती, कम बिजली खपत और लंबी उम्र वाली मोटर।' },
  { icon: 'fas fa-temperature-arrow-down', title: 'राजस्थान की गर्मी हेतु निर्मित', desc: 'राजस्थान के 48°C+ के भीषण तापमान में भी बर्फ जैसी ठंडी हवा देने के लिए विशेष इंजीनियरिंग।' },
  { icon: 'fas fa-industry', title: 'सीधे फैक्ट्री भाव में', desc: 'जोधपुर फैक्ट्री से सीधे ग्राहकों और डीलरों को थोक एवं खुदरा न्यूनतम दरों पर सप्लाय।' },
]

const statsEn = [
  { num: '50,000', label: 'Happy Customers', suffix: '+' },
  { num: '100', label: 'Cities Covered', suffix: '+' },
  { num: '10', label: 'Years Experience', suffix: '+' },
  { num: '14', label: 'Cooler Models', suffix: '+' },
]

const statsHi = [
  { num: '50,000', label: 'संतुष्ट ग्राहक', suffix: '+' },
  { num: '100', label: 'शहरों में सप्लाय', suffix: '+' },
  { num: '10', label: 'वर्षों का अनुभव', suffix: '+' },
  { num: '14', label: 'कूलर मॉडल्स', suffix: '+' },
]

const testimonialsEn = [
  {
    text: 'Excellent cooler! Very good cooling even in peak Jodhpur summer. The build quality of K.K. Enterprises is outstanding.',
    name: 'Rajesh Kumar',
    location: 'Jodhpur, Rajasthan',
    rating: 5,
  },
  {
    text: 'Best price in market with top quality. Kamal Arora ji gave the best factory quotation for our bulk showroom order.',
    name: 'Sunil Sharma',
    location: 'Jaipur, Rajasthan',
    rating: 5,
  },
  {
    text: 'I purchased a 100L commercial desert cooler for my restaurant. Remarkable air throw and very sturdy body.',
    name: 'Amit Verma',
    location: 'Bikaner, Rajasthan',
    rating: 5,
  },
]

const testimonialsHi = [
  {
    text: 'लाजवाब कूलर! जोधपुर की भीषण गर्मी में भी बहुत शानदार ठंडी हवा देता है। के.के. एंटरप्राइजेज की क्वालिटी सच में नंबर 1 है।',
    name: 'राजेश कुमार',
    location: 'जोधपुर, राजस्थान',
    rating: 5,
  },
  {
    text: 'मार्केट में सबसे कम दाम और सबसे मजबूत क्वालिटी। कमल अरोड़ा जी ने हमारे शोरूम के लिए सबसे बढ़िया थोक रेट दिया।',
    name: 'सुनील शर्मा',
    location: 'जयपुर, राजस्थान',
    rating: 5,
  },
  {
    text: 'मैंने अपनी दुकान के लिए 100 लीटर का कमर्शियल डेजर्ट कूलर लिया। हवा का थ्रो बहुत तेज है और बॉडी बहुत मजबूत है।',
    name: 'अमित वर्मा',
    location: 'बीकानेर, राजस्थान',
    rating: 5,
  },
]

export default function HomePage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()
  const [selectedType, setSelectedType] = useState('all')

  const displayedCoolers = selectedType === 'all'
    ? allCoolers
    : allCoolers.filter(c => c.category === selectedType)

  const features = isHindi ? featuresHi : featuresEn
  const stats = isHindi ? statsHi : statsEn
  const testimonials = isHindi ? testimonialsHi : testimonialsEn

  return (
    <>
      {/* ===== HERO VIDEO ===== */}
      <section className="hero hero-video-section">
        <video
          className="hero-video-bg"
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-video-overlay" />
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

      {/* ===== PRODUCTS SECTION - ALL COOLER TYPES DIRECTLY ON HOME ===== */}
      <section className="section section-alt" id="products">
        <div className="container">
          <div className="section-title">
            <span className="badge-tag" style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px' }}>
              {isHindi ? 'के.के. कूलर जोधपुर रेंज' : 'KK COOLER JODHPUR RANGE'}
            </span>
            <h2>{t.home.featuredTitle}</h2>
            <p>{t.home.featuredSubtitle}</p>
          </div>

          {/* 3 Main Cooler Types Overview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {coolerCategories.map(cat => {
              const catTitle = isHindi
                ? (cat.id === 'personal' ? 'पर्सनल कूलर्स' : cat.id === 'commercial' ? 'कमर्शियल व डेजर्ट कूलर्स' : 'टावर कूलर्स')
                : cat.name
              const catTagline = isHindi
                ? (cat.id === 'personal' ? 'बेडरूम और पर्सनल स्पेस हेतु' : cat.id === 'commercial' ? 'दुकानों, हॉल्स और कारखानों हेतु' : 'आधुनिक स्लीक टावर डिजाइन')
                : cat.tagline

              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  style={{
                    background: selectedType === cat.id ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' : '#ffffff',
                    color: selectedType === cat.id ? '#ffffff' : 'var(--dark)',
                    borderRadius: '16px',
                    padding: '24px',
                    cursor: 'pointer',
                    border: selectedType === cat.id ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                    boxShadow: selectedType === cat.id ? '0 15px 35px rgba(192, 19, 42, 0.25)' : '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
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
                      fontSize: '1.15rem',
                      color: selectedType === cat.id ? '#ffffff' : 'var(--primary)',
                      marginBottom: '4px',
                      fontWeight: 700
                    }}>
                      {catTitle}
                    </h3>
                    <div style={{ fontSize: '12px', color: selectedType === cat.id ? '#fca5a5' : '#64748b', fontWeight: 600 }}>
                      {cat.count}
                    </div>
                    <div style={{ fontSize: '11px', marginTop: '4px', color: selectedType === cat.id ? '#cbd5e1' : '#94a3b8' }}>
                      {catTagline}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Interactive Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '35px'
          }}>
            {[
              { id: 'all', label: t.home.tabAll },
              { id: 'personal', label: t.home.tabPersonal },
              { id: 'commercial', label: t.home.tabCommercial },
              { id: 'tower', label: t.home.tabTower },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: 'none',
                  background: selectedType === tab.id ? 'var(--primary)' : '#ffffff',
                  color: selectedType === tab.id ? '#ffffff' : 'var(--dark)',
                  fontWeight: selectedType === tab.id ? 700 : 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: selectedType === tab.id ? '0 6px 20px rgba(192, 19, 42, 0.35)' : '0 2px 10px rgba(0,0,0,0.06)',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="product-list-grid">
            {displayedCoolers.map(cooler => (
              <div className="product-card" key={cooler.id} style={{ display: 'flex', flexDirection: 'column' }}>
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

                  {/* Pricing tag */}
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
                        title="Call: 9351359518"
                      >
                        <i className="fas fa-phone-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Full Catalog Page */}
          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link
              to={getLocalizedPath('/all-coolers')}
              className="btn btn-blue"
              style={{
                padding: '14px 34px',
                fontSize: '15px',
                fontWeight: 700,
                boxShadow: '0 8px 25px rgba(192, 19, 42, 0.3)'
              }}
            >
              {isHindi ? 'पूरा कूलर कैटलॉग देखें (14 मॉडल)' : 'View Full Cooler Catalog Page (14 Models)'} <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                padding: '25px',
              }}>
                <div style={{
                  width: '100%',
                  height: '270px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img
                    src={personalCoolerImg}
                    alt="KK Cooler Jodhpur"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))'
                    }}
                  />
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  color: 'white',
                  padding: '6px 18px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(192, 19, 42, 0.3)'
                }}>
                  KK COOLER JODHPUR
                </div>
              </div>
              <div className="years-badge">
                <div className="years-badge-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="years-badge-content">
                  <div className="num">10+</div>
                  <div className="text">{isHindi ? 'वर्षों का अनुभव' : 'Years Experience'}</div>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="badge-tag">{isHindi ? 'हमारा परिचय' : 'Who We Are'}</span>
              <h2>{isHindi ? 'जोधपुर, राजस्थान का अग्रणी एयर कूलर निर्माता' : 'Leading Cooler Manufacturer in Jodhpur, Rajasthan'}</h2>
              <p>
                {isHindi
                  ? 'के.के. कूलर (व्यावसायिक नाम: के.के. एंटरप्राइजेज) जोधपुर, राजस्थान में एयर कूलर निर्माण, थोक एवं खुदरा व्यापार का एक प्रमुख नाम है। प्रोप्राइटर श्री कमल अरोड़ा के नेतृत्व में, हम राजस्थान की भीषण गर्मी के लिए विशेष रूप से मजबूत और ठंडी हवा देने वाले कूलर्स तैयार करते हैं।'
                  : 'KK COOLER JODHPUR (operating commercially as K.K. Enterprises) is a prominent air cooler manufacturing, wholesaling, and retail business located in Jodhpur, Rajasthan. Led by proprietor Mr. Kamal Arora, we engineer heavy-duty coolers designed to withstand intense dry summer heat.'}
              </p>
              <div className="about-features">
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? '100% शुद्ध कॉपर मोटर' : '100% Pure Copper Motor'}</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? '10+ वर्षों का अनुभव' : '10+ Years Experience'}</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? 'पूरे राजस्थान में सप्लाय' : 'Pan-Rajasthan Supply'}</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? 'थोक व खुदरा उपलब्ध' : 'Wholesale & Retail'}</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? 'कम बिजली खपत' : 'Energy Efficient'}</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> {isHindi ? 'सीधा फैक्ट्री भाव' : 'Direct Factory Pricing'}</div>
              </div>
              <Link to={getLocalizedPath('/about-us')} className="btn btn-blue">
                {isHindi ? 'हमारे बारे में और जानें' : 'Know More About Us'}
              </Link>
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

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>{isHindi ? 'हमारे ग्राहक क्या कहते हैं' : 'What Our Customers Say'}</h2>
            <p>{isHindi ? 'हजारों संतुष्ट परिवारों और व्यापारियों का भरोसा — के.के. कूलर जोधपुर' : 'Join thousands of satisfied customers who trust KK COOLER JODHPUR for their cooling needs.'}</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array(t.rating).fill(0).map((_, j) => <i key={j} className="fas fa-star"></i>)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div className="author-info">
                    <div className="name">{t.name}</div>
                    <div className="location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <h2>{isHindi ? 'भीषण गर्मी को मात देने के लिए तैयार हैं?' : 'Ready to Beat the Heat?'}</h2>
          <p>{isHindi ? 'अपने घर, दुकान या कारखाने के लिए न्यूनतम फैक्ट्री दरों पर सबसे मजबूत कूलर्स पाएं।' : 'Get the best cooling solutions for your home, office, or shop at unbeatable prices.'}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20send%20an%20enquiry%20for%20coolers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
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
