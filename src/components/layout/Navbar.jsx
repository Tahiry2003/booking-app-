import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-primary">BookingApp</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  )
}