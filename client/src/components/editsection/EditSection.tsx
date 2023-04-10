import React, { useState, useEffect, Dispatch } from 'react';
import Section from '../Section';
import { ReactNode } from "react";
import EditInput from './EditInput';

interface EditSectionProps {
  metadata: {[key: string]: string};  
  setMetadata:Dispatch<{}>;  
}

const EditSection: React.FC<EditSectionProps> = ({metadata, setMetadata}) => {
  const [content, updateContent] = useState<ReactNode>([]);

  function getMetadataAsEditContent():void {
    if (JSON.stringify(metadata) === '{}') {
      updateContent(<p>Preparing metadata edit form</p>);
      return;
    }

    let content:React.ReactNode[] = [];
    content.push(
      <div className="h-fit w-1/2 flex justify-center items-center gap-10 p-2 self-center font-bold bg-blue-500 text-white" key="result-header">
        <div className='w-1/2 text-left pl-1'>METADATA</div>
        <div className='w-1/2 p-1'>VALUE</div>
      </div>)
      
    let index=0;
    for (const dataKey in metadata) {
      const key = dataKey.split(":").length > 1? dataKey.split(":")[1] : dataKey;
      const rowBgStyle = index++ % 2 === 0? "bg-sky-200" : "bg-sky-50";

      content.push(
        <EditInput 
          key={dataKey}
          originalKey={dataKey} 
          valueKey={key} 
          defaultValue={metadata[dataKey]}
          metadata={metadata}
          setMetadata={setMetadata}
          bgStyle={rowBgStyle}
        ></EditInput>
      )
    }

    updateContent(<form className='flex flex-col h-full'>{content}</form>);
  }

  useEffect(() => {
    getMetadataAsEditContent()
  },  [metadata])

  return (
    <Section extendClass="w-full">
      <div className="rounded p-4 w-full max-h-full">
        {content}
      </div>
    </Section>
  )
}

export default EditSection;
