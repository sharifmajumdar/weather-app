import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [name, setName ] = useState('');
  const [info, setInfo ] = useState();

  const getLocationKey = () => {
    const apiKey = 'djAtrYtumaSnqwYQuUvQyEonYHQL4ZYm';
    const locationUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?q=${name}&apikey=${apiKey}`;
    fetch(locationUrl)
      .then(response => {
        return response.json();
      })
      .then(res => res.find(el=>el.Country.ID === 'BD'))
      .then(res => {
        setInfo({
          name: res.LocalizedName,
          key: res.Key,
        })
      })
  };

  useEffect(()=>{
    if(info) {
      const apiKey = 'djAtrYtumaSnqwYQuUvQyEonYHQL4ZYm';
      const locationKey = info && info.key;
      const weatherApiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}` ;
      fetch(weatherApiUrl)
        .then(response => {
          return response.json()
        })
        .then(res => {
          console.log(res);
          setData(res.DailyForecasts.map(el =>{
            return {
              min: el.Temperature.Minimum.Value,
              max: el.Temperature.Maximum.Value,
              date: el.Date,
              dayCondition: el.Day.IconPhrase,
              nightCondition: el.Night.IconPhrase,
              source: el.Sources,
            }
          }))
        })
    }
  }, [info]);

  return (
    <div className="App">
      <div id="input-area">
        <h1 class="text-center">Welcome to Weather App</h1>
        <div id="submit-area">
            <input type="text" id="city-name" placeholder="Enter your city name for Bangladesh like Dhaka" onChange = {(e)=> setName(e.target.value)} />
            <button id="submit-button" onClick={getLocationKey}>Show</button>
        </div>
     </div>
      {data && data.map(el=>
        <Card forecastData = {el}  />
        )}
    </div>
  );
}

export default App;
