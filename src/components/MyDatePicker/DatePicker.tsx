"use client";

import "react-day-picker/style.css";
import "./DatePicker.css";

import { DayPicker, type DateRange } from "react-day-picker";

export function MyDatePicker({
  range,
  setRange,
}: {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
}) {
  return (
    <div className="justify-between  flex-1">
      <div className="bg-[#74645B] p-4 justify-items-center">
        <h3> VÄLJ DATUM </h3>

        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
        />
      </div>
    </div>
  );
}

export default MyDatePicker;
