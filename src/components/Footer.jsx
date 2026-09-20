import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { isHindi, t, getLocalizedPath } = useLanguage()

  const quickLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about-us' },
    { label: t.nav.enquiry, path: '/enquiry' },
    { label: t.nav.contact, path: '/contact-us' },
  ]

  const productLinks = [
    { label: t.nav.allCoolers, path: '/all-coolers' },
    { label: t.nav.personalCoolers, path: '/personal-coolers' },
    { label: t.nav.commercialCoolers, path: '/commercial-cooler' },
    { label: t.nav.towerCoolers, path: '/tower-coolers' },
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="logo-text">
                <span className="brand">KK COOLER {isHindi ? 'जोधपुर' : 'JODHPUR'}</span>
                <span className="tagline">{isHindi ? 'के.के. एंटरप्राइजेज' : 'K.K. ENTERPRISES'}</span>
              </div>
              <p className="footer-about-text">
                {t.footer.brandDesc}
              </p>
              <div className="footer-social">
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

            {/* Quick Links */}
            <div className="footer-col">
              <h4>{t.footer.quickLinks}</h4>
              <ul className="footer-links">
                {quickLinks.map(l => (
                  <li key={l.path}>
                    <Link to={getLocalizedPath(l.path)}><i className="fas fa-chevron-right"></i>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4>{t.footer.ourCoolers}</h4>
              <ul className="footer-links">
                {productLinks.map(l => (
                  <li key={l.path}>
                    <Link to={getLocalizedPath(l.path)}><i className="fas fa-chevron-right"></i>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>{t.footer.contactInfo}</h4>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {isHindi
                    ? 'प्लॉट नं. 168 / प्लॉट नं. 19, अम्बिका नगर, डाली बाई सर्किल (डाली बाई मंदिर), मसूरिया / भादू मार्केट, जोधपुर, राजस्थान – 342001'
                    : 'Near Dali Bai Circle (Dali Bai Mandir), Ambika Nagar, Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001'}
                </span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt"></i>
                <span><a href="tel:9351359518" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9351359518</a><br /><a href="tel:9760098098" style={{ color: 'inherit', textDecoration: 'none' }}>9760098098</a></span>
              </div>
              <div className="footer-contact-item">
                <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
                <a href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire" target="_blank" rel="noopener noreferrer" style={{ color: '#86efac', textDecoration: 'none', fontWeight: 600 }}>WhatsApp: +91 9351359518</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@kkcoolerjodhpur.com</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-globe"></i>
                <span>www.kkcoolerjodhpur.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} <span>KK COOLER JODHPUR</span>. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
