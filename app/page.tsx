'use client'

import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabaseUrl = 'https://muntmcbxqaarvkaucdwu.supabase.co'
const supabaseAnonKey = 'sb_publishable_8Wu5QaOl1k4Mp8IyghVhtw_vubHT93v'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log('Logout error:', error)
      alert('Logout failed: ' + error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900">Bossttribe Dashboard</h1>
      <p className="mt-4 text-lg text-gray-600">You are logged in 🚀</p>
      
      <button 
        onClick={handleLogout}
        className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </main>
  )
}
