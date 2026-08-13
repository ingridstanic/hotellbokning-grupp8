import Image from "next/image";

export default function WeatherSection() {
    return (

    <div className="relative h-[600px] w-full overflow-hidden">
  <Image
    src="/images/register.png"
    alt=""
    fill
    className="scale-105 object-cover blur-[1px] opacity-60"
  />

  <div className="absolute inset-0 bg-[#FFF9F3]/20" />

  <div className="relative z-10 flex h-full w-full translate-x-40 flex-col items-center justify-center gap-6">
    <h2 className="font-display text-4xl text-black">
      Registrera gäst
    </h2>
     <form className="flex w-[50%] max-w-2xl flex-col gap-4">
    <input
      type="text"
      placeholder="Förnamn"
      className="rounded-md border border-[#74645B] bg-[#FFF9F3]/90 px-4 py-3 text-black outline-none"
    />

    <input
      type="text"
      placeholder="Efternamn"
      className="rounded-md border border-[#74645B] bg-[#FFF9F3]/90 px-4 py-3 text-black outline-none"
    />

    <input
      type="email"
      placeholder="Mailadress"
      className="rounded-md border border-[#74645B] bg-[#FFF9F3]/90 px-4 py-3 text-black outline-none"
    />

    <button
      type="submit"
      className="mt-2 rounded-md bg-[#85756B] px-6 py-3 text-black transition-colors hover:bg-[#74645B]"
    >
      Registrera
    </button>
  </form>
  </div>
</div>
    );
}
