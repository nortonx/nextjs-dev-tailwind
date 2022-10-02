import React from 'react';
import MenuItem from './MenuItem';

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-end items-center">
      <nav className="w-full px-4">
        <ul className="flex flex-wrap justify-end">
          <MenuItem path="/">Home</MenuItem>
          <MenuItem path="/form">Form</MenuItem>
          <MenuItem path="/react-hook-form">React Hook Form</MenuItem>
          <MenuItem path="/about">About</MenuItem>
        </ul>
      </nav>
    </header>
  )
}

export default Header;