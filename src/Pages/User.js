import React, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";
const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchAlluser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/users");
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log("err");
      }
    };
    fetchAlluser();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/users/" + id);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <div className="users">
        {user.map((user) => (
          <div className="user" key={user.id}>
            <h2>{user.title}</h2>
            <p>{user.desc}</p>
            <p>{user.cover}</p>
            <button className="delete" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
            <button className="update"><Link to={`/update/${user.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add New User</Link>
      </button>
    </div>
  );
};

export default User;
