import Image from "next/image";

export default async function GuestProfilePage({
  params,
}: {
  params: Promise<{ guestId: string }>;
}) {
  const { guestId } = await params;

  return (
    <main className="min-h-screen bg-[#FFF9F3]">
      <h1 className="font-display text-center text-5xl pt-10 text-black">
        Gästprofil
      </h1>

      <p className="text-center text-black">
        Gäst: {guestId}
      </p>

      <Image
      src="/images/hotell.png"
      alt="Hotell"
      width={400}
      height={400}
    />

     <p className="text-right text-2xl pr-40 py-10 text-black">
        Namn: {guestId}
    </p>

    <div className="mx-auto h-px w-[80%] bg-black/30" />

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

    </main>
  );
}