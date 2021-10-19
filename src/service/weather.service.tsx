import moment from "moment-timezone";
import useSWR from "swr";
import { OPEN_WEATHER_MAP_URL, WEATHER_API_KEY } from "../constants/constant";
import fetcher from "../lib/fetcher";
const apiUrl = OPEN_WEATHER_MAP_URL;
const apiKey = WEATHER_API_KEY;
export default function WeatherService(type: string, location: string) {
  const { data, error } = useSWR(`${apiUrl}/${type}/?q=${location}&units=metric&APPID=${apiKey}`,fetcher);
  if (type === 'weather') {
    return {
      weather: data?.weather ? customResponseData(data) : null,
      isLoading: !data && !error,
      isError: error
    };
  } else {
    return {
      forecast: data?.list && Object.entries(data).length ? data.list.filter((f: any) => f.dt_txt.match(/12:00:00/)).map(customResponseData): [],
      isLoading: !data && !error,
      isError: error
    };
  }
}

function customResponseData(data: any) {
    const mapped = {
      location: data.name,
      condition: data.cod,
      country: data.sys.country,
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].description,
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      icon_id: data.weather[0].icon,
      sunrise: data.sys.sunrise * 1000, // convert from seconds to milliseconds
      sunset: data.sys.sunset * 1000, // convert from seconds to milliseconds
      temperature: Math.round(data.main.temp),
      timezone: data.timezone / 3600, // convert from seconds to hours
      wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
      weatherIcon: '',
      currentTime: moment(),
      isDay: false,
      max: 0,
      min: 0,
      forecastIcon: data.weather[0].icon
    };

    if (data.main.temp_min && data.main.temp_max) {
        mapped.max = Math.round(data.main.temp_max);
        mapped.min = Math.round(data.main.temp_min);
    }
    return mapped;
  }