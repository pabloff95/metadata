import React, { Dispatch } from "react";
import BaseButton from "./BaseButton";

interface ClearButtonProps {
    setClear:Dispatch<boolean>;
}

const ClearButton: React.FC<ClearButtonProps> = ({setClear}) => {    
    function onClickAction():void {
        setClear(true);
    }

    return (
        <BaseButton 
            value="Clear" 
            onClickAction={onClickAction}
        ></BaseButton>
    )
}

export default ClearButton;