"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";

import MyDatePicker from "./MyDatePicker/DatePicker";
import Form from "./Form";

export default function BookingForm() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  });
  const [guests, setGuests] = useState<number>(1);

  return (
    <div className="mx-auto flex max-w-7xl gap-4 p-5  bg-[#D9D9D9]">
      <MyDatePicker range={range} setRange={setRange} />

      <div className="flex flex-1 flex-col rounded-md bg-[#FFF9F3] p-4">
        <div className="mb-6 w-full border-b-2 text-center">
          <h2 className="pb-3 text-2xl">DETALJER</h2>
        </div>

        <div className="flex justify-center gap-6">
          <div className="border-2 border-black p-5 text-center">
            {range?.from && (
              <>
                {" "}
                <p>Incheckning:</p>{" "}
                <p className="text-3xl">
                  {" "}
                  {range.from.toLocaleDateString("sv-SE", {
                    day: "2-digit",
                  })}{" "}
                </p>{" "}
                <p>
                  {" "}
                  {range.from.toLocaleDateString("sv-SE", {
                    month: "long",
                  })}{" "}
                </p>{" "}
              </>
            )}
          </div>

          <div className="border-2 border-black p-5 text-center">
            {range?.to && (
              <>
                {" "}
                <p>Utcheckning:</p>{" "}
                <p className="text-4xl">
                  {" "}
                  {range.to.toLocaleDateString("sv-SE", {
                    day: "2-digit",
                  })}{" "}
                </p>{" "}
                <p>
                  {" "}
                  {range.to.toLocaleDateString("sv-SE", { month: "long" })}{" "}
                </p>{" "}
              </>
            )}
          </div>
        </div>

        <div className="mt-8 w-full">
          <Form range={range} guests={guests} setGuests={setGuests} />
        </div>
      </div>
    </div>
  );
}
