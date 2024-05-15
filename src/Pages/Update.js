import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    id : "",
    title:"",
    desc: "",
    cover:""
  })
 const Navigate = useNavigate()
 const location = useLocation()
  const bookid = location.pathname.split("/")[2]
  const handleChange =(e)=>{
    setBook((pre)=>({...pre, [e.target.name] : [e.target.value]}))
  }
  console.log(book)

  const handleClick= async (e)=>{
    e.preventDefault()
    try{
       await axios.put(`http://localhost:8000/users/${bookid}`,book)
       Navigate("/")

    }catch(err){
      console.log(err)
    }


  }
  return (
    <div className="form">
      <h1>Update the book</h1>
      <input type="number" placeholder="id" onChange={handleChange} name="id"/>
      <input type="text" placeholder="title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Update;
