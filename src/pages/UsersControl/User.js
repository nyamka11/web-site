import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Constants from "../../common/constant";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';

const User = () => {
  const [loader, setLoader] = useState([]);
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
    setLoader(true);
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`${Constants.backEndURL}/Users/view/${id}`);
    setUser(res.data.data);
    setLoader(false);
  };

  const loaderHTML = () => {
    return(
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container p-5 mt-3 mainContainer">
      {loader ? loaderHTML() : 
        <div>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-100">
            <li className="list-group-item"><b>Name:</b> {user.name}</li>
            <li className="list-group-item"><b>User name:</b> {user.username}</li>
            <li className="list-group-item"><b>Email:</b> {user.email}</li>
            <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
          </ul>
        </div>
      }
      </div>
      <Footer />
    </div>
  );
};

export default User;
