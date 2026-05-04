let appointments = []

export function getAppointments() {
  return appointments
}

export function addAppointment(data) {
  const newAppointment = {
    id: Date.now(),
    ...data,
  }

  appointments.push(newAppointment)
  return newAppointment
}