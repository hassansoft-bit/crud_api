import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
      const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await axios.post('/api/users', { name, email, age });
                navigate('/');
            
        } catch (err) {
            console.error(err);
        }   


    }
    
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>  
                <form onSubmit={handleSubmit}>
                    <h2>Add New User</h2> 
                    <div className='mb-2'>
                        <label htmlFor='name'>Name</label>  
                        <input type='text' id='name' className='form-control' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='age'>Age</label>

                        <input type='number' id='age' className='form-control' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                   
                </form>

        </div>
      
    </div>
  )
}
export default CreateUser;