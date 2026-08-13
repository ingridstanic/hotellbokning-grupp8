import Navbar from "../components/Navbar/Navbar";

export default function HeroSection() {
  return (
    <section 
    id="home"
    className="relative min-h-screen overflow-hidden">

      <Navbar />

      <video
        className="absolute left-1/2 top-1/2 z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

    </section>
  );
}
