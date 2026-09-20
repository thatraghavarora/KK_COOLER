import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { isHindi, t, getLocalizedPath, switchLanguage } = useLanguage()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (path) => {
    const localized = getLocalizedPath(path)
    return pathname === localized || (path === '/' && pathname === '/in')
  }

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

          {/* Language Switcher */}
          <div
            className="language-switcher"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.18)',
              borderRadius: '20px',
              padding: '2px',
              border: '1px solid rgba(255,255,255,0.3)',
              marginLeft: 'auto'
            }}
          >
            <button
              type="button"
              onClick={() => switchLanguage('en')}
              style={{
                border: 'none',
                background: !isHindi ? '#ffffff' : 'transparent',
                color: !isHindi ? 'var(--primary)' : 'rgba(255,255,255,0.9)',
                padding: '3px 10px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '11px',
                transition: 'all 0.2s ease'
              }}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => switchLanguage('hi')}
              style={{
                border: 'none',
                background: isHindi ? '#ffffff' : 'transparent',
                color: isHindi ? 'var(--primary)' : 'rgba(255,255,255,0.9)',
                padding: '3px 10px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '11px',
                transition: 'all 0.2s ease'
              }}
              title="हिंदी में देखें (/in)"
            >
              हिंदी
            </button>
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
            <Link to={getLocalizedPath('/')} className="header-logo">
              <div className="logo-text">
                <span className="brand">KK COOLER</span>

              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <ul>
                <li className={isActive('/') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/')}>{t.nav.home}</Link>
                </li>
                <li className={isActive('/all-coolers') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/all-coolers')}>{t.nav.allCoolers}</Link>
                </li>
                <li className={isActive('/personal-coolers') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/personal-coolers')}>{t.nav.personalCoolers}</Link>
                </li>
                <li className={isActive('/commercial-cooler') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/commercial-cooler')}>{t.nav.commercialCoolers}</Link>
                </li>
                <li className={isActive('/tower-coolers') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/tower-coolers')}>{t.nav.towerCoolers}</Link>
                </li>
                <li className={isActive('/about-us') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/about-us')}>{t.nav.about}</Link>
                </li>
                <li className={isActive('/contact-us') ? 'active' : ''}>
                  <Link to={getLocalizedPath('/contact-us')}>{t.nav.contact}</Link>
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
                    <span>{t.nav.enquiry}</span>
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

        {/* Mobile Language Switcher */}
        <div style={{ padding: '15px 20px 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>
            {isHindi ? 'भाषा चुनें / Language:' : 'Language / भाषा:'}
          </span>
          <div style={{ display: 'inline-flex', background: '#f1f5f9', borderRadius: '20px', padding: '2px' }}>
            <button
              type="button"
              onClick={() => { switchLanguage('en'); setMobileOpen(false) }}
              style={{
                border: 'none',
                background: !isHindi ? 'var(--primary)' : 'transparent',
                color: !isHindi ? '#ffffff' : '#475569',
                padding: '4px 12px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '12px'
              }}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => { switchLanguage('hi'); setMobileOpen(false) }}
              style={{
                border: 'none',
                background: isHindi ? 'var(--primary)' : 'transparent',
                color: isHindi ? '#ffffff' : '#475569',
                padding: '4px 12px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '12px'
              }}
            >
              हिंदी
            </button>
          </div>
        </div>

        <ul>
          <li><Link to={getLocalizedPath('/')} onClick={() => setMobileOpen(false)}><span>{t.nav.home}</span></Link></li>
          <li><Link to={getLocalizedPath('/all-coolers')} onClick={() => setMobileOpen(false)}><span>{t.nav.allCoolers}</span></Link></li>
          <li><Link to={getLocalizedPath('/personal-coolers')} onClick={() => setMobileOpen(false)}><span>{t.nav.personalCoolers}</span></Link></li>
          <li><Link to={getLocalizedPath('/commercial-cooler')} onClick={() => setMobileOpen(false)}><span>{t.nav.commercialCoolers}</span></Link></li>
          <li><Link to={getLocalizedPath('/tower-coolers')} onClick={() => setMobileOpen(false)}><span>{t.nav.towerCoolers}</span></Link></li>
          <li><Link to={getLocalizedPath('/about-us')} onClick={() => setMobileOpen(false)}><span>{t.nav.about}</span></Link></li>
          <li><Link to={getLocalizedPath('/contact-us')} onClick={() => setMobileOpen(false)}><span>{t.nav.contact}</span></Link></li>
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
              <span>WhatsApp: +91 9351359518</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
