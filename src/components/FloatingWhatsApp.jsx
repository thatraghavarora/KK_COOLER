export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919351359518?text=Hello%20KK%20COOLER%20JODHPUR,%20I%20want%20to%20enquire%20about%20coolers"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="floating-whatsapp-btn"
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        zIndex: 9999,
        background: '#25D366',
        color: '#ffffff',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.5)',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.65)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)'
      }}
      title="Direct Factory Enquiry on WhatsApp: +91 9351359518"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}
