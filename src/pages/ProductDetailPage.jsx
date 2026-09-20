import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { allCoolers, factoryDetails } from '../data/coolersData'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeMediaTab, setActiveMediaTab] = useState(0) // 0: front, 1: side, 2: back, 3: video
  const [quoteSent, setQuoteSent] = useState(false)
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', city: '', quantity: '1' })

  const cooler = useMemo(() => {
    return allCoolers.find(c => c.id === id) || allCoolers[0]
  }, [id])

  const relatedCoolers = useMemo(() => {
    return allCoolers.filter(c => c.id !== cooler.id && c.category === cooler.category).slice(0, 3)
  }, [cooler])

  const discountPercent = Math.round(((cooler.mrp - cooler.sellingPrice) / cooler.mrp) * 100)

  const whatsappMessage = encodeURIComponent(
    `Hello KK COOLER JODHPUR!\n\nI am interested in:\nProduct: ${cooler.name}\nModel Number: ${cooler.modelNumber}\nCategory: ${cooler.categoryName}\nPrice: ₹${cooler.sellingPrice.toLocaleString('en-IN')}\n\nPlease share the best factory quotation and delivery timeline to my location.`
  )

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    setQuoteSent(true)
    setTimeout(() => {
      alert(`Thank you ${quoteForm.name}! Your enquiry for ${cooler.name} has been received. Our factory team will contact you at ${quoteForm.phone} shortly.`)
    }, 200)
  }

  const handlePrintSpecs = () => {
    window.print()
  }

  return (
    <>
      <PageBanner
        title={cooler.name}
        breadcrumb={[
          { label: 'All Coolers', path: '/all-coolers' },
          { label: cooler.categoryName, path: `/${cooler.category === 'personal' ? 'personal-coolers' : cooler.category === 'commercial' ? 'commercial-cooler' : 'tower-coolers'}` },
          { label: cooler.modelNumber }
        ]}
      />

      <section className="section" style={{ paddingTop: '30px', paddingBottom: '70px' }}>
        <div className="container">
          {/* Main Top Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '60px'
          }}>
            {/* Left: Media Gallery & Video */}
            <div>
              {/* Main Media Box */}
              <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                position: 'relative',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: activeMediaTab === 3 ? '0' : '20px',
                marginBottom: '16px'
              }}>
                {/* Badge */}
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  zIndex: 2,
                  boxShadow: '0 4px 10px rgba(192,19,42,0.3)'
                }}>
                  {cooler.badge}
                </span>

                {/* Made in Jodhpur Tag */}
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#1a1a2e',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '20px',
                  zIndex: 2
                }}>
                  <i className="fas fa-certificate" style={{ color: '#fbbf24', marginRight: '5px' }} />
                  Jodhpur Made
                </span>

                {activeMediaTab === 3 ? (
                  <video
                    src={cooler.video}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={cooler.gallery[activeMediaTab]?.image || cooler.image}
                    alt={`${cooler.name} - ${cooler.gallery[activeMediaTab]?.label}`}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.12))',
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
              </div>

              {/* Thumbnail Selector Tabs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {cooler.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaTab(idx)}
                    style={{
                      background: activeMediaTab === idx ? '#fff' : '#f8fafc',
                      border: activeMediaTab === idx ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                      borderRadius: '10px',
                      padding: '8px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: activeMediaTab === idx ? '0 4px 12px rgba(192,19,42,0.2)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={item.image} alt={item.label} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: activeMediaTab === idx ? 'var(--primary)' : '#64748b', marginTop: '4px' }}>
                      {item.label}
                    </div>
                  </button>
                ))}

                {/* Video Tab */}
                <button
                  onClick={() => setActiveMediaTab(3)}
                  style={{
                    background: activeMediaTab === 3 ? '#1a1a2e' : '#f8fafc',
                    color: activeMediaTab === 3 ? '#ffffff' : '#1a1a2e',
                    border: activeMediaTab === 3 ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    boxShadow: activeMediaTab === 3 ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fas fa-play-circle" style={{ fontSize: '24px', color: activeMediaTab === 3 ? '#ef4444' : 'var(--primary)', marginBottom: '4px' }} />
                  <div style={{ fontSize: '10px', fontWeight: 700 }}>Product Video</div>
                </button>
              </div>

              {/* Assurance strip */}
              <div style={{
                marginTop: '20px',
                padding: '15px 20px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                fontSize: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-award" style={{ color: 'var(--primary)', fontSize: '16px' }} />
                  <span><strong>10+ Years</strong> Jodhpur Heritage</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#16a34a', fontSize: '16px' }} />
                  <span><strong>1 Year</strong> Full Warranty</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-bolt" style={{ color: '#eab308', fontSize: '16px' }} />
                  <span><strong>100% Copper</strong> Winding</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-truck" style={{ color: '#0284c7', fontSize: '16px' }} />
                  <span><strong>Pan-India</strong> Direct Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right: Product Info & Order CTAs */}
            <div>
              {/* Category & Model Pill */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  background: 'rgba(192, 19, 42, 0.1)',
                  color: 'var(--primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  {cooler.categoryName}
                </span>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>
                  Model: <strong style={{ color: 'var(--dark)' }}>{cooler.modelNumber}</strong>
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                  Ready in Factory Stock
                </span>
              </div>

              {/* Title */}
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px', lineHeight: '1.2' }}>
                {cooler.name}
              </h1>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px', fontStyle: 'italic' }}>
                {cooler.highlight}
              </p>

              {/* Price Block */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                padding: '18px 24px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                marginBottom: '22px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '14px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', fontWeight: 600 }}>
                    Direct Factory Offer Price
                  </span>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'Rubik, sans-serif' }}>
                    ₹{cooler.sellingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div style={{ color: '#94a3b8', textDecoration: 'line-through', fontSize: '1.2rem', fontWeight: 500 }}>
                  MRP ₹{cooler.mrp.toLocaleString('en-IN')}
                </div>
                <div style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px'
                }}>
                  Save {discountPercent}% (₹{(cooler.mrp - cooler.sellingPrice).toLocaleString('en-IN')} OFF)
                </div>
              </div>

              {/* Quick Specs 4-Box Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '25px'
              }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Tank Capacity</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.capacity}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Cooling Area</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.coolingCapacity.split('(')[0]}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Air Throw</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>{cooler.airThrow || cooler.airDelivery}</div>
                </div>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 16px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Motor Winding</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--dark)', marginTop: '2px' }}>100% Pure Copper</div>
                </div>
              </div>

              {/* Big Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${factoryDetails.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '14px 24px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '16px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '22px' }} />
                  Order / Enquire on WhatsApp
                </a>

                {/* Secondary Row: Call & Request Quote */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <a
                    href={`tel:${factoryDetails.phone}`}
                    style={{
                      background: '#1a1a2e',
                      color: '#ffffff',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fas fa-phone-alt" />
                    Call: {factoryDetails.phone}
                  </a>

                  <a
                    href={`https://wa.me/919351359518?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
                    Instant Enquiry
                  </a>
                </div>
              </div>

              {/* Factory Dispatch & Contact Box */}
              <div style={{
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-industry" />
                  Direct Jodhpur Factory Details
                </div>
                <div style={{ fontSize: '12px', color: '#475569', lineHeight: '1.7' }}>
                  <div><strong>Manufacturer:</strong> {factoryDetails.name}</div>
                  <div><strong>Address:</strong> {factoryDetails.address}</div>
                  <div><strong>Contact:</strong> +91 {factoryDetails.phone} | {factoryDetails.altPhone}</div>
                  <div><strong>Email:</strong> <a href={`mailto:${factoryDetails.email}`} style={{ color: 'var(--primary)' }}>{factoryDetails.email}</a></div>
                  <div><strong>Timing:</strong> {factoryDetails.workingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Technical Specification Sheet Table */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)' }}>
                  Complete Technical Specifications
                </h2>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Official specification sheet for Model: <strong>{cooler.modelNumber}</strong>
                </p>
              </div>

              {/* Print / Download Spec Sheet Button */}
              <button
                onClick={handlePrintSpecs}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--primary)',
                  color: 'var(--primary)',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-print" />
                Print / Save Spec Sheet
              </button>
            </div>

            {/* Spec Table */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 25px rgba(0,0,0,0.06)',
              border: '1px solid #e2e8f0'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <tbody>
                  {Object.entries(cooler.specsSheet).map(([key, val], idx) => (
                    <tr
                      key={key}
                      style={{
                        background: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                        borderBottom: '1px solid #e2e8f0'
                      }}
                    >
                      <td style={{
                        padding: '14px 24px',
                        fontWeight: 600,
                        color: '#334155',
                        width: '35%',
                        borderRight: '1px solid #e2e8f0'
                      }}>
                        {key}
                      </td>
                      <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                        {val}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      Body Material
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.bodyMaterial}
                    </td>
                  </tr>
                  <tr style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      Available Colours
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.availableColors}
                    </td>
                  </tr>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      Dimensions (L x W x H)
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {cooler.dimensions}
                    </td>
                  </tr>
                  <tr style={{ background: '#ffffff' }}>
                    <td style={{ padding: '14px 24px', fontWeight: 600, color: '#334155', borderRight: '1px solid #e2e8f0' }}>
                      Factory Contact & WhatsApp
                    </td>
                    <td style={{ padding: '14px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      +91 {factoryDetails.phone} (WhatsApp Enabled) | {factoryDetails.email}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features Section */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '20px' }}>
              Key Features & Engineering Highlights
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '18px'
            }}>
              {cooler.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    padding: '18px 20px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(192,19,42,0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <i className="fas fa-check" style={{ fontSize: '13px' }} />
                  </div>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: 0 }}>
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Coolers in this Category */}
          {relatedCoolers.length > 0 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '25px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                    Other {cooler.categoryName} Models
                  </h2>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    Compare other capacities in this category
                  </p>
                </div>
                <Link to="/all-coolers" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                  View All 14 Coolers →
                </Link>
              </div>

              <div className="product-list-grid">
                {relatedCoolers.map(rc => (
                  <div className="product-card" key={rc.id}>
                    <div className="product-card-img" style={{ background: '#ffffff', height: '220px', padding: '15px' }}>
                      <img src={rc.image} alt={rc.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="product-card-body">
                      <h3>{rc.name}</h3>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '8px' }}>
                        ₹{rc.sellingPrice.toLocaleString('en-IN')}
                      </div>
                      <Link to={`/product/${rc.id}`} className="btn btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: '13px' }}>
                        View Details &amp; Specs
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
