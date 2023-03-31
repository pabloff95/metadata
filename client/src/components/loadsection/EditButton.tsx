import React, {Dispatch} from "react";

interface EditButtonProps {
    metadata:{};
    setEditSection:Dispatch<boolean>;
}


const EditButton: React.FC<EditButtonProps> = ({metadata, setEditSection}) => {
    return (
        <button 
            type="button" 
            className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
            onClick={() => {              
                setEditSection(true);                
            }}
        >
            Edit
        </button>
    );
}

export default EditButton;