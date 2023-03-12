import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Parties() {

  const navigate = useNavigate();

  function handleClick(e) {

    navigate("/home");
  }

    const [tableData, setTableData] = useState([
        { id: 1, name: 'STUDENTS', ne: '',resp:'' ,soi:'',ro:''},
        { id: 2, name: 'PARENTS', ne: '',resp:'',soi:'',ro:'' },
        { id: 3, name: 'EMPLOYEES', ne: '',resp:'',soi:'',ro:'' },
        {id: 4, name: 'MANAGEMENT', ne: '',resp:'',soi:'',ro:''},
        {id: 5, name: 'Supplier and Service Provider ', ne: '',resp:'',soi:'',ro:''}
      ]);
      const handleCellEdit = (event, rowIndex, field) => {
        const newData = [...tableData];
        newData[rowIndex][field] = event.target.innerText;
        setTableData(newData);
      };
    return (
        <div >
        <table className='table-fixed shadow-md sm:rounded-lg mt-28 ml-20 mr-20 mb-16'>
        <thead className='text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
      <div className="flex items-center justify-center">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full">
            Submit
        </button>
        </div>
        </div>
    );
}

export default Parties
