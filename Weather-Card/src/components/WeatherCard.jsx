import { Cloud, Sun, CloudRain } from 'lucide-react';

// Weather icon mapping
const weatherIcons = {
    Sunny: Sun, 
    Cloudy: Cloud,
    Rainy: CloudRain,
 
};
  //Weather Card component
function WeatherCard( {city, temperature, condition}) {
    const WeatherIcon = weatherIcons[condition] || Sun;
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-100 m-2 flex items-center mx-auto mt-10">
            <div className="mr-4">
                {/* Weather icon components from lucide react */}
            <WeatherIcon size={55} className="text-blue-500"  />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{city}</h2>
            <p className="text-gray-600 p-6"> {temperature}°C</p>
            <p className="text-2xl font-semibold text-blue-600">{ condition}</p>
        </div>
    
);

}

 


export default WeatherCard;