"use server";

import { Booking } from "../models/Booking";
import { getHotels } from "../services/getHotels";

export const createBooking = async (form: FormData) => {
  const guests = Number(form.get("guests"));
  const customerId = form.get("customerId");
  const checkInDate = form.get("checkInDate");
  const checkOutDate = form.get("checkOutDate");

  const { hotels } = await getHotels();

  if (hotels.length === 0) {
    throw new Error("No hotel found");
  }

  const hotelId = hotels[0].id;

  const response = await fetch("https://aspcode.net/api/db/HotelAPI/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.API_KEY!,
    },
    body: JSON.stringify({
      checkInDate,
      checkOutDate,
      customerId,
      guests,
      hotelId,
    }),
  });

  if (!response.ok) {
    throw new Error("Could not create booking");
  }
};
