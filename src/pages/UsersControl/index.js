import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';
import Constants from "../../common/constant";
import ReactPaginate from 'react-paginate';

const UsersComponent = () => {
  const [offset, setOffset] = useState(0);
  const [users, setUser] = useState([]);
  const [orgtableData, setOrgtableData] = useState([]);
  const [perPage, setPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const deleteUser = async id => {
    await axios.delete(`${Constants.backEndURL}/Users/delete/${id}`);
    loadUsers();
  };

  const handlePageClick = (e) =>  {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };

  const loadMoreData = () =>  {
    const data = orgtableData;
    const slice = data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(data.length / perPage));
    setUser(slice);
  };

  useEffect(() => {
    loadMoreData();
  }, [offset]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(Constants.backEndURL+"/Users");
    var data = result.data.data.reverse();
    var slice = data.slice(offset, offset + perPage);

    setPageCount(Math.ceil(data.length / perPage));
    setOrgtableData(result.data.data);
    setUser(slice);
  };

  return (
    <div>
        <NavbarComponent />
        <div className="container pt-5 pb-5"><br/>
            <div className="row mt-5 mb-3">
              <div className="col-6">
                <h1>Users list</h1>
              </div>
              <div className="col-6">
                <Link className="btn btn-success mb-2 float-right" to="/userscontrol/add">+ Add User</Link>
              </div>
            </div>

            <table className="table border shadow">
            <thead className="thead-dark">
                <tr>
                  <th scope="col">id</th>
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
                    <td><b>{user.id} </b></td>
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
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
        </div>
        <Footer />
    </div>
  );
};

export default UsersComponent;