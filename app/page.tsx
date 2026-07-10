"use client"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const supabase = createClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Bossttribe Dashboard</h1>
      <p className="mt-4">This is where the magic happens 🚀</p>
      
      <button 
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
      >
        Logout
      </button>
    </div>
  )
}
