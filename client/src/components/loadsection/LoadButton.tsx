import React, { useState } from 'react';

interface LoadButtonProps {  
}

const LoadButton: React.FC<LoadButtonProps> = ({}) => {
    const [fileSelected, setFileSelected] = useState("No file loaded yet");

    function updateFileSelected(event:React.ChangeEvent<HTMLInputElement>){ 
        if (!event.target.files){
            return;
        }       
        setFileSelected(event.target.files[0].name)
    }

    return (
        <div>
            <input           
                type="file"
                id='load-file-btn'   
                onChange={(event) => updateFileSelected(event)}                
                hidden
            />
            <label 
                className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" 
                htmlFor="load-file-btn"
            >
                Load File
            </label>
            <div className='mt-2'>
                <p className='text-sm italic text-neutral-400'>{fileSelected}</p>
            </div>
        </div>
    );
};

export default LoadButton;
