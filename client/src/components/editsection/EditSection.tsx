import React, { useState, useEffect } from 'react';
import Section from '../Section';
import { ReactNode } from "react";
import EditInput from './EditInput';

interface EditSectionProps {
  metadata: {[key: string]: string};  
}

const EditSection: React.FC<EditSectionProps> = ({metadata}) => {
  const [content, updateContent] = useState<ReactNode>([]);

  function getMetadataAsEditContent():void {
    if (JSON.stringify(metadata) === '{}') {
      updateContent(<p>Preparing metadata edit form</p>);
      return;
    }

    let content:React.ReactNode[] = [];
    for (const dataKey in metadata) {
      const key = dataKey.split(":").length > 1? dataKey.split(":")[1] : dataKey;

      content.push(
        <EditInput key={key} valueKey={key} defaultValue={metadata[dataKey]}></EditInput>
      )
    }

    updateContent(<form className='flex flex-col flex-wrap gap-5 h-full'>{content}</form>);
  }

  useEffect(() => {
    getMetadataAsEditContent()
  },  [metadata])

  return (
    <Section width="w-full">
      <div className="bg-gray-200 rounded p-4 w-full max-h-full">
        {content}
      </div>
    </Section>
  )
}

export default EditSection;
