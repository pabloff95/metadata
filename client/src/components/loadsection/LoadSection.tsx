import React, {useState} from 'react';
import Section from '../Section';
import LoadButton from './LoadButton';
import EditButton from './EditButton';
import { Dispatch } from 'react';

interface LoadSectionProps {
  loadFile:() => Promise<string>
  setMetadata:Dispatch<{}>;
  metadata:{}
  setEditSection:Dispatch<boolean>;  
}

const LoadSection: React.FC<LoadSectionProps> = ({setMetadata, metadata, setEditSection}) => {

  const [isReadOnlyActive, setBackToReadOnly] = useState(false);

  function isEditAllowed(metadata:{}){
    if (JSON.stringify(metadata) === '{}') {
      return false;
    }
    
    if (isReadOnlyActive) {
      return false;
    }

    return true;
  }

  if (isEditAllowed(metadata)){
    return (
      <Section width='w-4/12'>
          <LoadButton setMetadata={setMetadata}></LoadButton>          
          <EditButton metadata={metadata} setEditSection={setEditSection}></EditButton>
      </Section>
    );
  }

  if (isReadOnlyActive){
    return (
      <Section width='w-4/12'>
          <LoadButton setMetadata={setMetadata}></LoadButton>          
      </Section>
    );
  }

  return (
    <Section width='w-4/12'>
        <LoadButton setMetadata={setMetadata}></LoadButton>          
    </Section>
  );    
};

export default LoadSection;

