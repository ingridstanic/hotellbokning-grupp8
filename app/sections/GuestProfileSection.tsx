import Image from "next/image";
import { fetchCustomers } from "../components/BookingForm/fetchCustomers";
import { getBookings } from "../services/getBookings";
import GuestProfileForm from "../components/GuestProfileForm/GuestProfileForm";

type GuestProfileSectionProps = {
  guestId: string;
};

export default async function GuestProfile({
  guestId,
}: GuestProfileSectionProps) {
  const customers = await fetchCustomers();
  const { bookings } = await getBookings();

  const customer = customers.find((customer) => customer.id === guestId);

  if (!customer) {
    return <p>Kunden kunde inte hittas.</p>;
  }

  const customerBookings = bookings.filter(
    (booking) => booking.customerEmail === customer.email,
  );

  return (
    <main className="min-h-screen bg-[#FFF9F3]">
      <h1 className="font-display text-center text-5xl pt-50 text-black">
        Gästprofil
      </h1>
      <div className="absolute left-20 top-35">
        <Image src="/images/hotell.png" alt="Hotell" width={200} height={200} />
      </div>
      <div className="mx-auto h-px mt-20 w-[80%] bg-black/30" />

      <GuestProfileForm bookings={customerBookings} customer={customer} />
    </main>
  );
}
