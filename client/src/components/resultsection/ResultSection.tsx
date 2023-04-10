import React from 'react';
import { useState, useEffect } from 'react';
import Section from '../Section';
import { ReactNode } from "react";
import ResultInput from './ResultInput';

interface ResultSectionProps {
  metadata: {[key: string]: string};  
}

const ResultSection: React.FC<ResultSectionProps> = ({ metadata }) => {
  const [content, updateContent] = useState<ReactNode>([]);

  function getMetadataAsContent():void {
    if (JSON.stringify(metadata) === '{}') {
      updateContent(<p>Load a file to see its metadata</p>);
      return;
    }

    let content: React.ReactNode[] = [];
    content.push(
      <div className="h-fit w-1/2 flex justify-center items-center gap-10 p-2 self-center font-bold bg-blue-500 text-white" key="result-header">
        <div className='w-1/2 text-left pl-1'>METADATA</div>
        <div className='w-1/2 p-1'>VALUE</div>
      </div>)
      
    let index=0;
    for (const dataKey in metadata) {
      const key = dataKey.split(":").length > 1? dataKey.split(":")[1]: dataKey;
      const rowBgStyle = index++ % 2 === 0? "bg-sky-200" : "bg-sky-50";
      
      content.push(
        <ResultInput 
          key={dataKey} 
          dataKey={key} 
          dataValue={metadata[dataKey]}
          bgStyle={rowBgStyle}
        ></ResultInput>
      )      
    }

    updateContent(<div className='flex flex-col h-full'>{content}</div>);
  }

  useEffect(() => {
    getMetadataAsContent();
  }, [metadata]);

  return (
    <Section extendClass="w-full">
      <div className="rounded p-4 w-full max-h-full">
        {content}
      </div>
    </Section>
  )
}

export default ResultSection;
