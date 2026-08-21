import { NewBooking } from "../models/NewBooking";

const apiUrl = "https://aspcode.net/api/db/HotelAPI/bookings";
const apiKey = process.env.HOTEL_API_KEY!;

export const createBookingRequest = async (booking: NewBooking) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("Could not create booking");
  }
};
