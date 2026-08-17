import { hotel } from "../data/hotel";
import { ApiResponse } from "../models/ApiResponse";
import { Hotel } from "../models/Hotel";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/hotels/`;
const apiKey = process.env.HOTEL_API_KEY!;

export const getHotels = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: { "X-API-Key": apiKey },
    });

    if (!response.ok) {
      throw new Error(`Something went wrong ${response.status}`);
    }

    const data: ApiResponse<Hotel>[] = await response.json();
    const hotels = data.map((row) => row.data);
    console.log(hotels);
    return {
      hotels: hotels,
      error: "",
    };
  } catch (error) {
    console.error("Could not fetch data");
    return {
      hotels: [],
      error: "Could not load hotals, try again.",
    };
  }
};
