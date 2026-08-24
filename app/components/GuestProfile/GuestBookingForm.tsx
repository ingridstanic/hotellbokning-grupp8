"use client";

import { useState } from "react";
import { Booking } from "@/app/models/Booking";
import {
  updateBookingAction,
  deleteBookingAction,
} from "@/app/actions/changeBooking";
import BookingMessage from "../BookingMessage/BookingMessage";
import { Customer } from "@/app/models/Customer";

type BookingRowProps = {
  booking: Booking;
  customer: Customer;
};

export default function BookingRow({ booking, customer }: BookingRowProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [guests, setGuests] = useState(booking?.guests ?? 1);
  const [checkInDate, setCheckInDate] = useState(booking.checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(booking.checkOutDate);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);

    if (checkInDate >= newCheckOutDate) {
      setShowMessage(true);
      setMessage("You cannot checkout before you check in!");
    }
  }

  const handleSave = async () => {
    await updateBookingAction(booking.id, checkInDate, checkOutDate, guests);
    setIsEditing(false);
    setShowMessage(true);
    setMessage("Guest information updated");
  };

  const handleDelete = async () => {
    await deleteBookingAction(booking.id);
  };

  return (
    <>
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
              onChange={handleChange}
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
          disabled={checkInDate > checkOutDate}
          onClick={isEditing ? handleSave : () => setIsEditing(!isEditing)}
          className={`rounded-md border hover:bg-[#74645B] border-black px-5 py-2  ${
            checkInDate >= checkOutDate ? "bg-gray-300 cursor-not-allowed" : ""
          }`}
        >
          {isEditing ? "Spara" : "Ändra"}
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="rounded-md border hover:bg-[#74645B] border-black px-5 py-2"
        >
          Avboka
        </button>

        <button
          type="button"
          disabled={isEditing}
          onClick={() => {
            setIsCheckedIn(!isCheckedIn);
            setMessage(
              !isCheckedIn
                ? `${customer.firstName} ${customer.lastName} checked in on ${checkInDate}`
                : `${customer.firstName} ${customer.lastName} checked out on ${checkOutDate}`,
            );
            setShowMessage(true);
          }}
          className="rounded-md border border-black px-7 py-3 text-black"
        >
          {isCheckedIn ? "Check out" : "Check in"}
        </button>
        {showMessage && (
          <BookingMessage
            message={message}
            onClose={() => setShowMessage(false)}
          />
        )}
      </div>
    </>
  );
}
