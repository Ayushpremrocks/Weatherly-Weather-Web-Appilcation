'use strict';

import { apiKey } from "./apikey.js";

export const fetchData = function (URL, callback) {
      fetch(`${URL}&appid=${apiKey}`)
      .then((res) => {
            return res.json();
      })
      .then((data) => {
            callback(data);
      })
      .catch((e) => {
            console.error("API Fetch Error:", e);
      });
}

export const url = {
      currentWeather(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
      },
      forecast(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
      },
      airPollution(lat, lon) {
            return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
      },
      reverseGeo(lat, lon) {
            return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
      },
      geo (query) {
            return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
      }
}