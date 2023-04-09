import React, {Dispatch} from "react";
import BaseButton from "./BaseButton";

interface BackToReadOnlyButtonProps {    
    setShowEditSection:Dispatch<boolean>;
    setReadOnly:Dispatch<boolean>;
    setEdit:Dispatch<boolean>;
}

const BackToReadOnlyButton: React.FC<BackToReadOnlyButtonProps> = ({setShowEditSection, setReadOnly, setEdit}) => {
    function onClickAction():void {
        setShowEditSection(false);
        setReadOnly(false);
        setEdit(true);   
    }

    return(
        <BaseButton 
            value="Back"
            onClickAction={onClickAction}
        ></BaseButton>
    )
}

export default BackToReadOnlyButton;