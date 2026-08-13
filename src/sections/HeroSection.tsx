function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

    <video
  className="absolute left-1/2 top-1/2 z-0 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 object-cover"
  src="/video/hero.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
    </section>
  );
}

export default HeroSection;