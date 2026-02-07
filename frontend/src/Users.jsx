import React, { useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';  

function Users() {
    const [users,setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('/api/users');  
                setUsers(res.data);

            } catch (err) {
                console.error(err);
            }           
        }
        getUsers();
    }, [])  

       
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
             <Link to="/create" className='btn btn-success' >Add + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                       {users.map(user => (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>{user.age}</td>
                        <td>
                          <Link to={`/update/${user.id}`} className='btn btn-success' >Update</Link>
                        <button className='btn btn-danger ms-2'>Delete</button>
                         </td>
                      </tr>
            ))}
                 </tbody>

            </table>
        </div>
      
    </div>
  )
}
export default Users;