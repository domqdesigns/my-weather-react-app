import React from "react";
import "./Temperature.css";
import FormattedDate from "./FormattedDate";

export default function Temperature() {
  let weatherData = {
    city: "Orlando",
    date: new Date(response.data.dt * 1000),
    description: "Clear",
    humidity: "80",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    winds: 10
  };

  return (
    <div className="Temperature">
      <div className="container">
        <h4>
          <small> This week in</small>
        </h4>
        <h1>
          <span>{weatherData.city}</span>
        </h1>
        <h3 className="week">03/08-03/14</h3>

        <form className="search-form">
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Search a city"
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
              />
            </div>

            <div className="col-2">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-success w-100">Current</button>
            </div>
          </div>
        </form>
        <hr />

        <ul>
          <li><FormattedDate date={weatherData.date} /></li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img src={weatherData.imgUrl} alt="" />
                <span className="temperature">21</span>
                <span className="units">
                  <a href="" className="active">
                    °C
                  </a>
                  |
                  <a href="" className="active">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">WIND</h6>
              <span>{weatherData.winds}</span>mph
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">HUMIDITY</h6>
              <span>{weatherData.humidity}</span>%
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">PRECIPITATION</h6>
              <span>0</span>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}