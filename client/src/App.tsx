import { useState, useEffect } from 'react';
import ButtonSection from './components/buttonsection/ButtonSection';
import ReadDataSection from './components/readdatasection/ReadDataSection';
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
    <div className="flex flex-col  bg-slate-100 min-h-screen">
      <header className='py-5 text-center'>
        <h1 className='text-3xl font-bold text-gray-900 leading-tight mb-4'>Metadata editor</h1>
      </header>
      <main className='flex flex-col gap-x-5 h-full p-5 w-full'>
        <ButtonSection 
          metadata={metadata} 
          setMetadata={setMetadata}             
          setShowEditSection={setShowEditSection}/>     
          
        {isEditSectionDisplayed?
          <EditSection 
            metadata={metadata} 
            setMetadata={setMetadata}
          ></EditSection>
        :
          <ReadDataSection 
            metadata={metadata} 
          ></ReadDataSection>
        }             
      </main>
    </div>
  );
}

export default App;
