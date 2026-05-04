"use client"
import { useEffect, useState } from "react"

export default function Admin() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch("/api/appointments")
      .then(res => res.json())
      .then(setAppointments)
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>

      <div className="mt-6 space-y-3">
        {appointments.map((a) => (
          <div key={a.id} className="bg-card p-4 rounded-xl shadow">
            <p>{a.name}</p>
            <p className="text-muted">{a.date} - {a.time}</p>
          </div>
        ))}
      </div>
    </main>
  )
}