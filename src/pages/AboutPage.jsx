import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function AboutPage() {
  const { isHindi, t, getLocalizedPath } = useLanguage()

  return (
    <>
      <PageBanner
        title={isHindi ? 'हमारे बारे में' : 'About Us'}
        breadcrumb={[{ label: isHindi ? 'होम' : 'Home', path: '/' }, { label: isHindi ? 'हमारे बारे में' : 'About Us' }]}
      />

      {/* Main Company Profile Section */}
      <section className="section">
        <div className="container">
          <div className="about-full-grid" style={{ alignItems: 'flex-start', gap: '40px' }}>
            <div className="about-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(192, 19, 42, 0.1)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '20px', fontWeight: 700, fontSize: '13px', marginBottom: '14px' }}>
                <i className="fas fa-certificate" />
                {isHindi ? 'जोधपुर का विश्वसनीय एयर कूलर निर्माता एवं थोक विक्रेता' : 'Trusted Cooler Manufacturer & Wholesaler in Jodhpur'}
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px', lineHeight: '1.25' }}>
                KK Cooler <span style={{ color: 'var(--primary)' }}>({isHindi ? 'के.के. एंटरप्राइजेज' : 'K.K. Enterprises'})</span>
              </h2>

              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155', marginBottom: '18px', fontWeight: 500 }}>
                {isHindi ? (
                  <><strong>के.के. कूलर (व्यावसायिक नाम: के.के. एंटरप्राइजेज)</strong> जोधपुर, राजस्थान में स्थित एयर कूलर निर्माण, थोक (होलसेल) और खुदरा (रिटेल) व्यापार का एक प्रमुख व प्रतिष्ठित संस्थान है। पश्चिमी राजस्थान के कूलिंग मार्केट में अपनी विशेष पहचान के साथ, यह संस्थान स्वयं हैवी-ड्यूटी कूलर निर्माता होने के साथ-साथ राष्ट्रीय ब्रांड्स का अधिकृत वितरक भी है।</>
                ) : (
                  <><strong>KK Cooler (operating commercially as K.K. Enterprises)</strong> is a prominent air cooler manufacturing, wholesaling, and retail business located in Jodhpur, Rajasthan. Known as a key player in Western Rajasthan’s cooling market, the enterprise operates both as an in-house manufacturer and a bulk distributor for national brands.</>
                )}
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
                  {isHindi ? 'कंपनी अवलोकन एवं व्यापार पृष्ठभूमि' : 'Overview & Business Background'}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {isHindi ? 'प्रोप्राइटर' : 'Proprietor'}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>
                      <i className="fas fa-user-tie" style={{ marginRight: '6px' }} />
                      {isHindi ? 'श्री कमल अरोड़ा' : 'Mr. Kamal Arora'}
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {isHindi ? 'बिजनेस मॉडल' : 'Business Model'}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginTop: '4px' }}>
                      {isHindi ? 'प्रत्यक्ष निर्माता, B2B थोक व्यापारी, रिटेलर एवं अधिकृत वितरक' : 'Direct Manufacturer, B2B Wholesaler, Retailer & Authorized Distributor'}
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {isHindi ? 'बाजार में स्थिति' : 'Market Position'}
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', marginTop: '4px' }}>
                      {isHindi ? 'जोधपुर के आवासीय परिवारों और राजस्थान भर के व्यापारिक ग्राहकों को आपूर्ति।' : 'Serves both residential consumers in Jodhpur and commercial clients/retailers across Rajasthan.'}
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', padding: '14px 18px', borderRadius: '8px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {isHindi ? 'मुख्य विशेषज्ञता' : 'Primary Expertise'}
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', marginTop: '4px' }}>
                      {isHindi ? 'राजस्थान की अत्यधिक गर्म और शुष्क गर्मी को मात देने के लिए विशेष रूप से निर्मित हैवी-ड्यूटी कूलर्स।' : 'Heavy-duty cooling solutions custom-engineered to withstand Rajasthan’s intense dry summer heat.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission / Vision Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '25px' }}>
                <div className="mission-card" style={{ margin: 0 }}>
                  <h4><i className="fas fa-bullseye" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> {isHindi ? 'हमारा मिशन' : 'Our Mission'}</h4>
                  <p>{isHindi ? 'बिना बिचौलियों के, सीधे फैक्ट्री फ्लोर से उच्च गुणवत्ता, मजबूत बॉडी और कम बिजली खपत वाले कूलर्स न्यूनतम दरों पर उपलब्ध कराना।' : 'To provide heavy-duty, high-capacity, and energy-efficient desert coolers directly from our factory floor to homes and industries across Rajasthan without middleman costs.'}</p>
                </div>
                <div className="mission-card" style={{ margin: 0 }}>
                  <h4><i className="fas fa-eye" style={{ color: 'var(--accent)', marginRight: '8px' }}></i> {isHindi ? 'हमारा विज़न' : 'Our Vision'}</h4>
                  <p>{isHindi ? 'पश्चिमी राजस्थान में कस्टम एयर कूलिंग निर्माण, ब्रांडेड डिस्ट्रीब्यूशन और थोक विश्वसनीयता में निर्विवाद अग्रणी बने रहना।' : "To remain Western Rajasthan's undisputed leader in custom air cooling engineering, branded distribution, and wholesale reliability."}</p>
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
                  {isHindi ? 'के.के. एंटरप्राइजेज • जोधपुर' : 'K.K. Enterprises • Jodhpur'}
                </p>
                <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                  {isHindi ? 'प्रोप्राइटर:' : 'Proprietor:'} <strong>{isHindi ? 'श्री कमल अरोड़ा' : 'Mr. Kamal Arora'}</strong><br />
                  {isHindi ? 'कूलर निर्माण, थोक एवं खुदरा सप्लाय' : 'Manufacturing, Wholesaling & Retail Supply'}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '25px' }}>
                {[
                  { num: '10+', label: isHindi ? 'वर्षों का अनुभव' : 'Years in Jodhpur' },
                  { num: '50K+', label: isHindi ? 'संतुष्ट ग्राहक' : 'Coolers Supplied' },
                  { num: '100%', label: isHindi ? 'कॉपर मोटर्स' : 'Copper Motors' },
                  { num: '14+', label: isHindi ? 'कूलर मॉडल्स' : 'Proprietary Models' },
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
                  {isHindi ? 'सीधा फैक्ट्री संपर्क एवं थोक पूछताछ' : 'Direct Factory Enquiries & Bulk Orders'}
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
                  {isHindi ? 'कमल अरोड़ा जी से व्हाट्सएप पर बात करें' : 'Chat with Kamal Arora on WhatsApp'}
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
            <h2>{isHindi ? 'हमारा उत्पाद पोर्टफोलियो' : 'Our Product Portfolio'}</h2>
            <p>{isHindi ? 'स्वयं निर्मित हैवी-ड्यूटी डेजर्ट कूलर्स से लेकर राष्ट्रीय ब्रांड्स के अधिकृत डिस्ट्रीब्यूशन और असली स्पेयर पार्ट्स तक।' : 'From custom in-house manufactured heavy-duty sheet-metal coolers to authorized national brand distribution and genuine spare parts.'}</p>
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
                  <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {isHindi ? 'श्रेणी 01' : 'Category 01'}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                    {isHindi ? 'इन-हाउस निर्मित कूलर्स' : 'In-House Manufactured Coolers'}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                {isHindi ? 'हमारी जोधपुर फैक्ट्री में राजस्थान की भीषण गर्मी के अनुसार विशेष रूप से निर्मित:' : 'Manufactured at our Jodhpur facility with rugged design and extreme Rajasthan-grade thermal efficiency:'}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'डेजर्ट एयर कूलर्स:' : 'Desert Air Coolers:'}</strong> {isHindi ? 'मजबूत शीट मेटल और जीआई बॉडी, तेज थ्रो वाले एग्जॉस्ट पंखे और 50L से 120L+ तक विशाल वाटर टैंक।' : 'Heavy-duty sheet-metal and galvanized iron body coolers equipped with high-throw exhaust fans and high tank capacity (50L to 120L+).'}
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'प्लास्टिक एवं फाइबर कूलर्स:' : 'Plastic & Fiber Air Coolers:'}</strong> {isHindi ? 'हल्के, जंग-रोधी और आकर्षक मॉडल, बेडरूम और इनडोर लिविंग स्पेस हेतु सर्वोत्तम।' : 'Lightweight, rust-proof, aesthetic units for indoor living rooms and bedrooms.'}
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'स्लिम टावर कूलर्स:' : 'Slim Tower Coolers:'}</strong> {isHindi ? 'कम जगह घेरने वाले, आधुनिक डिजाइन और ऊपर तक शक्तिशाली ठंडी हवा देने वाले।' : 'Compact, space-saving vertical designs ideal for smaller apartments or commercial counters.'}
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'डायनेमिक इंडस्ट्रियल कूलर्स:' : 'Dynamic Industrial Coolers:'}</strong> {isHindi ? 'विशाल हॉल्स, वर्कशॉप्स, मैरिज गार्डन्स और कारखानों के लिए अल्ट्रा-हाई CFM कूलर्स।' : 'High-CFM units built for large spaces such as workshops, marriage halls, open dining spaces, and factories.'}
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
                  <div style={{ fontSize: '11px', color: '#1a1a2e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {isHindi ? 'श्रेणी 02' : 'Category 02'}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                    {isHindi ? 'ब्रांडेड एयर कूलर्स (वितरण एवं खुदरा)' : 'Branded Air Coolers (Distribution & Retail)'}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                {isHindi ? 'के.के. कूलर राष्ट्रीय स्तर के प्रमुख ब्रांड्स का अधिकृत थोक स्टॉकिस्ट व सप्लायर है:' : 'KK Cooler acts as an authorized dealer, bulk stockist, and supplier for popular national air cooler brands:'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#334155' }}>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Symphony:</strong> Diet, Siesta, Jumbo, Sumo &amp; Storm series.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Bajaj:</strong> Icon &amp; PX series.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>Crompton:</strong> Marvel Neo, Mystique Turbo &amp; Ozone.
                </div>
                <div style={{ background: '#f8fafc', padding: '12px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ color: 'var(--primary)' }}>{isHindi ? 'अन्य प्रमुख ब्रांड्स:' : 'Other National Brands:'}</strong> Usha, Havells &amp; Khaitan.
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
                  <div style={{ fontSize: '11px', color: '#0284c7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {isHindi ? 'श्रेणी 03' : 'Category 03'}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                    {isHindi ? 'स्पेयर पार्ट्स एवं कलपुर्जे' : 'Spare Parts & Components'}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                {isHindi ? 'वर्कशॉप्स, रिपेयर तकनीशियनों और खुदरा विक्रेताओं के लिए असली स्पेयर पार्ट्स:' : 'Complete inventory of genuine cooler replacement parts for workshops, repair technicians, and retailers:'}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-snowflake" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'कूलिंग मीडिया:' : 'Cooling Media:'}</strong> {isHindi ? 'उच्च घनत्व हनीकॉम्ब पैड्स और शुद्ध वुड-वूल घास पैड्स।' : 'High-density honeycomb pads and wood-wool pads.'}
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-bolt" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'इलेक्ट्रिकल्स:' : 'Electricals:'}</strong> {isHindi ? 'सबमर्सिबल वाटर पंप, 100% कॉपर वाइंडिंग मोटर्स और हेवी-ड्यूटी पंखे ब्लेड्स।' : 'Submersible water pumps, heavy-duty copper-winding motors, and exhaust fan blades.'}
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <i className="fas fa-shield-halved" style={{ color: '#0284c7', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong>{isHindi ? 'बॉडी पार्ट्स:' : 'Replacement Bodies:'}</strong> {isHindi ? 'मॉड्यूलर प्लास्टिक एवं शीट मेटल बाहरी बॉडी।' : 'Modular plastic and metal cooler outer shells.'}
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
            <h2>{isHindi ? 'हमारी प्रमुख विशेषताएं और लाभ' : 'Key Advantages & Capabilities'}</h2>
            <p>{isHindi ? 'राजस्थान भर के ग्राहक, व्यापारी और इवेंट प्लानर्स के.के. कूलर (के.के. एंटरप्राइजेज) पर क्यों भरोसा करते हैं।' : 'Why customers, event planners, and dealers across Rajasthan choose KK Cooler (K.K. Enterprises).'}</p>
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
                {isHindi ? 'सीधा निर्माता भाव' : 'Direct Manufacturer Rates'}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                {isHindi ? 'फैक्ट्री से सीधे खरीद पर बिचौलियों का मार्जिन पूरी तरह समाप्त, जिससे ग्राहकों और डीलरों को सबसे कम दाम मिलते हैं।' : 'Buying directly from the manufacturing unit eliminates middleman markups for local customers and small business owners in Jodhpur.'}
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
                {isHindi ? 'कस्टमाइजेशन सुविधा' : 'Customization'}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                {isHindi ? 'ग्राहक की आवश्यकता अनुसार कूलर बॉडी मोटाई, पंखा साइज, पानी टंकी क्षमता और मोटर एचपी कस्टमाइज करने की पूरी सुविधा।' : 'Ability to customize cooler body thickness, fan size, tank capacity, and motor horsepower according to customer specifications and special site needs.'}
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
                {isHindi ? 'बल्क B2B थोक वितरण' : 'Bulk B2B Distribution'}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                {isHindi ? 'टेंट हाउस, मैरिज गार्डन, होटल्स, इवेंट्स और सब-डीलरों के लिए बड़े ऑर्डर्स की त्वरित सप्लाय।' : 'Equipped to fulfill bulk orders for event rentals, tent houses, hotels, marriage gardens, and sub-dealers across Rajasthan with expedited delivery.'}
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
                  <i className="fas fa-location-dot" /> {isHindi ? 'ऑफिशियल स्टोर एवं फैक्ट्री लोकेशन' : 'Official Store & Factory Location'}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '14px' }}>
                  {isHindi ? 'जोधपुर में हमारे स्टोर व निर्माण केंद्र पर पधारें' : 'Visit Our Store & Works in Jodhpur'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#334155' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>{isHindi ? 'पता:' : 'Address:'}</strong><br />
                      Plot No. 168 / Plot No. 19, Ambika Nagar / Aditya Nagar, Near Dali Bai Circle (Dali Bai Mandir), Masuria / Bhadu Market, Jodhpur, Rajasthan – 342001
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-compass" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>{isHindi ? 'लैंडमार्क:' : 'Landmark:'}</strong> {isHindi ? 'डाली बाई सर्किल / डाली बाई चौराहा के समीप' : 'Close to Dali Bai Circle / Dalibai Chouraha'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>{isHindi ? 'समय:' : 'Operating Hours:'}</strong> {isHindi ? 'प्रतिदिन सुबह 10:00 से शाम 6:00 / 7:00 बजे तक' : 'Open daily from 10:00 AM to 6:00 PM / 7:00 PM'}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fas fa-user-tie" style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '3px' }} />
                    <div>
                      <strong>{isHindi ? 'प्रोप्राइटर:' : 'Proprietor:'}</strong> {isHindi ? 'श्री कमल अरोड़ा' : 'Mr. Kamal Arora'}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '25px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>
                  {isHindi ? 'सीधा संपर्क एवं तत्काल पूछताछ' : 'Direct Contact & Instant Enquiry'}
                </h4>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                  {isHindi ? 'फैक्ट्री रेट, थोक B2B कोटेशन या डीलरशिप के लिए सीधे फोन या व्हाट्सएप करें।' : 'Call or WhatsApp directly for factory rates, bulk B2B quotations, or dealership queries.'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="https://wa.me/919351359518?text=Hello%20Mr.%20Kamal%20Arora%20(KK%20Cooler),%20I%20want%20to%20enquire%20about%20coolers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      background: '#25D366',
                      borderColor: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      fontSize: '14px'
                    }}
                  >
                    <i className="fab fa-whatsapp" style={{ fontSize: '18px' }} />
                    {isHindi ? 'व्हाट्सएप चैट (+91 9351359518)' : 'WhatsApp Chat (+91 9351359518)'}
                  </a>

                  <a
                    href="tel:9351359518"
                    className="btn btn-outline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      fontSize: '14px'
                    }}
                  >
                    <i className="fas fa-phone-alt" />
                    {isHindi ? 'फोन कॉल करें (+91 9351359518)' : 'Call Phone (+91 9351359518)'}
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
          <h2>{isHindi ? 'क्या आप थोक या खुदरा कूलर खरीदना चाहते हैं?' : 'Looking for Wholesale or Retail Air Coolers?'}</h2>
          <p>{isHindi ? 'जोधपुर की सर्वश्रेष्ठ फैक्ट्री से सीधे न्यूनतम दामों पर प्राप्त करें।' : 'Connect directly with K.K. Enterprises Jodhpur for fastest quotes and dispatch.'}</p>
          <div className="cta-buttons">
            <Link to={getLocalizedPath('/all-coolers')} className="btn btn-outline">
              {isHindi ? 'सभी कूलर्स देखें' : 'View All Coolers'}
            </Link>
            <Link to={getLocalizedPath('/contact-us')} className="btn btn-primary">
              {isHindi ? 'संपर्क करें' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
