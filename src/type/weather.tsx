export type Weather = {
    location?: string,
    condition?: number,
    country?: string,
    date?: number, // convert from seconds to milliseconds
    description?: string,
    feels_like?: number,
    humidity?: number,
    icon_id?: string,
    sunrise?: number, // convert from seconds to milliseconds
    sunset?: number, // convert from seconds to milliseconds
    temperature?: number,
    timezone?: number, // convert from seconds to hours
    wind_speed?: number, // convert from m/s to km/h
    weatherIcon?: '',
    currentTime?: any,
    isDay?: false,
    max?: number,
    min?: number,
    forecastIcon: string
}