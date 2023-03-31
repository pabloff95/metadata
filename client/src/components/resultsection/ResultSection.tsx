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
    for (const dataKey in metadata) {
      const key = dataKey.split(":").length > 1? dataKey.split(":")[1]: dataKey;
      
      content.push(
        <ResultInput key={dataKey} dataKey={key} dataValue={metadata[dataKey]}></ResultInput>
      )
    }

    updateContent(<ul className='list-disc flex flex-col flex-wrap gap-1 h-full '>{content}</ul>);
  }

  useEffect(() => {
    getMetadataAsContent();
  }, [metadata]);

  return (
    <Section width="w-full">
      <div className="bg-gray-200 rounded p-4 w-full max-h-full">
        {content}
      </div>
    </Section>
  )
}

export default ResultSection;
