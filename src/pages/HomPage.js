import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function HomePage() {

  const[users ,setUser]=useState([]);

  const {id}=useParams();

  useEffect(()=>{
   // console.log("hello i ready to start");
   loaderUser();
  },[]);

  const loaderUser =async ()=>{
    // const result = await axios.get("http://localhost:8080/getUser")
    const result = await axios.get("http://api-crud-production-b9bf.up.railway.app/getUser")
    setUser(result.data);
   
  }

  const deleteUser = async (id)=>{
    // await axios.delete(`http://localhost:8080/user/${id}`)
    await axios.delete(`http://api-crud-production-b9bf.up.railway.app/user/${id}`)
    loaderUser();
  }

  return (  
    <div className='container'>
        <div className='py-4'>
        <table className="table 5px border bg-dark">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
    
  </thead>
  <tbody>
      {
        users.map((user,index)=>(
          <tr key={user.id}> 
            <th scope="row" >{index+1}</th>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                <Link className='btn btn-outline-dark mx-2' to={`/edituser/${user.id }`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
            </td>

          </tr>
        ))
      }

  </tbody>
</table>

        </div>
    </div>
  )
}
