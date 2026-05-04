import { getAppointments, addAppointment } from "@/lib/db"

// GET → récupérer les rendez-vous
export async function GET() {
  return Response.json(getAppointments())
}

// POST → ajouter un rendez-vous
export async function POST(req) {
  const body = await req.json()

  if (!body.name || !body.date || !body.time) {
    return Response.json(
      { error: "Champs manquants" },
      { status: 400 }
    )
  }

  const newAppointment = addAppointment(body)

  return Response.json(newAppointment)
}