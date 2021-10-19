import moment from "moment-timezone";
import React from "react";
import { WEATHER_ICON_URL } from "../../constants/constant";
import WeatherService from "../../service/weather.service";
import ForecastCard from "../forecast/forecastCard";
import './weather.scss'

type WeatherCardProps = {
  location: string;
}

export default function WeatherCard({ location }: WeatherCardProps) {
  const { weather, isLoading, isError } = WeatherService('weather', location);
  const weatherIcon = `${WEATHER_ICON_URL}/${weather?.icon_id}@2x.png`
  return (
    <>
      {
        !isError && (

          <div className="card">
            <div>
              <h2>{weather?.location}</h2>
              <div>
                <span>{moment(weather?.date).format('dddd')}, </span>
                <span>{moment.utc(weather?.date).utcOffset(weather?.timezone || '').format('h:mm A')}, </span>
                <span className="description">{weather?.description}</span>
              </div>
            </div>

            <div className="temperature-content">
              <img src={weatherIcon} alt="" />
              <h1>{weather?.temperature}°C</h1>
            </div>
            <div className="group-windy">
              <p>Feels like {weather?.feels_like}°</p>
              <p>
                <span>
                  Wind {weather?.wind_speed}km/h <span className="dot">•</span> Humidity {weather?.humidity}%
                </span>
              </p>
            </div>
          <ForecastCard location={location} />
          </div>
        )
      }
    </>
  );
}
