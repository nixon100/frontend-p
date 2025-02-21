import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    id : "",
    title:"",
    desc: "",
    cover:""
  })
 const Navigate = useNavigate()
  const handleChange =(e)=>{
    setBook((pre)=>({...pre, [e.target.name] : [e.target.value]}))
  }
  console.log(book)

  const handleClick= async (e)=>{
    e.preventDefault()
    try{
       await axios.post("http://localhost:8000/users",book)
       Navigate("/")

    }catch(err){
      console.log(err)
    }


  }
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input type="number" placeholder="id" onChange={handleChange} name="id"/>
      <input type="text" placeholder="title" onChange={handleChange} name="title"/>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
