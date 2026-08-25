import BookingForm from "../components/BookingForm/BookingForm";

export default function Booking() {
  return (
    <section className=" min-h-screen  bg-[#FFF9F3]  mt-[200px]">
      {/* <h2 className="mt-6 text-center  translate-x-[25px] text-4xl">Boka</h2>*/}

      <div className="flex  items-center justify-center">
        <BookingForm />
      </div>
    </section>
  );
}
