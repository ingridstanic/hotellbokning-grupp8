export async function getWeather() {
    const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FStockholm&past_days=1"
);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return data;
}