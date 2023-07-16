import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("Kathmandu");
  const [temp, setTemp] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=abab543b91799a3205816f129b725752`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTemp(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-blue-600 mt-[100px] text-[50px] font-bold animate-pulse">
          Check Weather !
        </h1>
        <div className="flex mt-[50px] justify-center bg-black">
          <input
            className="border-2 outline-none rounded-xl "
            autoFocus
            type="search"
            placeholder="search..."
            id="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            onClick={getWeatherInfo}
            type="button"
            className="bg-green-500 hover:bg-blue-300 px-2 rounded-xl"
          >
            Search
          </button>
        </div>
      </div>
      {/* our temp card */}
      <WeatherCard tempInfo={temp} />
    </>
  );
};
export default Temp;
