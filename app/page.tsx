import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">BossTribe</h1>
      <p className="mb-8">Welcome to BossTribe</p>
      <Link 
        href="/dashboard" 
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Go to Dashboard
      </Link>
    </main>
  )
}
