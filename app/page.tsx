export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Bossttribe</h1>
      <p className="mt-4">Welcome to Bossttribe 🚀</p>
      <a href="/dashboard" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Go to Dashboard
      </a>
    </main>
  )
}
