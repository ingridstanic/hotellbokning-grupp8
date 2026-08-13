export default async function GuestProfilePage({
  params,
}: {
  params: Promise<{ guestId: string }>;
}) {
  const { guestId } = await params;

  return (
    <main className="min-h-screen bg-[#FFF9F3]">
      <h1 className="font-display text-center text-5xl text-black">
        Gästprofil
      </h1>

      <p className="text-center text-black">
        Gäst: {guestId}
      </p>
    </main>
  );
}