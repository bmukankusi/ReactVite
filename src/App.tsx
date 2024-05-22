// src/App.tsx
import React from 'react';
import ToggleButton from './Button';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import backgroundImage from './assets/background.png'; // Import the image

const App: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white text-black flex">
      {/* Left side with background image */}
      <div
        className="w-2/4 h-auto bg-fit bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-4">
          <div className="flex flex-col space-y-4 p-4">
            <FaFacebook size={24} className="dark:text-white" />
            <FaTwitter size={24} className="dark:text-white" />
            <FaLinkedin size={24} className="dark:text-white" />
          </div>
        </div>
      </div>

     {/* Right side with content */}
      <div className="w-3/4 p-4">
        <nav className="flex justify-end items-center space-x-4">
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#about" className="hover:underline">About us</a>
          <a href="#project" className="hover:underline">Shop</a>
          <a 
            href="#home" 
            className="hover:underline px-4 py-2 rounded-s-md border border-black dark:border-white"
          >
            Home
          </a>
          <ToggleButton />
        </nav>
        <div className="p-4 w-1/4">
          <h1 className="text-3xl font-bold mb-4">MINIMALIST</h1>
          <q>Simplicity is the ultimate sophistication.</q>-Leonard da Vinci
        </div>
      </div>
    </div>
  );
};

export default App;
