import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Parties() {

  const navigate = useNavigate();

  var date=new Date();
  var currentdate=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    const [tableData, setTableData] = useState([
        { id: 1, name: 'STUDENTS', ne: '',resp:'' ,soi:'',ro:''},
        { id: 2, name: 'PARENTS', ne: '',resp:'',soi:'',ro:'' },
        { id: 3, name: 'EMPLOYEES', ne: '',resp:'',soi:'',ro:'' },
        {id: 4, name: 'MANAGEMENT', ne: '',resp:'',soi:'',ro:''},
        {id: 5, name: 'SUPPLIER AND SERVICE PROVIDER', ne: '',resp:'',soi:'',ro:''}
      ]);
      const handleCellEdit = (event, rowIndex, field) => {
        const newData = [...tableData];
        newData[rowIndex][field] = event.target.innerText;
        setTableData(newData);
      };
    return (
        <div className="bg-gradient-to-b from-[#A8FFF8] to-[#A8D7FF] h-screen flex flex-col items-center space-y-[25px]">
           <h1 className="text-3xl font-medium mt-10 mb-4 ">List of Interested Parties and Expectations (Entry by Institute Head & Coordinator)</h1>
      <div className="grid grid-cols-2 gap-5">
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Organization Name:</h2>
        <input type="text" id="orgname" name="organizationname" className="border border-gray-400 p-1 rounded-md" />
      </div>
      <div className="grid grid-cols-2">
        <h2 className="text-xl font-medium mb-2">Date:</h2>
        <h2 className='text-xl font-regular mb-2'>{currentdate}</h2>
      </div>
      </div>

        <table className='table-fixed shadow-md sm:rounded-lg mt-28 ml-20 mr-20 mb-20'>
        <thead className='text-base text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='px-10 py-3 '>S.NO</th>
            <th className='px-10 py-3'>INTERESTED PARTIES</th>
            <th className='px-10 py-3'>NEED AND EXPECTATIONS(Yearly Once)</th>
            <th className='px-10 py-3'>Responsibility</th>
            <th className='px-10 py-3'>Status of Implementation  Reminder to responsible person to be viewed by HOD / Principal</th>
            <th className='px-10 py-3 '>Review Outcome {'\n'} (Once in 6 Months) – entry by Coordinator & the respective responsible person </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={row.id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
              <td className='text-center text-base font-bold'>{row.id}</td>
              <td className='text-center text-base font-bold'>
                {row.name}
              </td>
              <td
                contentEditable={true}
                onBlur={(event) => handleCellEdit(event, rowIndex, 'age')}
                className='px-6 py-4 text-lg'
              >
                {row.ne}
              </td>
              <td
                contentEditable={true}
                onBlur={(event) => handleCellEdit(event, rowIndex, 'age')}
                className='px-6 py-4 text-lg'
              >
                {row.resp}
              </td>
              <td
                contentEditable={true}
                onBlur={(event) => handleCellEdit(event, rowIndex, 'age')}
                className='px-6 py-4 text-lg'
              >
                {row.soi}
              </td>
              <td
                contentEditable={true}
                onBlur={(event) => handleCellEdit(event, rowIndex, 'age')}
                className='px-6 py-4 text-lg'
              >
                {row.ro}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full">
            Submit
        </button>
        </div>
        </div>
    );
}

export default Parties
