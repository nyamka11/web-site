import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  NavbarComponent  from '../../components/common/Navbar.js';
import  Footer  from '../../components/common/Footer.js';
import Constants from "../../common/constant";
import ReactPaginate from 'react-paginate';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const UsersComponent = () => {
   const [users, setUser] = useState([]);

    useEffect(() =>  {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get(Constants.backEndURL+"/Users");
        setUser(result.data.data);
    };

    const deleteUser = async id => {
        await axios.delete(`${Constants.backEndURL}/Users/delete/${id}`);
        loadUsers();
    };

    const actionFormat = (cell, row) => {
        console.log(cell, row);
        return (
          <div>
            <Link className="btn btn-primary mr-2" to={`/userscontrol/${row.id}`}>View</Link>
            <Link className="btn btn-outline-primary mr-2" to={`/userscontrol/edit/${row.id}`}>Edit</Link>
            <button className="btn btn-danger" onClick={() => deleteUser(row.id)}>Delete</button>
          </div>
        );
    };

    const handleModelEdit = () => {
        console.log("clicked");
    };

    const columns = [{
        dataField: 'id',
        text: 'id',
        sort: true
    }, {
        dataField: 'name',
        text: 'Name',
        sort: true
    },
    {
        dataField: 'username',
        text: 'User name',
        sort: true
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true
    }, {
        dataField: "Actions",
        text: "Actions",
        formatter: actionFormat
    }];

    const defaultSorted = [{
        dataField: 'id',
        order: 'desc'
    }];
            
    return (
        <div>
            <NavbarComponent />
            <div className="container pt-5 pb-5">
                <div className="row mt-5 mb-3">
                  <div className="col-6">
                    <h1>Users list</h1>
                  </div>
                  <div className="col-6">
                    <Link className="btn btn-success mb-2 float-right" to="/userscontrol/add">+ Add User</Link>
                  </div>
                </div>
                <BootstrapTable bootstrap4 keyField="id" data={ users } columns={ columns } defaultSorted={ defaultSorted }  pagination={ paginationFactory() }  />
            </div>
            <Footer />
        </div>
    );
};

export default UsersComponent;