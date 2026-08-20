"use server";

import { Booking } from "../models/Booking";
import { getBookings } from "../services/getBookings";
import { getHotels } from "../services/getHotels";
import { createBookingRequest } from "../services/createBookingRequest";

export const limitBookings = async (checkInDate: string) => {
  const result = await getBookings();

  const bookings: Booking[] = result.bookings;

  const bookingsChosenDay = bookings.filter(
    (booking) => booking.checkInDate === checkInDate,
  );

  return bookingsChosenDay.length;
};

export const createBooking = async (
  _state: { success: boolean; error: string },
  form: FormData,
) => {
  const guests = Number(form.get("guests"));
  const customerId = String(form.get("customerId"));
  const checkInDate = String(form.get("checkInDate"));
  const checkOutDate = String(form.get("checkOutDate"));

  const numberOfBookings = await limitBookings(checkInDate);

  if (numberOfBookings >= 3)
    return {
      success: false,
      error: "Hotellet är fullbokat!",
    };

  const { hotels } = await getHotels();

  if (hotels.length === 0) {
    throw new Error("No hotel found");
  }

  const hotelId = hotels[0].id;

  await createBookingRequest({
    customerId,
    checkInDate,
    checkOutDate,
    guests,
    hotelId,
  });

  return {
    success: true,
    error: "",
  };
};
