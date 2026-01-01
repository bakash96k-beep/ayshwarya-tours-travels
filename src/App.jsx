export default function App() {
  return (
    <div style={{ fontFamily: 'serif', background: '#FFFDF8', minHeight: '100vh' }}>
      <section style={{ padding: 60, textAlign: 'center' }}>
        <h1 style={{ fontSize: 46, color: '#1E3A8A' }}>
          Ayshwarya Tours & Travels
        </h1>
        <p style={{ color: '#9A7C2F', fontSize: 18 }}>
          Crafting journeys in gold-standard elegance.
        </p>

        <a
          href="https://wa.me/919933216960"
          style={{
            display: 'inline-block',
            marginTop: 20,
            padding: '12px 26px',
            background: '#1E3A8A',
            color: '#F7E7B4',
            borderRadius: 10,
            textDecoration: 'none'
          }}
        >
          WhatsApp Us
        </a>
      </section>

      <section style={{ padding: 40 }}>
        <h2 style={{ textAlign: 'center', color: '#1E3A8A' }}>
          Tour Packages
        </h2>
        <p style={{ textAlign: 'center' }}>
          Luxury • Family • Honeymoon • Custom Trips
        </p>
      </section>

      <section style={{ padding: 40, background: '#1E3A8A', color: '#F7E7B4' }}>
        <h3 style={{ textAlign: 'center' }}>Visit Us</h3>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=28/1%20AK%20Street%20Anarkali%20Village%20Sri%20Vijaya%20Puram%20Andaman&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
        ></iframe>
      </section>
    </div>
  )
}
