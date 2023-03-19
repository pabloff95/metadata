import React from 'react';
import '../index.css';

interface LoadButtonProps {
  name: string;
  className?: string;
}

const LoadButton: React.FC<LoadButtonProps> = ({ name }) => {
  return (
    <button 
      type='button'
      className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      value={name}>      
        {name}
    </button>
  );
};

export default LoadButton;
