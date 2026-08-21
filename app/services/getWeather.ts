import { WeatherResponse } from "../models/WeatherResponse";

export async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FStockholm&past_days=1",
    );

    if (!response.ok) {
      throw new Error(`Could not load weather. ${response.status}`);
    }

    const data: WeatherResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch weather data, ", error);
    return null;
  }
}
