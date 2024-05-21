import React from 'react';
import Button from './Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-4">
      <h1 className="flex justify-center text-3xl font-bold mb-4 text-blue-300">Hello, world!</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;