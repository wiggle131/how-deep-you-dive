import './App.css';
import { useState } from 'react';
import Input from './Components/Input/Input';
import Table from './Components/Table/Table';
import Edit from './Components/Edit/Edit';

function App() {
  const initialFormState = { id: null, name: '', depth:0, type:'Meters'}
  const usersData = [
    { id: 1, name: 'Tania', depth: 12, type:'Meters' },
    { id: 2, name: 'Craig', depth: 1, type:'Feet' },
    { id: 3, name: 'Ben', depth: 3, type:'Meters' },
    
  ]
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [measuringType,setMeasuringType] = useState('Meters');

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users,user])
  }

  const typeMeasure = (measure) => {
    setMeasuringType(measure);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
  setEditing(true)

  setCurrentUser({ id: user.id, name: user.name, depth: user.depth })
  }
  
  const updateUser = (id, updatedUser) => {
  setEditing(false)

  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen  bg-repeat-y bg-cover bg-[url('/src/Components/Resources/background.jpg')]">
    {editing ? (
      <Edit 
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
        typeMeasure={typeMeasure}
      />
      
    ) : (
      <Input addUser={addUser} typeMeasure={typeMeasure}/>
    )
    }
      
      <Table users={users} deleteUser={deleteUser} editRow={editRow} measuringType={measuringType}/>
    </div>
  );
}

export default App;
