import React, {useState, ReactElement, useEffect, Dispatch} from 'react';
import Section from '../Section';
import LoadButton from './LoadButton';
import EditButton from './EditButton';
import BackToReadOnlyButton from './BackToReadOnlyButton';
import ClearButton from './ClearButton';
import ChangeMetadataButton from './ChangeMetadataButton';

interface LoadSectionProps {
  metadata: {[key: string]: string};  
  setMetadata:Dispatch<{}>;  
  setShowEditSection:Dispatch<boolean>;  
}

const LoadSection: React.FC<LoadSectionProps> = ({setMetadata, setShowEditSection, metadata}) => {

  const [fileSelected, setFileSelected] = useState(new File([], "No file loaded yet"));
  const [isReadOnlyActive, setReadOnly] = useState(false);
  const [isEditAllowed, setEdit] = useState(false);
  const [isClearSelected, setClear] = useState(false);

  // Reset everything on click in clear button
  useEffect(() => {
    setReadOnly(false);
    setEdit(false);
    setShowEditSection(false);
    setMetadata({});
    setFileSelected(new File([], "No file loaded yet"));
    setClear(false);
  }, [isClearSelected])

  // Get additional button
  let button:ReactElement = <></>;
  if (isEditAllowed){
    button = <EditButton 
              setShowEditSection={setShowEditSection} 
              setReadOnly={setReadOnly}
              setEdit={setEdit}
            ></EditButton>
  }

  if (isReadOnlyActive){
    button =<BackToReadOnlyButton
              setShowEditSection={setShowEditSection} 
              setReadOnly={setReadOnly}
              setEdit={setEdit}
            ></BackToReadOnlyButton> 
  }

  // Render component
  return (
    <Section extendClass='w-full flex flex-row justify-between border-transparent'>  
      <div>
        <LoadButton 
          setMetadata={setMetadata} 
          setEdit={setEdit}
          setFileSelected={setFileSelected}
          fileSelected={fileSelected.name}
        ></LoadButton>   
      </div>    
      
      <div className='flex flex-row gap-2'>
        {isEditAllowed && 
          <EditButton 
            setShowEditSection={setShowEditSection} 
            setReadOnly={setReadOnly}
            setEdit={setEdit}
          ></EditButton>
        }

        {isReadOnlyActive && 
          <BackToReadOnlyButton
            setShowEditSection={setShowEditSection} 
            setReadOnly={setReadOnly}
            setEdit={setEdit}
          ></BackToReadOnlyButton>
        }
               
        {isReadOnlyActive && 
          <ChangeMetadataButton
            file={fileSelected}
            metadata={metadata}
          ></ChangeMetadataButton>
        }

        {(isEditAllowed || isReadOnlyActive) && 
          <ClearButton
            setClear={setClear}
          ></ClearButton>
        }
      </div>
    </Section>    
  );    
};

export default LoadSection;

