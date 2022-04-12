import React from "react";
// import './Table.css';

const Table = ({users, deleteUser, editRow, measuringType}) => {
    
    function computeMeasurement(tableData){
        var depth = 0;
        if(measuringType === 'Meters'){
            if(tableData.type === 'Meters'){
                depth = tableData.depth;
            } else {
                depth = tableData.depth * 0.3048;
            }
        } else {
             if(tableData.type === 'Feet'){
                depth = tableData.depth;
            } else {
                depth = tableData.depth * 3.28084;
            }
        }
        return Number(depth).toFixed(2);
    }
    return(
        <div className='grid grid-cols-1 grid-rows-1 grid-flow-col place-items-center h-screen md:w-100 lg:w-1/2 '>
          <table className='font-Open-Sans font-bold text-xl table-fixed h-5/6 w-5/6 shadow-md bg-gradient-to-b from-[#2D92D1] from-[#2D92D1] rounded-3xl'>
              <thead>
                  <tr className='h-12 text-3xl font-extrabold'>
                      <th>Name</th>
                      <th>Depth</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody className='text-center'>
              {
                  users.length > 0 ? (
                      users.map((tableData) =>(
                        <tr className={'border border-y-3 ' + (tableData.id % 2 === 0 ? 'border-[#E8749A]' : 'border-[#74C9E8]')} key={tableData.id}>
                            <td className='w-80'>{tableData.name}</td>
                            <td>{measuringType === 'Meters' ? computeMeasurement(tableData) +' M' : computeMeasurement(tableData) +' ft'}</td>
                            <td>
                                <button 
                                    onClick={() => {
                                        editRow(tableData)
                                     }}
                                    className='bg-[#F497B6]  btn font-Open-Sans inline-block px-6 py-2 bg-white text-xs w-24 leading-tight uppercase font-bold hover:background-animate  focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                                >
                                Edit
                                </button>
                                <button 
                                    className='p-1 bg-[#F497B6]  btn font-Open-Sans inline-block px-6 py-2 bg-white text-xs w-24 leading-tight uppercase m-2 font-bold hover:background-animate  focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                                    onClick={() => deleteUser(tableData.id)}
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    
                      ))
                  ) : (
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                  )
              }      
              </tbody>
          </table>
        </div>
    );
}

export default Table;