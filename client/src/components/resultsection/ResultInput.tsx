import React from 'react';

interface ResultInputProps {
    dataKey:string;
    dataValue:string;
    bgStyle:string;
}

const ResultInput:React.FC<ResultInputProps> = ({dataKey, dataValue, bgStyle}) => {   
  return (
    <div className={`h-fit w-1/2 flex justify-center items-center gap-10 p-2 self-center ${bgStyle}`}>
      <div className='w-1/2 font-bold text-left pl-1'>{dataKey}</div>
      <div className='w-1/2 p-1'>{dataValue}</div>
    </div>
  );
}

export default ResultInput;