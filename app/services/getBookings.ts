import { Booking } from "../models/Booking";

export const getBookings = async () => {
  const apiUrl =
    "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/bookings";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("Something went wrong...");
    }

    const data: Booking[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch data");
  }
};
