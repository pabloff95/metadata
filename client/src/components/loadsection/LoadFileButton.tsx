import React from 'react';
import {getMetadata} from "./functionsLoadbutton";

interface LoadFileButtonProps {
  name: string;
  className?: string;
}

const LoadFileButton: React.FC<LoadFileButtonProps> = ({ name }) => {
  return (
    <button 
      type='button'
      className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={getMetadata}
      value={name}>      
        {name}
    </button>
  );
};

export default LoadFileButton;
