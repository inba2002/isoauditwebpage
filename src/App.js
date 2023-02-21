import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [strengths, setStrengths] = useState('');
  const [weaknesses, setWeaknesses] = useState('');
  const [opportunities, setOpportunities] = useState('');
  const [threats, setThreats] = useState('');

  function handleInput(event, setter) {
    const newValue = event.target.value;
    const lines = newValue.split('\n');
    let numBulletPoints = 0;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('\u2022 ')) {
        numBulletPoints++;
      }
    }

    

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].startsWith('\u2022 ')) {
        lines[i] = '\u2022 ' + lines[i];
      }
      if (lines.length > 5) {
        return;
      }
    }
   

    setter(lines.join('\n'));
  
  }

  return (
    <div className="mt-10 h-screen flex flex-col items-center space-y-[10px]">
      <h1 className="text-3xl font-medium mb-4 ">SWOT QUESTIONNAIRE</h1>
      <div className="grid grid-cols-2 gap-3">
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Organization Name:</h2>
        <input type="text" id="orgname" name="organizationname" className="border border-gray-400 p-1 rounded-md" />
      </div>
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Date:</h2>
        <input type="text" id="date" name="date" className="border border-gray-400 p-1 rounded-md" />
      </div>
      </div>
      <div className="grid grid-cols-2 gap-3 ">
      <div className="grid grid-cols-2">
        <h2 className="text-lg font-medium mb-1">Staff Name:</h2>
        <input type="text" id="staff" name="staffname" className="border border-gray-400 p-1 rounded-md" />
      </div>
      <div className="grid grid-cols-2">
        <h2 className="text-lg font-medium mb-2">Department:</h2>
        <input type="text" id="department" name="department" className="border border-gray-400 p-1 rounded-md" />
      </div>
      </div>
      
      <div className=" grid grid-rows-2 gap-4 w-1/2 ">
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">S1. What are we especially Good at?(Department/College)</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={strengths}
            onChange={(event) => handleInput(event, setStrengths)} required
          />
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">S2. What do our Competitors fear about us?</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={weaknesses}
            onChange={(event) => handleInput(event, setWeaknesses)}
          />
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">S3.What helps us to get New Customers?</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={opportunities}
            onChange={(event) => handleInput(event, setOpportunities)}
          />
        </div>
        <div >
          <h2 className="text-lg font-medium mb-2">S4. What aspects of our Organizational Culture  are especially helpful to us?</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={threats}
            onChange={(event) => handleInput(event, setThreats)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
