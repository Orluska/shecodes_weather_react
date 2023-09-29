import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <form className="WeatherSearchForm">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter a city..."
                className="form-control"
              ></input>
            </div>

            <div
              class="col-3 mb-3 mx-auto
            "
            >
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
                <h1>Athens</h1>
                <div className="col-7 align-items-center">
                  <ul>
                    <li>Clear Sky</li>
                    <li>Wind: 7km/h</li>
                    <li>Humidity: 80%</li>
                  </ul>
                </div>
                <div className="col-5 align-items-center">
                  <span>
                    <img
                      src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                      alt="description"
                    />
                  </span>
                  <span>26°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
