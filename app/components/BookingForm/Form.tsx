"use client";

import { createBooking } from "@/app/actions/createBooking";
import { useState, useActionState, useEffect } from "react";
import type { DateRange } from "react-day-picker";
import BookingMessage from "@/app/components/BookingMessage/BookingMessage";
import { fetchCustomers } from "./fetchCustomers";
import { Customer } from "@/app/models/Customer";

type FormProps = {
  range: DateRange | undefined;
  guests: number;
  setGuests: (guests: number) => void;
};

export default function Form({ range, guests, setGuests }: FormProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customerId, setCustomerId] = useState<string>();
  const [showMessage, setShowMessage] = useState(false);
  const [state, formAction] = useActionState(createBooking, {
    success: false,
    error: "",
  });

  useEffect(() => {
    async function loadCustomers() {
      const customers = await fetchCustomers();

      setCustomers(customers);
    }

    loadCustomers();
  }, []);

  useEffect(() => {
    if (state.success || state.error) {
      setShowMessage(true);
    }
  }, [state]);

  return (
    <>
      <form
        className="flex w-full flex-col gap-4 text-left "
        action={formAction}
      >
        <input
          type="date"
          name="checkInDate"
          value={range?.from?.toLocaleDateString("sv-SE") ?? ""}
          readOnly
          hidden
        />
        <input
          type="date"
          name="checkOutDate"
          value={range?.to?.toLocaleDateString("sv-SE") ?? ""}
          readOnly
          hidden
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="customerId">Kund</label>

          <select
            id="customerId"
            name="customerEmail"
            className="w-full rounded-md border border-gray-400 bg-white p-3"
            value={customerId}
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
          >
            <option value="">Välj kund</option>

            {customers?.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.firstName}
              </option>
            ))}
          </select>

          {!customerId && (
            <p className="text-red-400 text-xs"> var god och välj en kund</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="guests">Antal gäster</label>

          <input
            id="guests"
            type="number"
            name="guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full rounded-md border border-gray-400 bg-white p-3"
          />
        </div>
        <button
          disabled={
            !customerId ||
            !range?.from ||
            !range?.to ||
            range.from.getTime() === range.to.getTime()
          }
          type="submit"
          className="w-full rounded-md bg-[#74645B] p-3 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Boka
        </button>
      </form>
      {showMessage && (
        <BookingMessage
          message={state.success ? "Bokningen lyckades!" : state.error}
          onClose={() => setShowMessage(false)}
        />
      )}
    </>
  );
}
