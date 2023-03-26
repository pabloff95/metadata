import { useState, useEffect } from 'react';
import Section from './components/Section';
import LoadSection from './components/loadsection/LoadSection';
import ResultSection from './components/resultsection/ResultSection';
import './index.css';

import {getMetadata} from "./components/loadsection/functionsLoadbutton";

function App() {  
  const [metadata, setMetadata] = useState<{[key: string]: string}>({});
  const [key, setKey] = useState("");

  useEffect(() => {
    setKey(JSON.stringify(metadata));
  }, [metadata]);

  return (
    <div className="flex flex-col justify-center">
      <header className='py-5 text-center'>
        <h1 className='text-2xl font-bold'>Metadata editor</h1>
      </header>
      <main className='grid grid-cols-3 h-full p-5'>
        <LoadSection loadFile={getMetadata} setMetadata={setMetadata} />
        <ResultSection metadata={metadata} ></ResultSection>
        <Section>
          <div className="bg-gray-200 rounded p-4 w-fit">
            <p></p>
          </div>   
        </Section>
        
      </main>
    </div>
  );
}

export default App;
