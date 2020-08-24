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
// import { useFetch } from "../useFetch";

const Login = () => {
    const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({ url: null, data: null });
    
    const userNameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        console.log(data.url, data.data);
        if(isLoading)  {
            axios.post(proxyurl + basicURL + data.url, data.data).then((res) => {
                console.log(res);
                if(res.data.status)  {
                    localStorage.setItem("token", "fkcnewproject");
                    setLoggedIn(true);
                }
                else {
                    setStatusMsg(res.data.message);    
                }
                setIsLoading(false);
            });
        }
    }, [isLoading])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username =="" || password =="")  {
            setStatusMsg("Please enter your username and password!");
            return;
        }

        setIsLoading(true);
        setData({
            url: "User/login.php" , 
            data: "&username=" + username + "&password=" + password 
        });
    };

    if(loggedIn)  return <Redirect to="/admin" />;
    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="9">
                        <CCardGroup>
                        <CCard className="p-4">
                            <CCardBody>
                            <CForm>
                                <h1>ログイン</h1>
                                <p className="text-muted">アカウントにサインイン</p>
                                <p className="text-muted"><span style={{ color:"red", "fontSize":14 }}>{statusMsg}</span></p>
                                <CInputGroup className="mb-3">
                                    <CInputGroupPrepend>
                                        <CInputGroupText>
                                            <CIcon name="cil-user" />
                                        </CInputGroupText>
                                    </CInputGroupPrepend>
                                    <CInput
                                        type="text"
                                        placeholder="ユーザー名"
                                        name="username"
                                        autoComplete="username"
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
                                        placeholder="パスワード"
                                        name="password"
                                        autoComplete="current-password"
                                        onChange={passwordHandler}
                                    />
                                </CInputGroup>
                                <CRow>
                                    <CCol xs="6">
                                        <CButton disabled={isLoading} color="success" className="px-4"onClick={!isLoading ? handleSubmit : null}>
                                            {isLoading ? 'ローディング…' : 'ログイン'}
                                        </CButton>
                                    </CCol>
                                    <CCol xs="6" className="text-right">
                                        <small className="smallFont"><a href="#">パスワードをお忘れですか？</a></small>
                                    </CCol>
                                </CRow>
                            </CForm>
                            </CCardBody>
                            </CCard>
                            <CCard className="text-white bg-primary py-5 d-md-down-none">
                                <CCardBody className="text-center">
                                    <div>
                                        <h2>サインアップ</h2>
                                        <p>浜松ORI-Project。 <br />
                                            デジタルスマートシティ浜松<br />
                                            FKC株式会社
                                        </p>
                                        <Link to="/register">
                                            <CButton color="primary" className="mt-3" active tabIndex={-1}>今すぐ登録！</CButton>
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
};

export default Login;