import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Enquiry', path: '/enquiry' },
  { label: 'Contact Us', path: '/contact-us' },
]

const productLinks = [
  { label: 'All Coolers', path: '/all-coolers' },
  { label: 'Personal Coolers', path: '/personal-coolers' },
  { label: 'Commercial Coolers', path: '/commercial-cooler' },
  { label: 'Tower Coolers', path: '/tower-coolers' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="logo-text">
                <span className="brand">KK COOLER JODHPUR</span>
              </div>
              <p className="footer-about-text">
                KK COOLER JODHPUR is a leading manufacturer of premium air coolers.
                We provide the best quality personal, commercial, and tower coolers at the most competitive
                prices across Rajasthan and all over India.
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
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map(l => (
                  <li key={l.path}>
                    <Link to={l.path}><i className="fas fa-chevron-right"></i>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4>Our Coolers</h4>
              <ul className="footer-links">
                {productLinks.map(l => (
                  <li key={l.path}>
                    <Link to={l.path}><i className="fas fa-chevron-right"></i>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Info</h4>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Near Dali Bai Circle (Dali Bai Mandir), Ambika Nagar, Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001</span>
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
            &copy; {new Date().getFullYear()} <span>KK COOLER JODHPUR</span>. All Rights Reserved.
            | Leading Air Cooler Manufacturer in Jodhpur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  )
}
