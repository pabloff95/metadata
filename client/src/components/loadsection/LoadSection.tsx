import React from 'react';
import Section from '../Section';
import LoadButton from './LoadButton';
import LoadFileButton from './ReadMetadataButton';

interface LoadSectionProps {
  loadFile:() => Promise<string>
  setMetadata:any;
}

const LoadSection: React.FC<LoadSectionProps> = ({loadFile, setMetadata}) => {
  return (
    <Section>
        <LoadButton></LoadButton>
        <LoadFileButton loadFile={loadFile} setMetadata={setMetadata}></LoadFileButton>        
    </Section>
  );
};

export default LoadSection;

