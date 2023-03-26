interface MetadataResponse {
    message:string;
}

export const getMetadata = async ():Promise<string> => {    
    const response:Promise<MetadataResponse> = await fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => data)
        .catch(console.error);       
    return ((await response).message[0]);    
}
