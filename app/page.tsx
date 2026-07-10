'use client'

import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-3xl font-bold">Bossttribe Dashboard</h1>
      <p className="mt-4 text-lg">This is where the magic happens 🚀</p>
      
      <button 
        onClick={handleLogout}
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </main>
  )
}
