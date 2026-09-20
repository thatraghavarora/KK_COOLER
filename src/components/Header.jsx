import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="top-contact">
            <a href="tel:9351359518" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <i className="fa fa-phone"></i>
              <span>+91 9351359518</span>
            </a>
          </div>
          <div className="top-contact">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire%20about%20coolers"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp: +91 9351359518</span>
            </a>
          </div>
          <div className="top-social">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <Link to="/" className="header-logo">
              <div className="logo-text">
                <span className="brand">KK COOLER </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <ul>
                <li className={pathname === '/' ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={pathname === '/all-coolers' || pathname === '/coolers' ? 'active' : ''}>
                  <Link to="/all-coolers">All Coolers</Link>
                </li>
                <li className={pathname === '/personal-coolers' ? 'active' : ''}>
                  <Link to="/personal-coolers">Personal Coolers</Link>
                </li>
                <li className={pathname === '/commercial-cooler' ? 'active' : ''}>
                  <Link to="/commercial-cooler">Commercial Coolers</Link>
                </li>
                <li className={pathname === '/tower-coolers' ? 'active' : ''}>
                  <Link to="/tower-coolers">Tower Coolers</Link>
                </li>
                <li className={pathname === '/about-us' ? 'active' : ''}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className={pathname === '/contact-us' ? 'active' : ''}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="shop-btn">
                  <a
                    href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20make%20an%20enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25D366',
                      color: '#ffffff',
                      borderRadius: '25px',
                      padding: '8px 16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontWeight: 700,
                      fontSize: '13px',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i>
                    <span>Enquiry Now</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Hamburger */}
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Nav */}
      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <ul>
          <li><Link to="/"><span>Home</span></Link></li>
          <li><Link to="/all-coolers"><span>All Coolers</span></Link></li>
          <li><Link to="/personal-coolers"><span>Personal Coolers</span></Link></li>
          <li><Link to="/commercial-cooler"><span>Commercial Coolers</span></Link></li>
          <li><Link to="/tower-coolers"><span>Tower Coolers</span></Link></li>
          <li><Link to="/about-us"><span>About Us</span></Link></li>
          <li><Link to="/contact-us"><span>Contact Us</span></Link></li>
          <li>
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20make%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '8px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '10px',
                textDecoration: 'none'
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
              <span>Enquiry on WhatsApp (+91 9351359518)</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
