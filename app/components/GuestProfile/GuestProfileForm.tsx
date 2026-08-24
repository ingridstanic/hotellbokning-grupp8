"use client";

import { ChangeEvent, useState } from "react";
import { Customer } from "@/app/models/Customer";
import { Booking } from "@/app/models/Booking";
import BookingMessage from "../BookingMessage/BookingMessage";
import BookingRow from "@/app/components/GuestProfile/GuestBookingForm";

type GuestProfileFormProps = {
  customer: Customer;
  bookings: Booking[];
};

export default function GuestProfileForm({
  customer,
  bookings,
}: GuestProfileFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [email, setEmail] = useState(customer.email);

  const booking = bookings[0];

  const [checkInDate, setCheckInDate] = useState(
    booking?.checkInDate ?? "Bokning saknas",
  );
  const [checkOutDate, setCheckOutDate] = useState(
    booking?.checkOutDate ?? "Bokning saknas",
  );
  const [guests, setGuests] = useState(booking?.guests ?? 1);

  const [isCheckedIn, setIsCheckedIn] = useState<boolean>();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const invalidDates = checkInDate >= checkOutDate;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);

    if (checkInDate >= newCheckOutDate) {
      setShowMessage(true);
      setMessage("You cannot checkout before you check in!");
    }
  }

  return (
    <>
      <div className="flex justify-end pr-40 pt-10">
        <button
          type="button"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className={`rounded-md border border-black px-7 py-3 text-black ${invalidDates ? "bg-[#D9D9D9]" : ""}`}
          disabled={invalidDates}
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

      <p className="pl-40 pt-10 text-2xl text-black">Bokningar</p>

      <div className="mx-auto h-px w-[80%] bg-black/30" />

      <div>
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  );
}
