import BookingForm from "../components/BookingForm/BookingForm";

export default function BookingSection() {
  return (
    <section id="booking" className="min-h-screen bg-[#FFF9F3]">
      <h2 className="font-display text-center text-5xl text-black">Boka</h2>

      <BookingForm />
    </section>
  );
}
