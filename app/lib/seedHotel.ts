import { error } from "console";
import { NewHotel } from "../models/NewHotel";
import { getHotels } from "../services/getHotels";

export const seedHotel = async (hotel: NewHotel) => {
  const hotelsFromDB = await getHotels();

  const alreadyExistingHotel = hotelsFromDB?.some(
    (hFromDB) => hFromDB.name === hotel.name,
  );

  if (!alreadyExistingHotel) {
    try {
      const response = await fetch(
        "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/hotel/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: hotel.name,
            address: hotel.address,
          }),
        },
      );

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
