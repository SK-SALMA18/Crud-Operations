import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function User(){
     const [users,setUsers]=useState([])
     useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
     },[])
     const handleDelete=(id)=>{
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result=>{
            console.log(result)
            window.location.reload()
        })
        .catch(errr=>console.log(errr))
     }
    return(
        <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
           <div className="w-50 bg-warning rounded p-3">
            <Link to="/create" className="btn btn-success m-2">ADD +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.name}</td>
                                 <td>{user.email}</td>
                                 <td>{user.age}</td>
                                 <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success ">UPDATE</Link>
                                    <button onClick={(e)=>handleDelete(user._id)} className="btn btn-danger m-2 p-2">DELETE</button>
                                 </td>
                            </tr>
                        })
                    }

                </tbody>

            </table>
            </div> 
        </div>
    )
}
export default User