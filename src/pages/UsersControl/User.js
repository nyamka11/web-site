import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Constants from "../../common/constant";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`${Constants.backEndURL}/Users/view/${id}`);
    setUser(res.data.data);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container p-5 mt-3">
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item"><b>Name:</b> {user.name}</li>
          <li className="list-group-item"><b>User name:</b> {user.username}</li>
          <li className="list-group-item"><b>Email:</b> {user.email}</li>
          <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default User;
