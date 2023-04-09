import { useState, useEffect } from 'react';
import LoadSection from './components/loadsection/LoadSection';
import ResultSection from './components/resultsection/ResultSection';
import EditSection from './components/editsection/EditSection';
import './index.css';


function App() {  
  const [metadata, setMetadata] = useState<{[key: string]: string}>({});
  const [key, setKey] = useState("");
  const [isEditSectionDisplayed, setShowEditSection] = useState(false);

  useEffect(() => {
    setKey(JSON.stringify(metadata));
  }, [metadata]);
 
  return (
    <div className="flex flex-col justify-center">
      <header className='py-5 text-center'>
        <h1 className='text-2xl font-bold'>Metadata editor</h1>
      </header>
      <main className='flex flex-col gap-x-5 h-full p-5 w-full'>
        <LoadSection 
          metadata={metadata} 
          setMetadata={setMetadata}             
          setShowEditSection={setShowEditSection}/>     
        {isEditSectionDisplayed?
          <EditSection 
            metadata={metadata} 
            setMetadata={setMetadata}
          ></EditSection>
        :
          <ResultSection 
            metadata={metadata} 
          ></ResultSection>
        }             
      </main>
    </div>
  );
}

export default App;
