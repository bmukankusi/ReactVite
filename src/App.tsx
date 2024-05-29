
import React from 'react';
import ToggleButton from './Components/Button';
import ListGroup from './Components/Message';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import backgroundImage from './assets/react.svg'; // Import the image

const App: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white text-black flex flex-col">
      {/* Left side with background image */}
      <div
        className="bg-fit bg-no-repeat flex justify-between pt-3 height-100 dark:text-white text-black"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="p-4">
          <div className="flex flex-col space-y-4 p-4 float-start">
            <FaFacebook size={24} className="dark:text-white" />
            <FaTwitter size={24} className="dark:text-white" />
            <FaLinkedin size={24} className="dark:text-white" />
          </div>
        </div>
        <div className=''>
      <nav className="flex justify-end space-x-4 float-end me-3">
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
      </div>
      </div>
     
      
     {/* Right side with content */}
    
        <div className="p-4 w-1/4 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">MINIMALIST</h1>
          <q>Simplicity is the ultimate sophistication.</q>-Leonard da Vinci
        </div>
      
      <div className="w-1/4 p-4 text-xl flex-col"><ListGroup /></div>
    </div>
  );
};

export default App;
