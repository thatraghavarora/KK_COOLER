import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function PageBanner({ title, breadcrumb }) {
  const { isHindi, t, getLocalizedPath } = useLanguage()

  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-content">
          <h1>{title}</h1>
          <div className="breadcrumb">
            <Link to={getLocalizedPath('/')}>{t.nav.home}</Link>
            <i className="fas fa-angle-right"></i>
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {item.path ? (
                  <Link to={getLocalizedPath(item.path)}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {i < breadcrumb.length - 1 && <i className="fas fa-angle-right" style={{ margin: '0 4px' }}></i>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
