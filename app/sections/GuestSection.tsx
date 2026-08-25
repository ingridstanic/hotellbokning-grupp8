import Link from "next/link";
import { getCustomers } from "../services/getCustomers";
import { Ellipsis } from "lucide-react";

type GuestSectionProps = {
  currentPage: number;
};

export default async function GuestSection({
  currentPage,
}: GuestSectionProps) {
  const { customers } = await getCustomers();

const customersPerPage = 20;

const startIndex = (currentPage - 1) * customersPerPage;

const currentCustomers = customers.slice(
  startIndex,
  startIndex + customersPerPage
);

const totalPages = Math.ceil(
  customers.length / customersPerPage
);

  return (
    <main
      id="guests"
      className="min-h-screen border-50 border-[#74645B] bg-[#FFF9F3]"
    >
      <h2 className="px-8 py-4 mx-40 text-3xl">Gäster</h2>

      <div className="mx-auto h-px w-[80%] bg-black/30" />

      {currentCustomers.map((customer) => (
        <div
          key={customer.id}
          className="flex items-center justify-between px-8 pt-8 mx-40 border-b"
        >
          <p className="text-lg">
            {customer.firstName} {customer.lastName}
          </p>

          <Link
            href={`/guests/${customer.id}`}
            className="flex h-10 w-10 mb-2 items-center justify-center rounded-full border border-black"
          >
            <Ellipsis />
          </Link>
        </div>
      ))}
       <div className="flex justify-center gap-4 py-10">
        {currentPage > 1 && (
          <Link
            href={`/guests?page=${currentPage - 1}`}
            className="rounded-md border border-black px-4 py-2"
          >
            Föregående
          </Link>
        )}

        <p className="px-4 py-2">
          Sida {currentPage} av {totalPages}
        </p>

        {currentPage < totalPages && (
          <Link
            href={`/guests?page=${currentPage + 1}`}
            className="rounded-md border border-black px-4 py-2"
          >
            Nästa
          </Link>
        )}
      </div>
    </main>
  );
}
