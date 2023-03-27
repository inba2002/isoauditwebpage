import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Swot = () => {

  var date=new Date();
  var currentdate=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();

  const navigate = useNavigate();

    const questions = {
        strength: [
          {q:"S1. What are we especially Good at?(Department/College)",ans:""},
          {q:"S2. What do our Competitors fear about us?",ans:""},
          {q:"S3.What helps us to get New Customers?",ans:""},
          {q:"S4. What aspects of our Organizational Culture  are especially helpful to us?",ans:""},
        ],
        weakness: [
          {q:"W5. What could put us out of Market if we are not careful?",ans:""},
          {q:"W6. What really bothers our existing Customers about us?",ans:""},
          {q:"W7. What does everyone agree we need to improve?",ans:""},
          {q:"W8. What do newly recruited staff think we need to improve?",ans:""},
        ],
        opportunities: [
          {q:"O9. What new Services are our Customers asking for?",ans:""},
          {q:"O10.What weakness do our competitors have that  we can exploit?",ans:""},
          {q:"O11. What Emerging Technologies could assist us?",ans:""},
          {q:"O12 What unmet needs in the Market place can we take advantage of?",ans:""},
        ],
        threat: [
          {q:"T13. Where are our Costs increasing the fastest?",ans:""},
          {q:"T14. What are our biggest Categories of Complaints from Customers?",ans:""},
          {q:"T15. What legal or regulatory issues have the potential to destroy us?",ans:""},
          {q:"T16. Where do we need more knowledge and training?",ans:""},
        ]
      };

      const allquestions=["strength","weakness","opportunities","threat"];
      const [inputValues, setInputValues] = useState({});
    
      const [index,setIndex]=useState(0);
      const [strengths, setStrengths] = useState('');
      const [weaknesses, setWeaknesses] = useState('');
      const [opportunities, setOpportunities] = useState('');
      const [threats, setThreats] = useState('');
      const data=[];
    
      function handleInput(event) {
        const { name, value } = event.target;
        setInputValues((prevInputValues) => ({
          ...prevInputValues,
          [name]: value,
        }));
      }

      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          setInputValues((prevValue) => prevValue + "\n\u2022 ");
        }
      };
    
    
    
      const [selectedOption, setSelectedOption] = useState("strength");
      const[data1,setData]=useState([])
    
      const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        for(let i=0; i<4; i++){
          for(let j=0; j<4; j++){
          console.log(questions[allquestions[i]][j].ans);
        }}
        console.log(data1);
      };
    


  return (
    <div className="mt-10 h-screen flex flex-col items-center space-y-[10px]">
      <h1 className="text-3xl font-medium">SWOT QUESTIONNAIRE</h1>
      <div className="flex items-center justify-center py-3">
      <h2 className="text-2xl font-medium pr-2">Academic Year:</h2>
      <h2 className="text-2xl font-medium">2022-2023</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Organization Name:</h2>
        <input type="text" id="orgname" name="organizationname" className="border border-gray-400 p-1 rounded-md" />
      </div>
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Date:</h2>
        <h2 className='text-xl font-regular mb-2'>{currentdate}</h2>
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

      <div className=" grid grid-rows-2 grid-cols-2 gap-10 w-5/3 ">
        
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[allquestions[index]][0].q}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            name={questions[allquestions[index]][0].ans} value={questions[allquestions[index]][0].ans||""}
            onKeyDown={handleKeyDown} onChange={handleInput} required
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[allquestions[index]][1].q}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            name={questions[allquestions[index]][0].ans}value={questions[allquestions[index]][1].ans||""}
            onKeyDown={handleKeyDown} onChange={handleInput} required
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[allquestions[index]][2].q}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            name={questions[allquestions[index]][0].ans}value={questions[allquestions[index]][2].ans||""}
            onKeyDown={handleKeyDown} onChange={handleInput} required
          />
        </div>
        <div className='mt-4'>
          <h2 className="text-lg font-medium mb-2">{questions[allquestions[index]][3].q}</h2>
          <textarea
            className="w-full h-32 overflow-hidden resize-none border border-gray-300 rounded-lg p-2"
            name={questions[allquestions[index]][0].ans}value={questions[allquestions[index]][3].ans||""}
            onKeyDown={handleKeyDown} onChange={handleInput} required
          />
        </div>
      </div>

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded"
      onClick={()=>{
        if(index > 0) {
          setIndex(index-1);
        }
      }}
      >Previous</button>

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded"
      onClick={()=>{
        if(index < allquestions.length-1) {
          setIndex(index+1);
        }
      }}
    >Next</button>

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
