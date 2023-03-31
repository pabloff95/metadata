import React from 'react';

interface ResultInputProps {
    dataKey:string;
    dataValue:string;
}

const ResultInput:React.FC<ResultInputProps> = ({dataKey, dataValue}) => {   
    return (
        <li  className='h-fit mx-2 max-w-sm'>
            {dataKey}: {dataValue}
        </li>
    );
}

export default ResultInput;