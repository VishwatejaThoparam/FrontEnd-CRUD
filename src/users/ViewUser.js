import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewUser() {
  

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

    const {id}=useParams();

  const { name, username, email } = user;

 

  useEffect(() => {
    loadUser();
  }, []);

  
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    // const result = await axios.get(`http://api-crud-production-b9bf.up.railway.app/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Details</h2>

          <form className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"><p>Details of user id :</p>
            <div className="mb-3">
            
              <b>UserName : </b>{user.username}
            </div>
            <div className="mb-3">
            <b>Name : </b>{user.name}
            </div>
            <div className="mb-3">
            <b>Email : </b>{user.email}
            </div>
            <Link className="btn btn-success mx-2" to="/">
              Back to home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}