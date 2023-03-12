import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Swot = () => {

  const navigate = useNavigate();

    const questions = {
        strength: [
          "S1. What are we especially Good at?(Department/College)",
          "S2. What do our Competitors fear about us?",
          "S3.What helps us to get New Customers?",
          "S4. What aspects of our Organizational Culture  are especially helpful to us? ",
        ],
        weakness: [
          "W5. What could put us out of Market if we are not careful?",
          "W6. What really bothers our existing Customers about us?",
          "W7. What does everyone agree we need to improve?",
          "W8. What do newly recruited staff think we need to improve?",
        ],
        opportunities: [
          "O9. What new Services are our Customers asking for? ",
          "O10.What weakness do our competitors have that  we can exploit?",
          "O11. What Emerging Technologies could assist us?",
          "O12 What unmet needs in the Market place can we take advantage of?",
        ],
        threat: [
          "T13. Where are our Costs increasing the fastest? ",
          "T14. What are our biggest Categories of Complaints from Customers?",
          "T15. What legal or regulatory issues have the potential to destroy us?",
          "T16. Where do we need more knowledge and training?",
        ]
      };
    
      const [strengths, setStrengths] = useState('');
      const [weaknesses, setWeaknesses] = useState('');
      const [opportunities, setOpportunities] = useState('');
      const [threats, setThreats] = useState('');
      const data=[];
    
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
        
        let i=0;
        data.push(lines);
        setter(lines.join('\n'));
        setData(lines.join('\n'));
      
      }
    
    
    
      const [selectedOption, setSelectedOption] = useState("strength");
      const[data1,setData]=useState([])
    
      const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data1);
        navigate("/home");
      };
    


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
      <div className='pt-4 pb-2 grid grid-rows-1 grid-cols-2 gap-7'>
          <label htmlFor="options" className="block font-medium text-lg">
      Choose the category of SWOT:
    </label>
    <select
      id="options"
      name="options"
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      <option value="strength" className="font-semibold">Strength</option>
      <option value="weakness" className="font-semibold">Weakness</option>
      <option value="opportunities" className="font-semibold">Opportunities</option>
      <option value="threat" className="font-semibold">Threat</option>
    </select>
      </div>

      <div className=" grid grid-rows-2 grid-cols-2 gap-10 w-5/3 ">
        
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[selectedOption][0]}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={strengths}
            onChange={(event) => handleInput(event, setStrengths)} required
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[selectedOption][1]}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={weaknesses}
            onChange={(event) => handleInput(event, setWeaknesses)}
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[selectedOption][2]}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={opportunities}
            onChange={(event) => handleInput(event, setOpportunities)}
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[selectedOption][3]}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            value={threats}
            onChange={(event) => handleInput(event, setThreats)}
          />
        </div>
      </div>

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded"
      onClick={handleSubmit}
    >
      Submit
    </button>

      </div>
  )
}

export default Swot
