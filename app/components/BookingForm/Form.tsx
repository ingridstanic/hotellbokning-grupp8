"use client";

import { customers } from "@/app/data/customers";
import { submitBooking } from "@/app/actions/createBooking";
import { registerBooking } from "@/app/actions/registerBooking";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

type FormProps = {
  range: DateRange | undefined;
  guests: number;
  setGuests: (guests: number) => void;
};

export default function Form({ range, guests, setGuests }: FormProps) {
  const [customerId, setCustomerId] = useState<string>();

  return (
    <form
      className="flex w-full flex-col gap-4 text-left "
      action={submitBooking}
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
          id="customerEmail"
          name="customerEmail"
          className="w-full rounded-md border border-gray-400 bg-white p-3"
          value={customerId}
          onChange={(e) => {
            setCustomerId(e.target.value ? String(e.target.value) : undefined);
          }}
        >
          <option value="">Välj kund</option>

          {customers.map((customer) => (
            <option key={customer.email} value={customer.email}>
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
  );
}
