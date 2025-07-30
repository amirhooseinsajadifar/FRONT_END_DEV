import React from 'react';
import { Icon } from '@iconify/react';
import daySunny from '@iconify-icons/wi/day-sunny';
import rain from '@iconify-icons/wi/rain';
import snow from '@iconify-icons/wi/snow';

const WeatherCard = ({ weather }) => {
  // Map weather condition to icon
  const getIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return daySunny;
      case 'rain':
      case 'drizzle':
        return rain;
      case 'snow':
        return snow;
      default:
        return daySunny;
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
      <Icon icon={getIcon(weather.condition)} width="80" height="80" className="mx-auto text-yellow-400" />
      <h2 className="mt-4 text-xl font-semibold">{weather.city}</h2>
      <p className="text-4xl font-bold">{weather.temperature}°C</p>
      <p className="text-gray-600">{weather.condition}</p>
    </div>
  );
};

export default WeatherCard;