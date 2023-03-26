import React from 'react';

interface ReadMetadataButtonProps {  
  loadFile:()=> Promise<string>;
  className?: string;
  setMetadata:any;
}

const ReadMetadataButton: React.FC<ReadMetadataButtonProps> = ({loadFile, setMetadata }) => {
  return (
    <button 
      type='button'
      className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={async () => {
        const metadataResult:string = await loadFile();
        setMetadata(metadataResult);
      }}
    >      
      Get Metadata
    </button>
  );
};

export default ReadMetadataButton;
