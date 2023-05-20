
import React from 'react';
import './App.css';
import { useTable } from 'react-table';
import { useState } from 'react';

function App() {
  const data = React.useMemo(() => [], []);
  const columns = React.useMemo(() => [
    {
      Header: 'WriteList'
    },
    {
      Header: 'TodoList'
    },
    {
      Header: 'StartedList'
    },
    {
      Header: 'ReviewList'
    },
    {
      Header: 'FinshedList'
    },
  ])
  const table = useTable({ columns, data });

  return (
    <div className="App">
      <div className='container'>
        <table {...getTableProps()}>
        <thead>    //the header body
          {headerGroups.map((headerGroup) => ( //this array of objecat for each header groups
            <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map((column) => (
                <th {...column.getTableProps()}>
                  {cplumn.render('Header')}
                </th>
               ))}

            </tr>
          ))}
          </thead>
          <tbody>   

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
