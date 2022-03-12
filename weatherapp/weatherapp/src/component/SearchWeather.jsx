import React, { useEffect, useState } from "react";

const SearchWeather = () => {
  const [search, setSearch] = useState("London");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=045f1bb862597699bbbd0d2341966e95`
      );
      if (componentMounted) {
        setData(await response.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, []);
  let emoji = null;
  if (typeof data.main != "undefined") {
    if (data.weather[0].main == "Clouds") {
      emoji = "fa-cloud";
    } else if (data.weather[0].main == "Thunderstrom") {
      emoji = "fa-bolt";
    } else if (data.weather[0].main == "Drizzle") {
      emoji = "fa-cloud-rain";
    } else if (data.weather[0].main == "Rain") {
      emoji = "fa-cloud-shower-heavy";
    } else if (data.weather[0].main == "Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smog";
    }
  } else {
    return <div>...Loading</div>;
  }

  let temp = (data.main.temp - 273.15).toFixed(2);
  let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  let temp_max = (data.main.temp_max - 273.15).toFixed(2);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="bg-dark text-white border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                alt="..."
                className="card-img"
              />
              <form>
                <div className="input-group mb-4 w-75 mx-auto bg-opacity-50 py-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search city"
                    aria-label="Search city"
                    aria-describedby="basic-addon2"
                  />
                  <button
                    type="submit"
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
              <div className="bg-dark bg-opacity-50 py-3 "></div>
              <h5 className="card-title">{data.name}</h5>
              <p class="card-text lead">Saturday, 12 March,2022</p>
              <hr />
              <i className={`fas {emoji}fa-4x`}></i>
              <h1 className="fw-bolder mb-5">{data.weather[0].main} &deg;C</h1>
              <p className="lead fw-bolder mb-0">Cloud</p>
              <p className="lead">
                {temp_min}&deg;C | {temp_max}&deg;C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
