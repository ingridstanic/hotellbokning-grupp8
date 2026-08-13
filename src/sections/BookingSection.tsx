import Link from "next/link";

export default function BookingSection() {
  return (
    <section className="min-h-screen bg-[#FFF9F3]">
      <h2 className="font-display text-center text-5xl text-black">
        Boka
      </h2>
      <div className="mt-8 flex justify-center">
        <Link href="/guests/${guestId}" className="rounded bg-[#74645B] px-4 py-2 text-black hover:bg-[#5C4D44]">
          Registrera ny gäst
        </Link>
      </div>
    </section>
  );
}