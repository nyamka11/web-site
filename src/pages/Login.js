import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import "react-notifications-component/dist/theme.css";

const Login = () => {
    const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null);
    const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //         setLoading(false);
    //     }
    // }, [isLoading]);

    const sendData = (url, data, onSuccess) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.post(proxyurl + basicURL + url, data).then((response) => {
            onSuccess(response);
        });
    };

    const userNameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username =="" || password =="")  {
            setStatusMsg("Please enter your username and password!");
            return;
        }

        setLoading(true);
        sendData("User/login.php","&username=" + username + "&password=" + password, 
            function(res)  {
                setLoading(false);
                if (res.data.status)  {
                    setLoggedIn(true);
                    localStorage.setItem("token", "fkcnewproject");
                } 
                else {
                    setStatusMsg(res.data.message);    
                }
            }
        );
    };

    console.log("logged: " + loggedIn);
    if (loggedIn)  {
        return <Redirect to="/admin" />;
    } 
    else  {
        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="8">
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm>
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <p className="text-muted"><font color="red">{statusMsg}</font></p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-user" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput
                                                    type="text"
                                                    placeholder="Username"
                                                    name="username"
                                                    autoComplete="username"
                                                    value={username}
                                                    onChange={userNameHandler}
                                                />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupPrepend>
                                                    <CInputGroupText>
                                                        <CIcon name="cil-lock-locked" />
                                                    </CInputGroupText>
                                                </CInputGroupPrepend>
                                                <CInput
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    autoComplete="current-password"
                                                    value={password}
                                                    onChange={passwordHandler}
                                                />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs="6">
                                                    <CButton disabled={isLoading} color="primary" className="px-4"onClick={!isLoading ? handleSubmit : null}>
                                                        {isLoading ? 'Loading…' : 'Login'}
                                                    </CButton>
                                                </CCol>
                                                <CCol xs="6" className="text-right">
                                                    <CButton color="link" className="px-0">Forgot password?</CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Hamamatsu ORI-Project. <br />
                                                Digital Smart City HAMAMATSU <br />
                                                FKC inc.
                                            </p>
                                            <Link to="/register">
                                                <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                                            </Link>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        );
    }
};

export default Login;
