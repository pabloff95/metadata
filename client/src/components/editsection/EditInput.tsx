import React, { Dispatch, useState } from 'react';

interface EditInputProps {
  originalKey:string;
  valueKey: string;
  defaultValue: string;
  setMetadata:Dispatch<{}>;
  metadata: {[key: string]: string};  
  bgStyle:string;
}

const EditInput: React.FC<EditInputProps> = ({ originalKey, valueKey, defaultValue, metadata, setMetadata, bgStyle }) => {
  const [value, updateValue] = useState<string>(defaultValue);

  function onChangeAction(event:React.ChangeEvent<HTMLInputElement>) {
    const newValue:string = event.target.value;

    updateValue(newValue);

    let newMetadata:{[key: string]: string} = {... metadata};
    newMetadata[originalKey] = newValue;
    
    setMetadata(newMetadata);
  }

  return (
    <div className={`h-fit w-1/2 flex justify-center items-center gap-10 p-2 self-center ${bgStyle}`}>
      <label className="w-1/2 font-bold text-left pl-1">{valueKey}</label>
      <input
        className="w-1/2 border rounded-md p-1"
        type="text"
        value={value}
        onChange={onChangeAction}        
      />
    </div>
  );
};

export default EditInput;
