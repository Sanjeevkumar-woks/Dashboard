import React from 'react'
import {useState} from 'react'
import {Button} from '@mui/material';
export function EditProducts( {Id,Name,Position,Office,Age,Salary,users,setUser}) {
    const [id,setId] = useState(Id);
    const [name,setName] = useState(Name);
    const [age,setAge] = useState(Position);
    const [position,setPosition] = useState(Office);
    const [office,setOffice] = useState(Age);
    const [salary,setSalary] = useState(Salary);
   

    return (
        <div className='adduser'>
            <input placeholder='Id' onChange={(event) => setId(event.target.value)}/>
            <br/>
            <input placeholder='Name' onChange={(event) => setName(event.target.value)}/>
            <br/>
            <input placeholder='Age' onChange={(event) => setAge(event.target.value)}/>
            <br/>
            <input placeholder='Position' onChange={(event) => setPosition(event.target.value)}/>
            <br/>
            <input placeholder='Office' onChange={(event) => setOffice(event.target.value)}/>
            <br/>
            <input placeholder='Salary' onChange={(event) => setSalary(event.target.value)}/>
            <br/>
            <Button  type="submit"
            onClick={() => {
                const newUser = {
                    id,name,position,office,age,salary
                };
                setUser([...users, newUser]);
              }
              }
                >Submit</Button>
        </div>
    )
}


