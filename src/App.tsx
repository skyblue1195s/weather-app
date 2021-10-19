import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.scss';
import SearchCity from './components/search/searchCity';
import WeatherCard from './components/weather/weatherCard';
import { debounce } from 'lodash'
import PreviousCity from './components/previousCity/previousCity';
import WeatherService, { previousCity } from './service/weather.service';
function App() {
  // set variable
  const [location, setLocation] = useState('Can Tho');
  const [weathers, setWeathers] = useState<any>(previousCity.value);
  // get weather
  const { weather } = WeatherService('weather', location);

  // get history weather after search new location
  const fetch = useCallback(() => {
      setWeathers(previousCity.value)
    }, [location])
  
  useEffect(() => {
    fetch()
  }, [fetch])

  // set delay set new location
  const debounceSearchLocation = useMemo(() =>
    debounce((search) => {
      setLocation(search);
    }, 500),
    [],
  );

  // Handler new location change
  function handlerLocationChange(search: string) {
    if (search.trim().length > 0) {
      debounceSearchLocation(search)
    }
  }

  return (
    <div className="App">
      <SearchCity onLocationChange={handlerLocationChange} />
      {weather ? <WeatherCard location={location} weather={weather} /> : <p className="text-not-found">Not found data</p>}
      <div className="history-search-content">
        {weathers.weathers &&
          (
            <>
              <h3 className="history-search">History search</h3>
              <div className="list-card">
                <PreviousCity weathers={weathers.weathers} />
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
