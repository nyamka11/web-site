import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Constants from "../../common/constant";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [loader, setLoader] = useState([]);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    phone: ""
  });

  const { email, name, username, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
    setLoader(true);
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    let data = await axios.put(`${Constants.backEndURL}/Users/edit/${id}`, user);
    if(data.data.res.status === 0)  {
      setMsg(data.data.res.msg);
    }

    if(data.data.res.status === 1)  {
      setMsg(data.data.res.msg);
      history.push("/userscontrol");
    }
  };

  const loadUser = async () => {  //databasees useriig achaalana
    const result = await axios.get(`${Constants.backEndURL}/Users/view/${id}`);
    setUser(result.data.data);
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
      <div className="container pt-5 pb-5 mainContainer"><br/>
        {loader ? loaderHTML() : 
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit A User</h2>
            { msg !== "" ? <div className="alert alert-danger" role="alert">{msg}</div> : "" }
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Username"
                  name="username"
                  value={username}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                  value={email}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Your phone"
                  name="phone"
                  value={phone}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-warning btn-block">Update User</button>
            </form>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default EditUser;
