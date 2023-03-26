import React from 'react';
import { useState, useEffect } from 'react';
import Section from '../Section';
import { ReactNode } from "react";

interface ResultSectionProps {
  metadata: {[key: string]: string};  
}

const ResultSection: React.FC<ResultSectionProps> = ({ metadata }) => {
  const [content, updateContent] = useState<ReactNode>([]);

  function getMetadataAsContent() {
    if (JSON.stringify(metadata) === '{}') {
      updateContent(<p>Load a file to see its metadata</p>);
      return;
    }

    let content: React.ReactNode[] = [];
    for (const dataKey in metadata) {
        if (!dataKey.includes(":")) {
            content.push(<li>{dataKey}: {metadata[dataKey]}</li>);            
            continue;
        }
        const newKey = dataKey.split(":")[1];
        content.push(<li>{newKey}: {metadata[dataKey]}</li>);
    }
    updateContent(<ul className='list-disc mx-2'>{content}</ul>);
  }

  useEffect(() => {
    getMetadataAsContent();
  }, [metadata]);

  return (
    <Section>
      <div className="bg-gray-200 rounded p-4 w-fit">
        {content}
      </div>
    </Section>
  )
}

export default ResultSection;
