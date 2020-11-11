import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';
import Constants from "../../common/constant";

const AddUser = () => {

  let localData = JSON.parse(localStorage.getItem("data"));
  let myComId = localData['comId'];
  let authorId = localData['userId'];

  let history = useHistory();
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    comId: JSON.parse(localStorage.getItem("data"))['comId'],
    name: "",
    username: "",
    email: "",
    phone: "",
    comId: myComId,
    authorId: authorId
  });

  const { name, username, email, phone } = user;
  console.log(user);
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    let data = await axios.post(Constants.backEndURL+"/Users/add", user);
    if(data.data.res.status == 0)  {
      setMsg(data.data.res.msg);
    }

    if(data.data.res.status == 1)  {
      setMsg(data.data.res.msg);
      history.push("/userscontrol");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container pt-5 pb-5 mainContainer"><br/>
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add User</h2>
          { msg !="" ? <div className="alert alert-danger" role="alert">{msg}</div> : "" }
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
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter phone"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddUser;
