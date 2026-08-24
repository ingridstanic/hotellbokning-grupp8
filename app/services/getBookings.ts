import { ApiResponse } from "../models/ApiResponse";
import { Booking } from "../models/Booking";

const apiUrl = "https://aspcode.net/api/db/HotelAPI/bookings/";
const apiKey = process.env.HOTEL_API_KEY!;

export const getBookings = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-API-Key": apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Something went wrong... ${response.status}`);
    }

    const data: ApiResponse<Booking>[] = await response.json();
    const bookings = data.map((row) => ({
      ...row.data,
      id: row.id,
    }));

    const villaBookings = bookings.filter(
      (b) => b.hotelId === "ea8129c0-9f84-4f34-a68a-9a153676c657",
    );
    // console.log(villaBookings);

    return {
      bookings: villaBookings,
      error: "",
    };
  } catch (error) {
    console.error("Could not fetch data", error);
    return {
      bookings: [],
      error: "Could not load bookings, try again.",
    };
  }
};
