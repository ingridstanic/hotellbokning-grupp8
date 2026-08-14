import { Hotel } from "../models/Hotel";

export const getHotels = async () => {
  try {
    const apiUrl =
      "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/hotels";

    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error("Something went wrong...");
    }

    const data: Hotel[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch data");
  }
};
