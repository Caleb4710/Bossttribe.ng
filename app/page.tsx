export default function Home() {
  return (
    <main style={{fontFamily: 'system-ui', padding: '40px 20px', textAlign: 'center', minHeight: '100vh', background: '#f9f9f9'}}>
      <h1 style={{fontSize: '48px', marginBottom: '10px', color: '#000'}}>Bossttribe.ng 🚀</h1>
      <p style={{fontSize: '20px', color: '#555', marginBottom: '30px'}}>
        Grow your business. Connect with bosses. Scale together.
      </p>
      
      <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/signup" style={{padding: '14px 28px', background: '#000', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
          Join the Tribe
        </a>
        <a href="/login" style={{padding: '14px 28px', border: '2px solid #000', color: '#000', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
          Login
        </a>
      </div>

      <footer style={{marginTop: '60px', color: '#888', fontSize: '14px'}}>
        © 2026 Bossttribe.ng - Built for African Entrepreneurs
      </footer>
    </main>
  )
}
