export default function Home() {
  return (
    <main style={{ 
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Bossttribe v2.8 🚀
      </h1>
      
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Welcome to Bossttribe. Build. Grow. Win together.
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '2rem',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2>What’s new in v2.8</h2>
        <ul style={{ textAlign: 'left', lineHeight: '2' }}>
          <li>✅ Faster deployment</li>
          <li>✅ Clean UI</li>
          <li>✅ Mobile responsive</li>
        </ul>
      </div>

      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        borderRadius: '12px',
        border: 'none',
        background: 'white',
        color: '#667eea',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Join the Tribe
      </button>

    </main>
  )
}
