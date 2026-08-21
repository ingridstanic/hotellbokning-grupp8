"use client";

import { useState } from "react";
import { Booking } from "@/app/models/Booking";

type BookingRowProps = {
    booking: Booking;
};

export default function BookingRow ({ booking }: BookingRowProps) {

const [isEditing, setIsEditing] = useState(false);
const [checkInDate, setCheckInDate] = useState(booking.checkInDate);
const [checkOutDate, setCheckOutDate] = useState(booking.checkOutDate);
const [guests, setGuests] = useState(booking.guests);

return (
     <div className="mx-auto flex w-[80%] items-center justify-between py-20 text-black">

      <div>
        <p className="font-bold">Check in:</p>

        {isEditing ? (
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="rounded-md border border-gray-400 p-2"
          />
        ) : (
          <p>{checkInDate}</p>
        )}
      </div>
        <div>
        <p className="font-bold">Check out:</p>

        {isEditing ? (
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="rounded-md border border-gray-400 p-2"
          />
        ) : (
          <p>{checkOutDate}</p>
        )}
      </div>
      <div>
        <p className="font-bold">Antal gäster:</p>

        {isEditing ? (
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-400 p-2"
          />
        ) : (
          <p>{guests}</p>
        )}
      </div>
       <button
        type="button"
        onClick={() => setIsEditing(!isEditing)}
        className="rounded-md border border-black px-5 py-2"
      >
        {isEditing ? "Spara" : "Ändra"}
      </button>
      <button
        type="button"
        className="rounded-md border border-black px-5 py-2"
      >
        Avboka
      </button>
      <button
        type="button"
        className="rounded-md border border-black px-5 py-2"
      >
        Check In
      </button>
       <button
        type="button"
        className="rounded-md border border-black px-5 py-2"
      >
        Check Ut
      </button>
    </div>
  );
}

