import { NewHotel } from "../models/NewHotel";
import { getHotels } from "../services/getHotels";

const apiUrl = `https://aspcode.net/api/db/HotelAPI/hotels`;
const apiKey = process.env.HOTEL_API_KEY!;

export const seedHotel = async (hotel: NewHotel) => {
  const { hotels: hotelsFromDB } = await getHotels();

  const alreadyExistingHotel = hotelsFromDB?.some(
    (hFromDB) => hFromDB.hotelName === hotel.hotelName,
  );

  if (!alreadyExistingHotel) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          name: hotel.hotelName,
          address: hotel.hotelAddress,
        }),
      });

      if (response.ok) {
        console.log("Hotel added to database.", response.status);
      } else {
        console.error("POST failed", response.status);
      }
    } catch (error) {
      console.error("Could not create hotel.", error);
    }
  }
};
