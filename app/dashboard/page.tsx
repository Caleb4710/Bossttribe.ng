export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl font-bold">Bossttribe Dashboard</h1>
      <p className="mt-4 text-lg">This is where the magic happens 🚀</p>
      
      <a 
        href="/" 
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded-lg"
      >
        Logout
      </a>
    </main>
  )
}
