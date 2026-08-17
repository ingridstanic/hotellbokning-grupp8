import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full bg-[#74645B]">
      <div className="flex h-15 items-center justify-start px-8 pt-10">
        <Image
          src="/images/logga.png"
          alt="Logo"
          width={100}
          height={40}
        />
      </div>
      <div className="flex h-15 items-center justify-end px-8">
        <div className="flex h-full items-center">
          <a
            href="/"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            HEM
          </a>

          <span className="h-6 w-px bg-black/50" />

          <a
            href="#guests"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            GÄSTER
          </a>

          <span className="h-6 w-px bg-black/50" />

          <a
            href="#booking"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            BOKA
          </a>
        </div>
      </div>
    </nav>
  );
}