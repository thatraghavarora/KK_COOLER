import { Link } from 'react-router-dom'

export default function ProductCard({ name, image, specs, path }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        {specs && (
          <ul className="product-specs">
            {specs.map((s, i) => (
              <li key={i}>
                <i className="fas fa-check-circle"></i>
                {s}
              </li>
            ))}
          </ul>
        )}
        <Link to={path || '/enquiry'} className="btn btn-primary" style={{marginTop:'12px',display:'inline-block',fontSize:'13px',padding:'9px 22px'}}>
          Get Quote
        </Link>
      </div>
    </div>
  )
}
