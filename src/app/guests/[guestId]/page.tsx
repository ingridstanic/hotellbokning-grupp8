import GuestProfile from "@/src/sections/GuestProfileSection";
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
      <GuestProfile guestId={guestId} />
      <Footer />
    </main>
  );
}
  