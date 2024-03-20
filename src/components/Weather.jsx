import { React, useEffect, useState,useContext } from 'react'
import {Choice} from './FormSelect'

const Weather = () => {
    const choice = useContext(Choice)
    const apiKey = import.meta.env.VITE_APP_OPEN_WEATHER_API_KEY;
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState(0.0);
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${choice.city}&appid=${apiKey}&units=metric`;
    const fetchingData = () => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setDescription(data.weather[0].description);
          setTemp(data.main.temp)
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
    useEffect(() => fetchingData(), [choice.city]);
    return (
      <div className='d-flex justify-content-center'>
          <div className='text-center my-4'>
            <h4>טמפרטורה: <span
              className='text-info'> {temp} °C</span></h4>
            <h4>מצב השמים: <span
              className='text-info'>{description}</span> </h4>
              <h4>שים לב! במזג אוויר קשה לא ניתן לקיים טיבועים</h4>
          </div>
      </div>
    )
}

export default Weather