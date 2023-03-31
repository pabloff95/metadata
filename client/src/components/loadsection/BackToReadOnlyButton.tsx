import React, {Dispatch} from "react";

interface BackToReadOnlyButtonProps {
    setBackToReadOnly:Dispatch<boolean>;
}

const BackToReadOnlyButton: React.FC<BackToReadOnlyButtonProps> = ({setBackToReadOnly}) => {
    return(
        <button 
            type="button"
            className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
            onClick={() => {
                setBackToReadOnly(true);
            }}
        >
            Back
        </button>
    )
}

export default BackToReadOnlyButton;