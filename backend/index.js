const express = require('express');
const cors = require('cors');
const User = require('./models/Users');
const port = 3030

const app = express();
app.use(cors()); 
app.use(express.json());
   
app.get('/api/users', (req,res) => {
    res.json(User);
});

app.post('/api/users',  (req,res) => {
    const { name, email, age } = req.body;
   const user ={
    id:User.length > 0 ? User[User.length - 1].id + 1 : 1,
    name:name,
    email:email,
    age:age 
   }
   User.push(user);
   res.json(User);
    
});


app.delete('/api/users/:id', (req,res) => {
    const id = req.params.id; 
    const index = User.findIndex(user => user.id === id);
    User.splice(index,1);
    res.json(User);
});

app.put('/api/users/:id', (req,res) => {
    const idi = req.params.id;
    const { name, email, age} = req.body;
    const index = User.findIndex(user => user.id === idi);   
     const user = {
        id:idi,
        name:name,  
        email:email,
        age:age
     }
     User[index] = user;
     res.json(User);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});