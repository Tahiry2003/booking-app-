import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-secondary">
        Booking App
      </h1>

      <p className="text-muted mt-3">
        Réservez votre rendez-vous en ligne facilement
      </p>

      <Link
        href="/booking"
        className="mt-6 bg-primary text-white px-6 py-3 rounded-xl"
      >
        Réserver
      </Link>
    </main>
  )
}