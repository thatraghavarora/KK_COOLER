import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export function PriceTag({ cooler, isHindi }) {
  if (cooler.priceOnRequest || cooler.sellingPrice == null) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary)' }}>
          {isHindi ? 'भाव हेतु संपर्क करें' : 'Contact for Best Price'}
        </span>
        <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 8px', borderRadius: '4px' }}>
          {isHindi ? 'होलसेल रेट उपलब्ध' : 'Wholesale Rates'}
        </span>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
        ₹{cooler.sellingPrice?.toLocaleString('en-IN')}
      </span>
      {cooler.mrp ? (
        <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>
          MRP ₹{cooler.mrp?.toLocaleString('en-IN')}
        </span>
      ) : null}
      <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700, background: '#dcfce7', padding: '2px 6px', borderRadius: '4px' }}>
        {isHindi ? 'फैक्ट्री रेट' : 'Factory Direct'}
      </span>
    </div>
  )
}

export default function ProductCard({ cooler: rawCooler, name, image, specs, path }) {
  const { isHindi, getLocalizedPath } = useLanguage()
  // Support both old prop style and new cooler-object style
  const cooler = rawCooler || { name, image, specs }
  const detailPath = getLocalizedPath(path || (cooler.id ? `/product/${cooler.id}` : '/enquiry'))
  const img = cooler.image || image
  const title = cooler.name || name
  const list = cooler.specs || specs || (cooler.keyFeatures || []).slice(0, 4)

  const waText = encodeURIComponent(`Hello KK COOLER JODHPUR, I want to enquire about ${title} (${cooler.modelNumber || ''})`)

  return (
    <div className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className="product-card-img"
        style={{
          background: '#ffffff', height: '300px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', padding: '10px', position: 'relative', borderBottom: '1px solid #f1f5f9',
        }}
      >
        {cooler.badge && (
          <span style={{
            position: 'absolute', top: '12px', left: '12px', zIndex: 2,
            background: cooler.category === 'commercial' ? '#1a1a2e' : 'var(--primary)',
            color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px',
          }}>
            {cooler.badge}
          </span>
        )}
        <Link to={detailPath} style={{ display: 'block', width: '100%', height: '100%' }} title={`${title} — click to view full catalog details`}>
          <img
            src={img} alt={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.10))' }}
          />
        </Link>
      </div>
      <div className="product-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {cooler.modelNumber && (
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
            {isHindi ? 'मॉडल:' : 'Model:'} {cooler.modelNumber} • {cooler.capacity || ''}
          </div>
        )}
        <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: '6px' }}>
          <Link to={detailPath} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link>
        </h3>
        {cooler.highlight && (
          <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px', fontStyle: 'italic' }}>{cooler.highlight}</p>
        )}
        {cooler.mrp != null || cooler.priceOnRequest ? <PriceTag cooler={cooler} isHindi={isHindi} /> : null}
        {list && (
          <ul className="product-specs" style={{ flex: 1, marginBottom: '16px' }}>
            {list.slice(0, 4).map((s, i) => (
              <li key={i} style={{ fontSize: '12px', marginBottom: '4px' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '6px' }} />
                {s}
              </li>
            ))}
          </ul>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
          <Link
            to={detailPath} className="btn"
            style={{
              background: '#1a1a2e', color: '#ffffff', fontSize: '12.5px', fontWeight: 700,
              padding: '9px', textAlign: 'center', borderRadius: '8px', textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            }}
          >
            <i className="fas fa-image" />
            {isHindi ? 'पोस्टर + पूरी जानकारी देखें' : 'View Poster & Full Details'}
          </Link>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={`https://wa.me/919351359518?text=${waText}`} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                flex: 1, fontSize: '12.5px', padding: '9px', textAlign: 'center', borderRadius: '8px',
                textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '15px' }} />
              {isHindi ? 'कोटेशन लें' : 'Enquiry / Quote'}
            </a>
            <a
              href="tel:9351359518"
              style={{
                background: '#f1f5f9', color: '#1e293b', padding: '9px 12px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
                fontSize: '14px', border: '1px solid #cbd5e1',
              }}
              title="Call: 9351359518"
            >
              <i className="fas fa-phone-alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
