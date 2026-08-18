"use client";

import "react-day-picker/style.css";
import "./DatePicker.css";

import { DayPicker, type DateRange } from "react-day-picker";

export function MyDatePicker({
  range,
  setRange,
}: {
  range: DateRange;
  //setRange: (range: DateRange) => void;
  setRange: (range: DateRange | undefined) => void;
}) {
  return (
    <div className="justify-between  flex-2">
      <div className="bg-[#74645B] p-4 pb-4 ml-4 mr-4 justify-items-center rounded-md">
        <div className="mb-6 w-full border-b-2 text-center">
          <h2 className="pb-3 text-2xl"> VÄLJ DATUM </h2>
        </div>

        <DayPicker
          mode="range"
          selected={range}
          onSelect={(newRange) => {
            if (newRange) {
              setRange(newRange);
            }
          }}
          numberOfMonths={2}
        />
      </div>
    </div>
  );
}

export default MyDatePicker;
