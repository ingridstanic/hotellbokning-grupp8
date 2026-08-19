"use server";

import { Booking } from "../models/Booking";
import { getBookings } from "../services/getBookings";
import { getHotels } from "../services/getHotels";
import { createBookingRequest } from "../services/createBookingRequest";

export const limitBookings = async (checkInDate: string) => {
  const result = await getBookings();

  const bookings: Booking[] = result.bookings;
  //hittar alla bokingar

  const bookingsChosenDay = bookings.filter(
    (b) => b.checkInDate === checkInDate,
    //hittar alla bokningar på incheckningsdagen
  );

  console.log(bookingsChosenDay);

  return bookingsChosenDay.length;
};

export const createBooking = async (form: FormData) => {
  const guests = Number(form.get("guests"));
  const customerId = Number(form.get("customerId"));
  const checkInDate = String(form.get("checkInDate"));
  const checkOutDate = String(form.get("checkOutDate"));

  const numberOfBookings = await limitBookings(checkInDate);

  if (numberOfBookings >= 3) {
    throw new Error("No more bookings available for this date");
  }

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

