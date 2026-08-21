import { ApiResponse } from "../models/ApiResponse";
import { Booking } from "../models/Booking";
import { NewBooking } from "../models/NewBooking";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/bookings/`;
const apiKey = process.env.HOTEL_API_KEY!;

export const createBooking = async (booking: NewBooking) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      throw new Error(`Could not create booking.`);
    }

    const data: ApiResponse<Booking> = await response.json();

    return {
      booking: data.data,
      id: data.id,
      error: "",
    };
  } catch (error) {
    console.error("Failed to create booking, ", error);
    return {
      booking: null,
      error: "Could not create booking, try again.",
    };
  }
};
