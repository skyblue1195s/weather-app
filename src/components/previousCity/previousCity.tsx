import moment from 'moment';
import React from 'react'
import { WEATHER_ICON_URL } from '../../constants/constant';
import { Weather } from '../../type/weather';
import './previousCity.scss';

type Previous = {
  weathers: Weather[]
}
export default function PreviousCity({weathers}: Previous) {
  return (
    <>
      {
       weathers.slice(0, 2).map((weather: any, index: number) =>  (
          <div className="card card-content" key={index}>
            {
              <>
                <div>
                  <h2>{weather?.location}</h2>
                  <div>
                    <span>{moment(weather?.date).format('dddd')}, </span>
                    <span>{moment(weather?.date).utcOffset(weather?.timezone || '').format('h:mm A')}, </span>
                    <span className="description">{weather?.description}</span>
                  </div>
                </div>
                <div className="temperature-content">
                  <img src={`${WEATHER_ICON_URL}/${weather?.icon_id}@2x.png`} alt="" />
                  <h1>{weather?.temperature}°C</h1>
                </div>
                <div className="group-windy-weather">
                  <p>Feels like {weather?.feels_like}°</p>
                  <p>
                    <span>
                      Wind {weather?.wind_speed}km/h <span className="dot">•</span> Humidity {weather?.humidity}%
                    </span>
                  </p>
                </div>
              </>

            }
          </div>
        ))
      }
    </>
  );
}
