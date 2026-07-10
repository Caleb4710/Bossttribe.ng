'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log('Logout error:', error)
      alert('Logout failed: ' + error.message)
    } else {
      router.push('/')
      router.refresh()
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
