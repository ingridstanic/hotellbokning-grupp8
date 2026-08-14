import Image from "next/image";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";

export default async function GuestProfilePage({
  params,
}: {
  params: Promise<{ guestId: string }>;
}) {
  const { guestId } = await params;

  return (

    <main className="min-h-screen bg-[#FFF9F3]">
        <Navbar />
      <h1 className="font-display text-center text-5xl pt-50 text-black">
        Gästprofil
      </h1>

      <p className="text-center text-black">
        Gäst: {guestId}
      </p>
<div className="absolute left-20 top-20">
      <Image
      src="/images/hotell.png"
      alt="Hotell"
      width={300}
      height={300}
    />
</div>
     <p className="text-right text-2xl pr-40 py-10 text-black">
        Namn: {guestId}
    </p>

    <div className="mx-auto h-px w-[80%] bg-black/30" />

    <div className="flex justify-end pr-40 pt-10">
      <button className="rounded-md border border-black px-7 py-3 text-black">
        Spara
      </button>
    </div>

     <p className="text-left text-black py-5 pl-40">
        Förnamn: 
    </p>

    <p className="text-left text-black py-5 pl-40">
        Efternamn:
    </p>

    <p className="text-left text-black py-5 pl-40">
        Email:
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
<Footer />
    </main>
  );
}