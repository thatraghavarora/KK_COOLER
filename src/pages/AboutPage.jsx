import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      {/* Main Company Profile Section */}
      <section className="section">
        <div className="container">
          <div className="about-full-grid" style={{ alignItems: 'flex-start', gap: '40px' }}>
            <div className="about-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(192, 19, 42, 0.1)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '20px', fontWeight: 700, fontSize: '13px', marginBottom: '14px' }}>
                <i className="fas fa-certificate" />
                Trusted Cooler Manufacturer & Wholesaler in Jodhpur
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px', lineHeight: '1.25' }}>
                KK Cooler <span style={{ color: 'var(--primary)' }}>(K.K. Enterprises)</span>
              </h2>

              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155', marginBottom: '18px', fontWeight: 500 }}>
                <strong>KK Cooler (operating commercially as K.K. Enterprises)</strong> is a prominent air cooler manufacturing, wholesaling, and retail business located in Jodhpur, Rajasthan. Known as a key player in Western Rajasthan’s cooling market, the enterprise operates both as an in-house manufacturer and a bulk distributor for national brands.
              </p>

              {/* Overview & Business Background Box */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderLeft: '5px solid var(--primary)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-briefcase" style={{ color: 'var(--primary)' }} />
                  Overview &amp; Business Background
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>Proprietor</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>
                      <i className="fas fa-user-tie" style={{ marginRight: '6px' }} />
                      Mr. Kamal Arora
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>Business Model</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginTop: '4px' }}>
                      Direct Manufacturer, B2B Wholesaler, Retailer &amp; Authorized Distributor
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>Market Position</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', marginTop: '4px' }}>
                      Serves both residential consumers in Jodhpur and commercial clients/retailers across Rajasthan.
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>Primary Expertise</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', marginTop: '4px' }}>
                      Heavy-duty cooling solutions custom-engineered to withstand Rajasthan’s intense dry summer heat.
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission / Vision Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '25px' }}>
                <div className="mission-card" style={{ margin: 0 }}>
                  <h4><i className="fas fa-bullseye" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> Our Mission</h4>
                  <p>To provide heavy-duty, high-capacity, and energy-efficient desert coolers directly from our factory floor to homes and industries across Rajasthan without middleman costs.</p>
                </div>
                <div className="mission-card" style={{ margin: 0 }}>
                  <h4><i className="fas fa-eye" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> Our Vision</h4>
                  <p>To remain Western Rajasthan's undisputed leader in custom air cooling engineering, branded distribution, and wholesale reliability.</p>
                </div>
              </div>
            </div>

            {/* Right Column Highlights & Stats */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                borderRadius: '16px',
                padding: '35px 30px',
                color: 'white',
                marginBottom: '25px',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(26, 26, 46, 0.25)'
              }}>
                <div style={{ fontSize: '50px', marginBottom: '12px' }}>❄️</div>
                <h3 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px' }}>KK COOLER</h3>
                <p style={{ color: '#fca5a5', fontSize: '13px', letterSpacing: '1.5px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '15px' }}>
                  K.K. Enterprises • Jodhpur
                </p>
                <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                  Proprietor: <strong>Mr. Kamal Arora</strong><br />
                  Manufacturing, Wholesaling &amp; Retail Supply
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '25px' }}>
                {[
                  { num: '10+', label: 'Years in Jodhpur' },
                  { num: '50K+', label: 'Coolers Supplied' },
                  { num: '100%', label: 'Copper Motors' },
                  { num: '14+', label: 'Proprietary Models' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: i % 2 === 0 ? 'var(--primary)' : '#1a1a2e',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '20px 15px',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                  }}>
                    <div style={{ fontSize: '1.7rem', fontWeight: 900, fontFamily: 'Rubik, sans-serif' }}>{s.num}</div>
                    <div style={{ fontSize: '11px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '4px', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Direct Enquiry Box */}
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #86efac',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>
                  Direct Factory Enquiries &amp; Bulk Orders
                </div>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#15803d', marginBottom: '12px' }}>
                  +91 9351359518
                </div>
                <a
                  href="https://wa.me/919351359518?text=Hello%20Mr.%20Kamal%20Arora%20(KK%20Cooler),%20I%20want%20to%20enquire%20about%20coolers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '13px',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ fontSize: '17px' }} />
                  Chat with Kamal Arora on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className="section section-alt" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Product Portfolio</h2>
            <p>From custom in-house manufactured heavy-duty sheet-metal coolers to authorized national brand distribution and genuine spare parts.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginBottom: '40px' }}>
            {/* 1. In-House Manufactured Coolers */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px 25px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              borderTop: '4px solid var(--primary)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(192, 19, 42, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fas fa-industry" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category 01</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>In-House Manufactured Coolers</h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                Manufactured at our Jodhpur facility with rugged design and extreme Rajasthan-grade thermal efficiency:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Desert Air Coolers:</strong> Heavy-duty sheet-metal and galvanized iron body coolers equipped with high-throw exhaust fans and high tank capacity (50L to 120L+).
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Plastic &amp; Fiber Air Coolers:</strong> Lightweight, rust-proof, aesthetic units for indoor living rooms and bedrooms.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Slim Tower Coolers:</strong> Compact, space-saving vertical designs ideal for smaller apartments or commercial counters.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Dynamic Industrial Coolers:</strong> High-CFM units built for large spaces such as workshops, marriage halls, open dining spaces, and factories.
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Branded Air Coolers */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px 25px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              borderTop: '4px solid #1a1a2e',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(26, 26, 46, 0.1)', color: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fas fa-tags" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#1a1a2e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category 02</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>Branded Air Coolers (Distribution &amp; Retail)</h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                KK Cooler acts as an authorized dealer, bulk stockist, and supplier for popular national air cooler brands:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#334155' }}>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Symphony:</strong> Diet, Siesta, Jumbo, Sumo, and Storm series.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Bajaj:</strong> Icon and PX series.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Crompton:</strong> Marvel Neo, Mystique Turbo, and Ozone.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Other National Brands:</strong> Usha, Havells, &amp; Khaitan.
                </div>
              </div>
            </div>

            {/* 3. Spare Parts & Components */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px 25px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              borderTop: '4px solid #0284c7',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className="fas fa-cogs" />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#0284c7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category 03</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>Spare Parts &amp; Components</h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                Complete inventory of genuine cooler replacement parts for workshops, repair technicians, and retailers:
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-snowflake" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Cooling Media:</strong> High-density honeycomb pads and wood-wool pads.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-bolt" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Electricals:</strong> Submersible water pumps, heavy-duty copper-winding motors, and exhaust fan blades.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-shield-halved" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>Replacement Bodies:</strong> Modular plastic and metal cooler outer shells.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages & Capabilities Section */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>Key Advantages &amp; Capabilities</h2>
            <p>Why customers, event planners, and dealers across Rajasthan choose KK Cooler (K.K. Enterprises).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '28px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(192, 19, 42, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>
                <i className="fas fa-hand-holding-dollar" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: 'var(--dark)' }}>
                Direct Manufacturer Rates
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                Buying directly from the manufacturing unit eliminates middleman markups for local customers and small business owners in Jodhpur.
              </p>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '28px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>
                <i className="fas fa-sliders" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: 'var(--dark)' }}>
                Customization
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                Ability to customize cooler body thickness, fan size, tank capacity, and motor horsepower according to customer specifications and special site needs.
              </p>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '28px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s'
            }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>
                <i className="fas fa-truck-ramp-box" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px', color: 'var(--dark)' }}>
                Bulk B2B Distribution
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                Equipped to fulfill bulk orders for event rentals, tent houses, hotels, marriage gardens, and sub-dealers across Rajasthan with expedited delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store & Factory Location Card */}
      <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="container">
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '35px 30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(192, 19, 42, 0.1)', color: 'var(--primary)', padding: '5px 14px', borderRadius: '20px', fontWeight: 700, fontSize: '12px', marginBottom: '12px' }}>
                  <i className="fas fa-location-dot" /> Official Store &amp; Factory Location
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '14px' }}>
                  Visit Our Store &amp; Works in Jodhpur
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#334155' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>Address:</strong><br />
                      Plot No. 168 / Plot No. 19, Ambika Nagar / Aditya Nagar, Near Dali Bai Circle (Dali Bai Mandir), Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-compass" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>Landmark:</strong> Close to Dali Bai Circle / Dalibai Chouraha
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>Operating Hours:</strong> Open daily from 10:00 AM to 6:00 PM / 7:00 PM
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-user-tie" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>Proprietor:</strong> Mr. Kamal Arora
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '25px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>
                  Direct Contact &amp; Instant Enquiry
                </h4>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                  Call or WhatsApp directly for factory rates, bulk B2B quotations, or dealership queries.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="https://wa.me/919351359518?text=Hello%20Mr.%20Kamal%20Arora,%20I%20want%20to%20enquire%20about%20KK%20Coolers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: '#25D366',
                      color: '#ffffff',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '20px' }} />
                    WhatsApp Enquiry: +91 9351359518
                  </a>

                  <a
                    href="tel:9351359518"
                    className="btn btn-primary"
                    style={{
                      padding: '12px 20px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <i className="fas fa-phone-alt" />
                    Call Us: 9351359518
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Looking for Factory-Direct Coolers or Bulk Supply?</h2>
          <p>Contact Mr. Kamal Arora today for wholesale pricing, custom cooler fabrication, and dealership opportunities.</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20send%20an%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
              Send WhatsApp Enquiry
            </a>
            <Link to="/all-coolers" className="btn" style={{ background: 'white', color: '#c0132a', fontWeight: 700 }}>
              Browse All Coolers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
