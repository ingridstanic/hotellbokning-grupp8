 import Link from "next/link";
 
 export default function GuestSection() {
  return (
    <main 
    id="guests"
    className="min-h-screen border-50 border-[#74645B] bg-[#FFF9F3]">
      <h1 className="font-display text-center text-5xl py-30 text-black">
        Gästlista
      </h1>

    <div className="mx-auto h-px w-[80%] bg-black/30" />

 <div className="flex items-center justify-between px-40 py-8">
  <p className="text-left text-black">
    Namn:
  </p>

  <Link
    href="/guests/${guestId}"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85756B] text-black hover:bg-[#5C4D44]"
  >
    ⋮
  </Link>
</div>

     <div className="mx-auto h-px w-[80%] bg-black/30" />

    <div className="flex items-center justify-between px-40 py-8">
  <p className="text-left text-black">
    Namn:
  </p>

  <Link
    href="/guests/${guestId}"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85756B] text-black hover:bg-[#5C4D44]"
  >
    ⋮
  </Link>
</div>

     <div className="mx-auto h-px w-[80%] bg-black/30" />

    <div className="flex items-center justify-between px-40 py-8">
  <p className="text-left text-black">
    Namn:
  </p>

  <Link
    href="/guests/${guestId}"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85756B] text-black hover:bg-[#5C4D44]"
  >
    ⋮
  </Link>
</div>

    </main>
  );
}
