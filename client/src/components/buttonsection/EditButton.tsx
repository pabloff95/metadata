import React, {Dispatch} from "react";
import BaseButton from "./BaseButton";

interface EditButtonProps {    
    setShowEditSection:Dispatch<boolean>;
    setReadOnly:Dispatch<boolean>;
    setEdit:Dispatch<boolean>;
}

const EditButton: React.FC<EditButtonProps> = ({setShowEditSection, setReadOnly, setEdit}) => {

    function onClickAction():void {
        setShowEditSection(true);     
        setReadOnly(true);
        setEdit(false);
    }

    return (
        <BaseButton 
            value="Edit"
            onClickAction={onClickAction}
        ></BaseButton>
    );
}

export default EditButton;