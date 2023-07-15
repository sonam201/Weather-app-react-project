import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsSunFill } from "react-icons/bs";
import {
  WiHumidity,
  WiNightAltCloudyWindy,
  WiStrongWind,
} from "react-icons/wi";

const WeatherCard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div>
      <div>
        <div className="bg-gray-600 rounded-xl mx-[450px]">
          <div className=" flex justify-center mt-[20px]">
            <TiWeatherPartlySunny className="h-[50px] w-[100%]" />
          </div>
          <div className="flex  mt-5">
            <div className="flex py-5 gap-10 bg-white px-5  w-full ">
              <h1 className="mt-3 text-[25px] font-bold">{temp}</h1>
              <div>
                <h1 className="text-[25px]">Sunny</h1>
                <h1>
                  {name},{country}
                </h1>
              </div>
            </div>
            <div className="bg-blue-400 py-5 w-full text-[20px] font-bold">
              <h1>7/15/2023</h1>
              <h1>4:03:03 PM</h1>
            </div>
          </div>
          <div className="my-4 flex justify-between mx-2 pb-3">
            <div className="flex gap-3">
              <BsSunFill className="mt-3 h-5 w-5" />
              <div>
                <h1 className="text-[13px]">{timeStr}</h1>
                <h1 className="text-[13px]">Sunset</h1>
              </div>
            </div>
            <div className="flex gap-3">
              <WiHumidity className="mt-3  h-5 w-5" />
              <div>
                <h1 className="text-[13px]">{humidity}</h1>
                <h1 className="text-[13px]">Humidity</h1>
              </div>
            </div>
            <div className="flex gap-3">
              <WiNightAltCloudyWindy className="mt-3  h-5 w-5" />
              <div>
                <h1 className="text-[13px]">{pressure}</h1>
                <h1 className="text-[13px]">Pressure</h1>
              </div>
            </div>
            <div className="flex gap-3">
              <WiStrongWind className="mt-3  h-5 w-5" />
              <div>
                <h1 className="text-[13px]">{speed}</h1>
                <h1 className="text-[13px]">Speed</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
