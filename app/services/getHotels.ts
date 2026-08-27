import { ApiResponse } from "../models/ApiResponse";
import { Hotel } from "../models/Hotel";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/hotels/`;
const apiKey = process.env.HOTEL_API_KEY!;

export const getHotels = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: { "X-API-Key": apiKey },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Something went wrong ${response.status}`);
    }

    const data: ApiResponse<Hotel>[] = await response.json();
    const hotels = data.map((row) => ({
      ...row.data,
      id: row.id,
    }));

    const villaHotel = hotels.filter(
      (h) => h.address === "Villavilavägen 23, 123 33 Stockholm",
    );
    // console.log(villaHotel);
    return {
      hotels: villaHotel,
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
