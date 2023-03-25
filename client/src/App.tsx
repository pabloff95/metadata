import { useEffect, useState } from 'react';
import Section from './components/Section';
import LoadSection from './components/loadsection/LoadSection';
import ResultSection from './components/resultsection/ResultSection';
import './index.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(console.error);
  }, []);

 
  return (
    <div className="flex flex-col justify-center h-screen">
      <header className='py-5 text-center'>
        <h1 className='text-2xl font-bold'>Metadata editor</h1>
      </header>
      <main className='grid grid-cols-3 h-full p-5'>
        <LoadSection></LoadSection>
        <ResultSection message='hola'></ResultSection>
        <Section>
          <div className="bg-gray-200 rounded p-4 w-fit">
            <p>{message}</p>
          </div>   
        </Section>
        
      </main>
    </div>
  );
}

export default App;
