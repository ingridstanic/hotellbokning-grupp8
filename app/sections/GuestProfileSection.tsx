import Image from "next/image";
import { fetchCustomers } from "../components/BookingForm/serverForm";

type GuestProfileSectionProps = {
    guestId: string;
}

export default async function GuestProfile({ guestId }: GuestProfileSectionProps) {

const customers = await fetchCustomers();

const customer = customers.find(
  (customer) => customer.id === guestId
);

    return (
        <main className="min-h-screen bg-[#FFF9F3]">
            <h1 className="font-display text-center text-5xl pt-50 text-black">
                Gästprofil
            </h1>
            <div className="absolute left-20 top-35">
                <Image
                    src="/images/hotell.png"
                    alt="Hotell"
                    width={200}
                    height={200}
                />
            </div>
            <div className="mx-auto h-px mt-20 w-[80%] bg-black/30" />

            <div className="flex justify-end pr-40 pt-10">
                <button className="rounded-md border border-black px-7 py-3 text-black">
                    Spara
                </button>
            </div>

            <p className="text-left text-black py-5 pl-40">
                <span className="font-bold">Förnamn:</span> {customer?.firstName}
            </p>

            <p className="text-left text-black py-5 pl-40">
                <span className="font-bold">Efternamn:</span> {customer?.lastName}
            </p>

            <p className="text-left text-black py-5 pl-40">
                <span className="font-bold">Email:</span> {customer?.email}
            </p>

            <p className="text-left text-black text-2xl py-2 pt-10 pl-40">
                Bokningar
            </p>

            <div className="mx-auto h-px w-[80%] bg-black/30" />

            <div className="mx-auto flex w-[80%] items-center justify-between pt-10 py-20">
                <div>
                    <p>Check in:</p>
                    <p>2026-08-12</p>
                </div>

                <div>
                    <p>Check out:</p>
                    <p>2026-08-14</p>
                </div>

                <div>
                    <p>Antal gäster:</p>
                    <p>2</p>
                </div>

                <button className="rounded-md border border-black px-5 py-2">
                    Ändra
                </button>

                <button className="rounded-md border border-black px-5 py-2">
                    Avboka
                </button>

                <button className="rounded-md border border-black px-5 py-2">
                    Check In
                </button>
            </div>
        </main>
    );
}