"use client";

import Image from "next/image";
import { getWeather } from "../services/getWeather";
import { useState } from "react";
import { useEffect } from "react";

function getWeatherImage(weatherCode: number): string {
  switch (true) {
    case weatherCode === 0:
      return "/images/sol.png";

    case weatherCode >= 1 && weatherCode <= 3:
      return "/images/moln.png";

    case weatherCode >= 51 && weatherCode <= 67:
      return "/images/regn.png";

    case weatherCode >= 80 && weatherCode <= 99:
      return "/images/regn.png";

    default:
      return "/images/moln.png";
  }
}

function getWeatherDescription(weatherCode: number): string {
  switch (true) {
    case weatherCode === 0:
      return "Soligt";

    case weatherCode >= 1 && weatherCode <= 3:
      return "Molnigt";

    case weatherCode >= 51 && weatherCode <= 67:
      return "Regn";

    case weatherCode >= 80 && weatherCode <= 99:
      return "Kraftigt regn";

    default:
      return "Okänt väder";
  }
}

export default function WeatherSection() {
  const [dayIndex, setDayIndex] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const weatherData = await getWeather();
      setData(weatherData);
    }

    fetchWeather();
  }, []);

  if (!data) {
    return <div>Laddar väderdata...</div>;
  }

  const maxTemperature = data.daily.temperature_2m_max[dayIndex];
  const minTemperature = data.daily.temperature_2m_min[dayIndex];
  const weatherCode = data.daily.weather_code[dayIndex];

  const weatherImage = getWeatherImage(weatherCode);
  const weatherDescription = getWeatherDescription(weatherCode);
  const dayNames = ["Igår", "Idag", "Imorgon"];

  return (
    <>
      <h1 className="font-display text-center text-5xl py-2 pt-7 text-black">
        Stockholm
      </h1>

      <h2 className="mx-auto flex w-[80%] items-center justify-between py-10">
        <button
          className="text-2xl text-black disabled:opacity-30"
          onClick={() => setDayIndex(dayIndex - 1)}
          disabled={dayIndex === 0}
        >
          ←
        </button>
        <span className="font-display text-2xl text-black">
          {dayNames[dayIndex]}
        </span>
        <button
          className="text-2xl text-black disabled:opacity-30"
          onClick={() => setDayIndex(dayIndex + 1)}
          disabled={dayIndex === 2}
        >
          →
        </button>
      </h2>

      <div className="mx-auto h-px w-[80%] bg-black/30" />

      <div className="pt-10 text-left text-2xl pl-40 text-black">
        <p>H: {maxTemperature}°C</p>
        <p>L: {minTemperature}°C</p>
        <p>{weatherDescription}</p>
      </div>

      <div className="flex justify-center">
        <Image
          src={weatherImage}
          alt={weatherDescription}
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
