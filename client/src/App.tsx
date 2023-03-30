import { useState, useEffect } from 'react';
import LoadSection from './components/loadsection/LoadSection';
import ResultSection from './components/resultsection/ResultSection';
import EditSection from './components/editsection/EditSection';
import './index.css';

import {getMetadata} from "./components/loadsection/functionsLoadbutton";

function App() {  
  const [metadata, setMetadata] = useState<{[key: string]: string}>({});
  const [key, setKey] = useState("");
  const [showEditSection, setEditSection] = useState(false)

  useEffect(() => {
    setKey(JSON.stringify(metadata));
  }, [metadata]);

  if (showEditSection){
    return (
      <div className="flex flex-col justify-center">
        <header className='py-5 text-center'>
          <h1 className='text-2xl font-bold'>Metadata editor</h1>
        </header>
        <main className='flex flex-row gap-x-5 h-full p-5 w-full'>
          <LoadSection 
            loadFile={getMetadata} 
            setMetadata={setMetadata} 
            metadata={metadata} 
            setEditSection={setEditSection} />          
          <EditSection></EditSection>        
        </main>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center">
        <header className='py-5 text-center'>
          <h1 className='text-2xl font-bold'>Metadata editor</h1>
        </header>
        <main className='flex flex-row gap-x-5 h-full p-5 w-full'>
          <LoadSection 
            loadFile={getMetadata} 
            setMetadata={setMetadata} 
            metadata={metadata}
            setEditSection={setEditSection} />
          <ResultSection metadata={metadata} ></ResultSection>      
        </main>
      </div>
    );
  }
}

export default App;
