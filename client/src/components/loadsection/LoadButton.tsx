import React, { useState } from 'react';
import { Dispatch } from 'react';

interface LoadButtonProps {
    setMetadata:Dispatch<{}>;
}

const LoadButton: React.FC<LoadButtonProps> = ({setMetadata}) => {
    const [fileSelected, setFileSelected] = useState("No file loaded yet");

    async function getFileMetadata(event:React.ChangeEvent<HTMLInputElement>):Promise<{}> {
        const responseUploadFile = await uploadFile(event);
        
        if (!responseUploadFile.file_name) {
            return []
        }

        const metadata:{message:string} = await getUploadedFileMetadata(responseUploadFile.file_name);
        
        return metadata.message[0];
    }

    async function uploadFile(event:React.ChangeEvent<HTMLInputElement>):Promise<{file_name:string | null}>{
        if (!event.target.files){
            return {file_name: null};
        }

        const file:File = event.target.files[0];        
        setFileSelected(file.name);
        
        const fileAsFormData:FormData = new FormData();
        fileAsFormData.append('file', file);
        
        const requestOptions:{} = {            
            method: "POST",
            body: fileAsFormData
        }
        
        return await fetch("http://localhost:5000/upload", requestOptions)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    async function getUploadedFileMetadata(fileName:string):Promise<{message:string}>{
        const requestOptions:{} = {            
            method: "GET",
            headers: {
                file: fileName
            }
        }

        const metadataResponse:Response = await fetch("http://localhost:5000/get_file_metadata", requestOptions);

        if (!metadataResponse.ok) {
            const error:string = "Error while retrieving the metadata from the server";
            console.error(error);
            return {message: error};
        }

        return await metadataResponse.json();
    }
    

    return (
        <div>
            <input           
                type="file"
                id='load-file-btn'   
                onChange={async (event) => {
                        const metadata:{} = await getFileMetadata(event);
                        setMetadata(metadata);
                    }
                }                
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
