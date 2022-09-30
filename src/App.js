import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';
import { UserInput } from './UserInput';

function App() {

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
      const fetchData = async () => {

      const data = await db.collection("userProfile").get()
      setUsers(data.docs.map(doc => ({...doc.data(), id:doc.id})))
    }
    fetchData()
  }, [])


  return (
    
    <ul>
      {users.map(user => (
        <li key={user.uid}> 
          <UserInput user={user}/>
        </li>
      ))}
    </ul>


  );
}
export default App;