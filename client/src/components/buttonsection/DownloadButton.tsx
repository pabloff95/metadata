import React from "react";
import BaseButton from "./BaseButton";

interface DownloadButtonProps{
    metadata: {[key: string]: string};
    file:File;
}

const DownloadButton:React.FC<DownloadButtonProps> = ({metadata, file}) => {

    async function onClickAction(){
        await uploadOriginalFile();           
        await saveUpdatedFile();
    }

    async function uploadOriginalFile():Promise<{}> {   
        const fileAsFormData:FormData = new FormData();        
        fileAsFormData.append('file', file);

        const requestOptions:{} = {            
            method: "POST",
            body: fileAsFormData
        }  
        
        return await fetch("http://localhost:5000/upload_file", requestOptions)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    async function saveUpdatedFile():Promise<void> {
        const requestOptions:{} = {            
            method: "GET",
            headers: {
                metadata: JSON.stringify(metadata),
                file: file.name,
                directory: ""
            }
        }
        
        const response:Response = await fetch("http://localhost:5000/get_updated_file", requestOptions);
        
        if(!response.ok){
            alert(`Error: file could not be saved`);
            return;
        }

        alert(`File saved in ${(await response.json()).file_location}`);
    }


    return (
        <BaseButton
            value="Download"
            onClickAction={onClickAction}
        ></BaseButton>
    );
}

export default DownloadButton;
