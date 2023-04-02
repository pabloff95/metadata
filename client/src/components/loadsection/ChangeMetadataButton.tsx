import React from "react";
import BaseButton from "./BaseButton";

interface ChangeMetadataButtonProps{
    metadata: {[key: string]: string};
    file:File;
}

const ChangeMetadataButton:React.FC<ChangeMetadataButtonProps> = ({metadata, file}) => {

    async function onClickAction(){
        await uploadOriginalFile();
        getUpdatedFile();
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

    async function getUpdatedFile():Promise<{}> {
        const requestOptions:{} = {            
            method: "GET",
            headers: {
                metadata: JSON.stringify(metadata),
                file: file.name
            }
        }
        
        return await fetch("http://localhost:5000/get_updated_file", requestOptions)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    return (
        <BaseButton
            value="Change Metadata"
            onClickAction={onClickAction}
        ></BaseButton>
    );
}

export default ChangeMetadataButton;