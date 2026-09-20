import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
const heroBg = 'https://res.cloudinary.com/t6yv9yib/video/upload/v1789879011/Make_a_second_video_to_acco.mp4'
import personalCoolerImg from '../assets/perosnal_cooler.png'
import commercialCoolerImg from '../assets/commerinal_cooler.png'
import towerCoolerImg from '../assets/tower_cooler.png'
import { allCoolers, coolerCategories } from '../data/coolersData'

const slides = [
  {
    badge: 'Leading Manufacturer',
    title: <>Beat the Heat with <span>KK COOLER</span></>,
    desc: 'Premium quality air coolers for every need — personal, commercial & industrial. Trusted by lakhs of households across India.',
    bg: 'linear-gradient(135deg, #8f0a1d 0%, #c0132a 100%)',
    faIcon: 'fas fa-snowflake',
  },
  {
    badge: 'Wide Product Range',
    title: <>High-Performance <span>Fans & Appliances</span></>,
    desc: 'From pedestal fans to room heaters and irons — explore our complete range of home appliances engineered for Indian homes.',
    bg: 'linear-gradient(135deg, #6b0715 0%, #9e1020 100%)',
    faIcon: 'fas fa-fan',
  },
  {
    badge: 'Pan India Delivery',
    title: <>Quality Products at <span>Affordable Prices</span></>,
    desc: 'We bring factory-direct pricing to your doorstep. Made in India, delivered across every state — UP, Bihar, Rajasthan and beyond.',
    bg: 'linear-gradient(135deg, #5a0912 0%, #8f0a1d 100%)',
    faIcon: 'fas fa-truck',
  },
]

const features = [
  { icon: 'fas fa-truck', title: 'Pan India Delivery', desc: 'We deliver our products across all states in India — from UP and Bihar to Rajasthan, MP and beyond.' },
  { icon: 'fas fa-flag', title: 'Made in India', desc: 'Proudly manufactured in India. Every KK COOLER product is crafted with pride at our Indian facility.' },
  { icon: 'fas fa-history', title: '10+ Years Experience', desc: 'Over a decade of expertise in manufacturing premium coolers and home appliances trusted across India.' },
  { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Our dedicated customer support team is always ready to assist you anytime, anywhere.' },
]

const categories = [
  { name: 'Personal Coolers', desc: 'Ideal for home & small rooms', path: '/personal-coolers', image: personalCoolerImg, color: '#c0132a' },
  { name: 'Commercial Coolers', desc: 'For offices, shops & large spaces', path: '/commercial-cooler', image: commercialCoolerImg, color: '#8f0a1d' },
  { name: 'Tower Coolers', desc: 'Slim design, powerful cooling', path: '/tower-coolers', image: towerCoolerImg, color: '#c0132a' },
]

const stats = [
  { num: '50,000', label: 'Happy Customers', suffix: '+' },
  { num: '100', label: 'Cities Covered', suffix: '+' },
  { num: '10', label: 'Years Experience', suffix: '+' },
  { num: '25', label: 'Product Variants', suffix: '+' },
]

const testimonials = [
  {
    text: 'Excellent cooler! Very good cooling even in peak summer. The quality is outstanding and it has been running perfectly for 2 years now.',
    name: 'Rajesh Kumar',
    location: 'Lucknow, UP',
    rating: 5,
  },
  {
    text: 'Best price in market with top quality. My family loves the KK COOLER cooler. Would highly recommend to everyone looking for a reliable cooler.',
    name: 'Sunil Sharma',
    location: 'Jodhpur, Rajasthan',
    rating: 5,
  },
  {
    text: 'I purchased a commercial cooler for my shop. Excellent performance and great after-sales service. Very satisfied with the product.',
    name: 'Amit Verma',
    location: 'Jaipur, Rajasthan',
    rating: 5,
  },
]

export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const [selectedType, setSelectedType] = useState('all')
  const intervalRef = useRef(null)

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 4500)
  }

  useEffect(() => {
    startSlider()
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    setCurrent(i)
    clearInterval(intervalRef.current)
    startSlider()
  }

  const displayedCoolers = selectedType === 'all'
    ? allCoolers
    : allCoolers.filter(c => c.category === selectedType)

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
              KK COOLER JODHPUR RANGE
            </span>
            <h2>Our Complete Air Cooler Collection</h2>
            <p>Manufactured in Jodhpur, Rajasthan. Explore our entire range of Personal, Commercial, and Tower coolers built for extreme desert temperatures.</p>
          </div>

          {/* 3 Main Cooler Types Overview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {coolerCategories.map(cat => (
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
                  <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    color: selectedType === cat.id ? '#ffffff' : 'var(--primary)',
                    marginBottom: '4px',
                    fontWeight: 700
                  }}>
                    {cat.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: selectedType === cat.id ? '#fca5a5' : '#64748b', fontWeight: 600 }}>
                    {cat.count}
                  </div>
                  <div style={{ fontSize: '11px', marginTop: '4px', color: selectedType === cat.id ? '#cbd5e1' : '#94a3b8' }}>
                    {cat.tagline}
                  </div>
                </div>
              </div>
            ))}
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
              { id: 'all', label: 'All Cooler Types (14)' },
              { id: 'personal', label: 'Personal Coolers (6)' },
              { id: 'commercial', label: 'Commercial Coolers (4)' },
              { id: 'tower', label: 'Tower Coolers (4)' },
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

          {/* Product Cards Grid - All Models directly on Home Screen */}
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
                  {/* Badge */}
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

                  {/* Category tag */}
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
                    {cooler.categoryName}
                  </span>

                  <Link
                    to={`/product/${cooler.id}`}
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
                    Model: {cooler.modelNumber}
                  </div>

                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px' }}>
                    <Link
                      to={`/product/${cooler.id}`}
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
                      {cooler.sellingPrice}
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      {cooler.mrp}
                    </span>
                    <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
                      Factory Direct
                    </span>
                  </div>

                  <ul className="product-specs" style={{ flex: 1, marginBottom: '16px' }}>
                    {cooler.specs.slice(0, 4).map((spec, i) => (
                      <li key={i} style={{ fontSize: '12px', marginBottom: '4px' }}>
                        <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '6px' }} />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                    <Link
                      to={`/product/${cooler.id}`}
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
                      View Full Details & 23+ Specs
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
                        Enquiry / Quote
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
                        title="Instant WhatsApp Enquiry: +91 9351359518"
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

          {/* Link to Full Catalog Page */}
          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link
              to="/all-coolers"
              className="btn btn-blue"
              style={{
                padding: '14px 34px',
                fontSize: '15px',
                fontWeight: 700,
                boxShadow: '0 8px 25px rgba(192, 19, 42, 0.3)'
              }}
            >
              View Full Cooler Catalog Page (14 Models) <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }} />
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
                  <div className="text">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="badge-tag">Who We Are</span>
              <h2>Leading Cooler Manufacturer in Jodhpur, Rajasthan</h2>
              <p>
                KK COOLER JODHPUR is a leading manufacturer of premium air coolers
                headquartered in Jodhpur, Rajasthan. We have been serving lakhs of households and
                businesses across India for over a decade.
              </p>
              <p>
                Our product range covers personal coolers, commercial coolers, and tower coolers
                — all manufactured with the highest quality standards and heavy-duty performance.
              </p>
              <div className="about-features">
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> ISO Certified Products</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> 10+ Years Experience</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> Pan-India Distribution</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> BIS Certified</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> Energy Efficient</div>
                <div className="about-feature-item"><i className="fas fa-check-circle"></i> Affordable Pricing</div>
              </div>
              <Link to="/about-us" className="btn btn-blue">Know More About Us</Link>
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
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied customers who trust KK COOLER JODHPUR for their cooling needs.</p>
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
          <h2>Ready to Beat the Heat?</h2>
          <p>Get the best cooling solutions for your home, office, or shop at unbeatable prices.</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20send%20an%20enquiry%20for%20coolers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
              Send Enquiry on WhatsApp
            </a>
            <a href="tel:9351359518" className="btn" style={{ background: 'white', color: '#e84c0d', fontWeight: 700 }}>Call 9351359518</a>
          </div>
        </div>
      </section>
    </>
  )
}
