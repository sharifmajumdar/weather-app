import React from 'react';

const Card = ({forecastData}) => {
    return (
        <div id='card-area'>
        <h1>Today's Weather Info</h1>
        <span id ="date"><b>Today: </b>{forecastData.date}</span> <br></br>
        <span id ="day-condition"><b>Day's Condition:</b> {forecastData.dayCondition}</span> <br></br>
        <span id ="night-condition"><b>Night's Condition:</b> {forecastData.nightCondition}</span> <br></br>
        <span id ="min-temp"><b>Min Temperature:</b> {forecastData.min}°F</span> <br></br>
        <span id ="max-temp"><b>Max Temperature:</b> {forecastData.max}°F</span> <br></br>
        <span id ="source"><b>Info Source:</b> <a href='https://www.accuweather.com/' target="_blank">{forecastData.source}</a> </span> <br></br>  
    </div>
    )
}

export default Card;