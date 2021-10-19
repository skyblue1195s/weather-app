import moment from "moment-timezone";
import React from "react";
import { WEATHER_ICON_URL } from "../../constants/constant";
import { Weather } from "../../type/weather";
import ForecastCard from "../forecast/forecastCard";
import './weather.scss'

type WeatherCardProps = {
  location: string;
  weather: Weather
}

export default function WeatherCard({ location, weather }: WeatherCardProps) {
  const weatherIcon = `${WEATHER_ICON_URL}/${weather?.icon_id}@2x.png`;
  return (
    <>
      {
        <div className="card">
          {
              <>
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
              </>
          }
        </div>
      }
    </>
  );
}
