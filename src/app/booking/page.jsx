import BookingForm from "@/components/booking/BookingForm"

export default function BookingPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-secondary">
        Prise de rendez-vous
      </h2>

      <BookingForm />
    </main>
  )
}