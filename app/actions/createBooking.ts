"use server";

import { Booking } from "../models/Booking";
import { getBookings } from "../services/getBookings";
import { getHotels } from "../services/getHotels";
import { createBookingRequest } from "../services/createBookingRequest";

export async function submitBooking(formData: FormData): Promise<void> {
  await createBooking(formData);
}

export const createBooking = async (form: FormData) => {
  const guests = Number(form.get("guests"));
  const customerId = String(form.get("customerId"));
  const checkInDate = String(form.get("checkInDate"));
  const checkOutDate = String(form.get("checkOutDate"));

  console.log("id", customerId);

  const { hotels } = await getHotels();

  if (hotels.length === 0) {
    throw new Error("No hotel found");
  }

  const hotelId = hotels[0].id;

  await createBookingRequest({
    checkInDate,
    checkOutDate,
    customerId,
    guests,
    hotelId,
  });
};
