import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });
  const { username, name, email } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmitevent = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }
    await axios.post("http://localhost:8080/user", user);
    // await axios.post("http://fsapplicationcrud-production.up.railway.app/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmitevent(e)}>
            <div className="md-3">
              <label htmlFor="Username" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="md-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="md-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter a email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-primary m-2">Submit</button>
            <Link to="/">
              <button className="btn btn-danger m-2">cancel</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
