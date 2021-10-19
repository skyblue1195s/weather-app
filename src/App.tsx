import React, { useMemo, useState } from 'react';
import './App.scss';
import SearchCity from './components/search/searchCity';
import WeatherCard from './components/weather/weatherCard';
import {debounce} from 'lodash'
function App() {
  const [location, setLocation] = useState('Can Tho');

  // set delay set new location
  const debounceSearchLocation = useMemo(() =>
      debounce((search) => {
        setLocation(search);
      }, 500),
    [],
  );

  function handlerLocationChange(search: string) {
    if (search.length > 0) {
      debounceSearchLocation(search)
    }
  }

  return (
    <div className="App">
      <SearchCity  onLocationChange={handlerLocationChange}/>
      <WeatherCard location={location} />
    </div>
  );
}

export default App;
