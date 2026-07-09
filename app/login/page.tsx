export default function Login() {
  return (
    <main style={{fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f9f9f9'}}>
      <h1 style={{fontSize: '36px', marginBottom: '10px'}}>Welcome Back 👋</h1>
      <p style={{color: '#666', marginBottom: '30px'}}>Login to Bossttribe</p>
      
      <form style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '300px'}}>
        <input type="email" placeholder="Email" style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}}/>
        <input type="password" placeholder="Password" style={{padding: '12px', borderRadius: '8px', border: '1px solid #ddd'}}/>
        <button type="button" style={{padding: '12px', background: '#000', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold'}}>
          Login
        </button>
      </form>

      <a href="/" style={{marginTop: '20px', color: '#000'}}>← Back Home</a>
    </main>
  )
}
