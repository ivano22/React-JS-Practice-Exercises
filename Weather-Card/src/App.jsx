
import WeatherCard from "./components/WeatherCard"
import './App.css'

function App() {

  const cities = [
    { city: "Kampala", temperature: 28, condition: "Sunny" },
    { city: "Fortportal", temperature: 23, condition: "Cloudy" },
    { city: "Kabale", temperature: 19, condition: "Rainy" },
    { city: "Arua", temperature: 34, condition: "Sunny" }
  ];
        
  return (
    <div>
      {cities.map((cityData, index) => {
        return (
          <WeatherCard
            key={index}
            city={cityData.city}
            temperature={cityData.temperature}
            condition={cityData.condition}
          />

        );
      })}
    </div>
  );
}

export default App
