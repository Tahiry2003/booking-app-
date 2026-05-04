"use client"
import { useState } from "react"

export default function BookingForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submit = async () => {
    await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify(data),
    })

    alert("Rendez-vous confirmé ✔")
  }

  return (
    <div className="bg-card p-6 rounded-xl shadow mt-6">
      <input name="name" onChange={handleChange} placeholder="Nom" className="border p-2 w-full mb-3" />
      <input name="phone" onChange={handleChange} placeholder="Téléphone" className="border p-2 w-full mb-3" />
      <input name="date" type="date" onChange={handleChange} className="border p-2 w-full mb-3" />
      <input name="time" type="time" onChange={handleChange} className="border p-2 w-full mb-3" />

      <button
        onClick={submit}
        className="bg-primary text-white w-full py-3 rounded-xl"
      >
        Confirmer
      </button>
    </div>
  )
}