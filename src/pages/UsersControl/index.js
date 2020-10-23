import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';
import Constants from "../../common/constant";

const UsersComponent = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(Constants.backEndURL+"/Users");
    setUser(result.data.data.reverse());
    console.log(result.data.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`${Constants.backEndURL}/Users/delete/${id}`);
    loadUsers();
  };

  return (
    <div>
        <NavbarComponent />
        <div className="container pt-5 pb-5"><br/>
            <h1>Users</h1>
            <Link className="btn btn-outline-success mb-2" to="/userscontrol/add">Add User</Link>
            <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <Link className="btn btn-primary mr-2" to={`/userscontrol/${user.id}`}>View</Link>
                        <Link className="btn btn-outline-primary mr-2" to={`/userscontrol/edit/${user.id}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <Footer />
    </div>
  );
};

export default UsersComponent;
