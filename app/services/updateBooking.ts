import { ApiResponse } from "../models/ApiResponse";
import { Booking } from "../models/Booking";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/bookings/`;
const apiKey = process.env.HOTEL_API_KEY!;

/*export const updateBooking = async (
  checkInDate: string,
  checkOutDate: string,
  guests: number,
  id: string,
) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
      body: JSON.stringify({
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        guests: guests,
      }),
    });

    if (!response.ok) {
      throw new Error(`Could not update booking ${response.status}`);
    }

    const data: ApiResponse<Booking> = await response.json();

    return {
      booking: data.data,
      id: data.id,
      error: "",
    };
  } catch (error) {
    console.error("Could not update booking", error);
    return {
      booking: null,
      error: "error:" + error,
    };
  }
};
*/
export const updateBooking = async (
  checkInDate: string,
  checkOutDate: string,
  guests: number,
  id: string,
) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        checkInDate,
        checkOutDate,
        guests,
      }),
    });

    if (!response.ok) {
      throw new Error(`Could not update booking ${response.status}`);
    }

    return {
      booking: null,
      id,
      error: "",
    };
  } catch (error) {
    console.error("Could not update booking:", error);

    return {
      booking: null,
      error: "Could not update booking. Try again.",
    };
  }
};
