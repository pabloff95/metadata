import React from 'react';
import Section from '../Section';
import LoadButton from './LoadButton';
import LoadFileButton from './ReadMetadataButton';
import { Dispatch } from 'react';

interface LoadSectionProps {
  loadFile:() => Promise<string>
  setMetadata:Dispatch<{}>;
}

const LoadSection: React.FC<LoadSectionProps> = ({loadFile, setMetadata}) => {
  return (
    <Section>
        <LoadButton setMetadata={setMetadata}></LoadButton>
        <LoadFileButton loadFile={loadFile} setMetadata={setMetadata}></LoadFileButton>        
    </Section>
  );
};

export default LoadSection;

