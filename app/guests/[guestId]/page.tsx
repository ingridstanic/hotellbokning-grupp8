import GuestProfile from "@/app/sections/GuestProfileSection";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

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
