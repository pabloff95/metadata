import React, { useState } from 'react';

interface EditInputProps {
  valueKey: string;
  defaultValue: string;
}

const EditInput: React.FC<EditInputProps> = ({ valueKey, defaultValue }) => {
  const [value, updateValue] = useState<string>(defaultValue);

  return (
    <div className="flex items-center">
      <label className="w-32 min-w-fit font-bold">{valueKey}</label>
      <input
        className="border rounded-md px-3 py-2 flex-1"
        type="text"
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </div>
  );
};

export default EditInput;
