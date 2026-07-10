'use client'

import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) router.push('/')
      else setLoading(false)
    }
    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) return <p>Loading...</p>

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to Bossttribe Dashboard</h1>
      <p>You are logged in ✅</p>
      <button onClick={handleLogout} style={{background: 'red', color: 'white', padding: '10px 20px'}}>
        Logout
      </button>
    </div>
  )
}
