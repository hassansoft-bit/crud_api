import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateUser() {
    const {id} = useParams();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');  
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
            try {       
                const res = await axios.get(`/api/users/${id}`);
                setName(res.data.name);
                setEmail(res.data.email);
                setAge(res.data.age);
            } catch (err) {
                console.error(err);
            }           
        }
        getUser();
    }, [id])

     const handleSubmit = async (e) => {    
        e.preventDefault();
        try {
            await axios.put(`/api/users/${id}`, { name, email, age });
                navigate('/');
        }
        catch (err) {
            console.error(err);
        }
        
    }
    
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>  
                <form onSubmit={handleSubmit}>
                    <h2>Update User</h2> 
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
                    <button className='btn btn-success'>Update</button>
                </form>

        </div>
      
    </div>
  )
}
export default UpdateUser;