import React, { Dispatch, useState } from 'react';

interface EditInputProps {
  originalKey:string;
  valueKey: string;
  defaultValue: string;
  setMetadata:Dispatch<{}>;
  metadata: {[key: string]: string};  
}

const EditInput: React.FC<EditInputProps> = ({ originalKey, valueKey, defaultValue, metadata, setMetadata }) => {
  const [value, updateValue] = useState<string>(defaultValue);

  function onChangeAction(event:React.ChangeEvent<HTMLInputElement>) {
    const newValue:string = event.target.value;

    updateValue(newValue);

    let newMetadata:{[key: string]: string} = {... metadata};
    newMetadata[originalKey] = newValue;
    
    setMetadata(newMetadata);
  }

  return (
    <div className="flex items-center">
      <label className="w-32 min-w-fit font-bold">{valueKey}</label>
      <input
        className="border rounded-md px-3 py-2 flex-1"
        type="text"
        value={value}
        onChange={onChangeAction}        
      />
    </div>
  );
};

export default EditInput;
