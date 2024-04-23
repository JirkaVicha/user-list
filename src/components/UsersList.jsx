import User from "./User"
import axios from 'axios';
import { useState, useEffect } from "react";

const UsersList = () => {
  const[users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
      const data = response.data.results;
      setUsers(data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="user-container">
      {users.map((oneUser) => (
        <div className="user-card" key={oneUser.login.uuid}>
         <User oneUser={oneUser} /> 
        </div>
      ))}
      
    </div>
  )
}

export default UsersList