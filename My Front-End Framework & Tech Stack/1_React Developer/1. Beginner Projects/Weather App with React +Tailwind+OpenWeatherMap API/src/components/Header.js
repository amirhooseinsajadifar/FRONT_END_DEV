import React from 'react';
import { Icon } from '@iconify/react';
import weatherIcon from '@iconify-icons/wi/day-sunny';

const Header = () => {
  return (
    <header className="flex items-center justify-center py-6 bg-blue-500 text-white shadow-md">
      <Icon icon={weatherIcon} width="36" height="36" className="mr-3" />
      <h1 className="text-2xl font-bold">React Weather App</h1>
    </header>
  );
};

export default Header;