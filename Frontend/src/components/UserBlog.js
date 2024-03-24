import React,{useEffect,useState} from 'react';
import axios from 'axios';


function UserBlog() {

    const [blogs,setBlogs]= useState([])
    const id = localStorage.getItem("userId");
    {console.log(id)}
const sendRequest =async () =>{
    const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch(err =>console.log(err))
    
    const data = await res.data;
    
    return data
    }

    useEffect(()=>{
sendRequest().then((data)=>setBlogs(data.blogs))
    },[]    )

    console.log(blogs)
  return (
    <div>
      <h1>hloo
    
      </h1>
    </div>
  )
}

export default UserBlog
