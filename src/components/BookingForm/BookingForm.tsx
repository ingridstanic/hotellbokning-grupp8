"use client";
import { useState } from "react";

import { MyDatePicker } from "../MyDatePicker/DatePicker";
import { DateRange } from "react-day-picker";

export default function BookingForm() {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <>
      <div className="flex  w-full p-5 gap-4">
        <MyDatePicker range={range} setRange={setRange} />

        <div className=" flex-col bg-[#d9d9d9] flex-1  p-4 text-center">
          <h3> DETALJER</h3>
          <div className="flex justify-evenly">
            <div className="border-2 border-black">
              {range?.from && (
                <>
                  <p>Incheckning:</p>
                  <p>
                    {" "}
                    {range.from.toLocaleDateString("sv-SE", { day: "2-digit" })}
                  </p>
                  <p>
                    {" "}
                    {range.from.toLocaleDateString("sv-SE", { month: "long" })}
                  </p>
                </>
              )}
            </div>
            <form method="POST" action="/bookings" onSubmit={(e) => {}}>
              <div className="border-2 border-black">
                {range?.to && (
                  <>
                    <p> Utcheckning:</p>
                    <p>
                      {range.to.toLocaleDateString("sv-SE", { day: "2-digit" })}
                    </p>
                    <p>
                      {" "}
                      {range.to.toLocaleDateString("sv-SE", { month: "long" })}
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>

          {/**   {range?.to && (
            <p>Utcheckning: {range.to.toLocaleDateString("sv-SE")}</p>
          )} */}
        </div>
      </div>
    </>
  );
}
