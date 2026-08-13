function Navbar() {
    return (
         <nav className="absolute top-0 left-0 z-20 w-full bg-hotel-dark">
      <div className="flex h-20 items-center justify-between px-8">
  <div className="flex h-full items-center">
          <a
            href="/"
            className="flex h-full items-center px-6 font-sans text-sm text-white transition-opacity hover:opacity-70"
          >
            HEM
          </a>

          <span className="h-6 w-px bg-white/50" />

          <a
            href="#guests"
            className="flex h-full items-center px-6 font-sans text-sm text-white transition-opacity hover:opacity-70"
          >
            GÄSTER
          </a>

          <span className="h-6 w-px bg-white/50" />

          <a
            href="#booking"
            className="flex h-full items-center px-6 font-sans text-sm text-white transition-opacity hover:opacity-70"
          >
            BOKA
          </a>
        </div>
      </div>
      </nav>
    )
}

export default Navbar;