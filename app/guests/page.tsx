import GuestSection from "../sections/GuestSection";

export default async function GuestsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;

  return <GuestSection currentPage={currentPage} />;
}