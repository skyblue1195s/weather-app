import moment from 'moment-timezone';
import { WEATHER_ICON_URL } from '../../constants/constant';
import WeatherService from '../../service/weather.service';
import './forecast.scss'
type foreCastProps = {
    location: string
}
export default function ForecastCard({ location }: foreCastProps) {
    const { forecast, isError } = WeatherService('forecast', location);
    return (
        <>
            {
                !isError && (
                    <div className="forecast-container">
                        {
                            forecast.map((item: any, index: string) => (
                                <ul className="mt-4" key={index}>
                                    <li className="item">
                                        <span className="flex-1 text-left">
                                            {moment(item?.date).format('dddd')}
                                        </span>
                                        <img src={`${WEATHER_ICON_URL}/${item?.forecastIcon}@2x.png`} alt="" />
                                        <span className="flex-1 text-right">
                                            {item.min}&deg; / {item.max}&deg;
                                        </span>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}
