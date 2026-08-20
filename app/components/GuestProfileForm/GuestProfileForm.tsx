"use client";

import { useState } from "react";
import { Customer } from "@/app/models/Customer";
import { Booking } from "@/app/models/Booking";

type GuestProfileFormProps = {
    customer: Customer,
    bookings: Booking[];
};

export default function GuestProfileForm({
    customer,
    bookings
}: GuestProfileFormProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(customer.firstName);
    const [lastName, setLastName] = useState(customer.lastName);
    const [email, setEmail] = useState(customer.email);

    const booking = bookings[0];

    const [checkInDate, setCheckInDate] = useState(booking?.checkInDate?? "Bokning saknas");
    const [checkOutDate, setCheckOutDate] = useState(booking?.checkOutDate?? "Bokning saknas");
    const [guests, setGuests] = useState(booking?.guests?? 1);

return (
    <>
      <div className="flex justify-end pr-40 pt-10">
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-md border border-black px-7 py-3 text-black"
        >
          {isEditing ? "Spara" : "Ändra"}
        </button>
      </div>

      <div className="pl-40 py-5 text-black">
        <label className="font-bold">Förnamn:</label>
          {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="ml-2 rounded-md border border-gray-400 p-2"
          />
        ) : (
          <span className="ml-2">{firstName}</span>
        )}
      </div>
      <div className="pl-40 py-5 text-black">
        <label className="font-bold">Efternamn:</label>

        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="ml-2 rounded-md border border-gray-400 p-2"
          />
        ) : (
          <span className="ml-2">{lastName}</span>
        )}
      </div>

      <div className="pl-40 py-5 text-black">
        <label className="font-bold">Email:</label>

        {isEditing ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-2 rounded-md border border-gray-400 p-2"
          />
        ) : (
          <span className="ml-2">{email}</span>
        )}
      </div>

      <p className="pl-40 pt-10 text-2xl text-black">
        Bokningar
      </p>

      <div className="mx-auto h-px w-[80%] bg-black/30" />

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
      </div>
    </>
  );
}