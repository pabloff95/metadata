import React from "react";

interface BaseButtonProps{
    value:string;
    onClickAction:()=> void;
}

const BaseButton:React.FC<BaseButtonProps> = ({value, onClickAction}) => {
    return (
        <button 
            type="button"
            className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 cursor-pointer"
            onClick={onClickAction}
        >
            {value}
        </button>
    )
}

export default BaseButton;