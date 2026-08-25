import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-8 absolute top-0 left-0 z-20 w-full bg-[#74645B]">
      <div className="h-15 justify-start px-12">
        <a
          href="/"
          className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
        >
          <Image
            src="/images/logga.png"
            alt="Logo"
            width={160}
            height={50}
            className="w-20 h-auto"
          />
        </a>
      </div>
      <div className="h-15 justify-end px-8">
        <div className="flex h-full items-center gap-6">
          <a
            href="/"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            HEM
          </a>

          <span className="h-6 w-px bg-black/50" />

          <a
            href="/registerguest"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            REGISTRERA GÄST
          </a>

          <span className="h-6 w-px bg-black/50" />
          <a
            href="/booking"
            className="flex items-center px-4 py-2 text-sm text-black hover:opacity-70 border border-[#D9D9D9] rounded-full hover:bg-[#D9D9D9] hover:text-black transition-colors"
          >
            BOKA
          </a>

          <span className="h-6 w-px bg-black/50" />

          <a
            href="/guests"
            className="flex h-full items-center px-7 text-sm text-black hover:opacity-70"
          >
            GÄSTLISTA
          </a>
        </div>
      </div>
    </nav>
  );
}
