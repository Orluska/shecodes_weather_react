import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
  let [city, getCity] = useState(null);
  let [temperature, getTemperature] = useState(null);
  let [description, getDescription] = useState(null);
  let [wind, getWind] = useState(null);
  let [humidity, getHumidity] = useState(null);
  let [icon, getIcon] = useState(null);
  let [result, getResult] = useState(false);

  function updateCity(event) {
    getCity(event.target.value);
    console.log(event.target.value);
  }
  function DisplayWeather(response) {
    getResult(true);
    getDescription(response.data.weather[0].description);
    getTemperature(Math.round(response.data.main.temp));
    getWind(Math.round(response.data.wind.speed));
    getHumidity(Math.round(response.data.wind.speed));
    getIcon({
      src: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
  }

  if (result) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <form className="WeatherSearchForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={updateCity}
                ></input>
              </div>
              <div className="col-3 mb-3 mx-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                ></input>
              </div>
            </div>
          </form>
          <div className="WeatherData">
            <div className="container">
              <div className="d-flex flex-container">
                <div className="row">
                  <h1 className="text-capitalize">{city}</h1>
                  <div className="col-7 align-items-center">
                    <ul>
                      <li>{description}</li>
                      <li>Wind: {wind} km/h</li>
                      <li>Humidity: {humidity} %</li>
                    </ul>
                  </div>
                  <div className="col-5 align-items-center">
                    <span>
                      <img src={icon.src} alt={description} />
                    </span>
                    <span>{temperature}°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherApp">
        <div className="container">
          <form className="WeatherSearchForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={updateCity}
                ></input>
              </div>
              <div className="col-3 mb-3 mx-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                ></input>
              </div>
            </div>
          </form>
          <div className="WeatherData">
            <div className="container">
              <div className="d-flex flex-container">
                <div className="row">
                  <h1 className="text-capitalize">Athens</h1>
                  <div className="col-7 align-items-center">
                    <ul>
                      <li>sunny</li>
                      <li>Wind: 5 km/h</li>
                      <li>Humidity: 80 %</li>
                    </ul>
                  </div>
                  <div className="col-5 align-items-center">
                    <span>
                      <img
                        src={"https://openweathermap.org/img/wn/01d@2x.png"}
                        alt="description"
                      ></img>
                    </span>
                    <span>20°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
