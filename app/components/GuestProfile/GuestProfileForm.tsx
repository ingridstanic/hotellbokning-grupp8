"use client";

import { ChangeEvent, useState } from "react";
import { Customer } from "@/app/models/Customer";
import { Booking } from "@/app/models/Booking";

import BookingRow from "@/app/components/GuestProfile/GuestBookingForm";
import { updateCustomerAction } from "@/app/actions/updateCustomer";

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

  async function handleSave() {
  try {
    await updateCustomerAction(
      customer.id,
      firstName,
      lastName,
      email,
    );

    setIsEditing(false);
  } catch (error) {
    console.error("Kunde inte uppdatera kunden", error);
  }
}

  const booking = bookings[0];

  const [checkInDate, setCheckInDate] = useState(
    booking?.checkInDate ?? "Bokning saknas",
  );
  const [checkOutDate, setCheckOutDate] = useState(
    booking?.checkOutDate ?? "Bokning saknas",
  );

  const invalidDates = checkInDate >= checkOutDate;

  return (
    <>
      <div className="flex justify-end pr-40 pt-10">
       <button
      type="button"
      onClick={isEditing ? handleSave : () => setIsEditing(true)}
      className="rounded-md border border-black hover:bg-[#74645B] px-7 py-3 text-black"
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
          <BookingRow key={booking.id} booking={booking} customer={customer} />
        ))}
      </div>
    </>
  );
}
