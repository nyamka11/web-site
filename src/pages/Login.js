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
    CInputGroup,
    CRow,
} from "@coreui/react";
import axios from "axios";
import SelectAll from '../common/Fiware/SelectAll';
import Insert from '../common/Fiware/Insert';
import Delete from '../common/Fiware/Delete';
import Select from '../common/Fiware/Select';
import Update from '../common/Fiware/Update';
import Search from "../common/Fiware/Search";

const Login = (props) =>  {
    const basicURL = "http://127.0.0.1/backEnd/";
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
            axios.post(basicURL + data.url, data.data).then((responce) => {
                console.log(responce);
                if(responce.data.res.status)  {
                    localStorage.setItem("data", JSON.stringify({
                        "token":  "fkcnewproject",
                        "comId": responce.data.res.data.company_id,
                        "userId": responce.data.res.data.id,
                        "name": responce.data.res.data.name,
                        "userName": responce.data.res.data.username
                    }));

                    setLoggedIn(true);
                }
                else {
                    setStatusMsg(responce.data.res.msg);    
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
            url: "users/login" , 
            data: "&username=" + username + "&password=" + password 
        });
    };

    if(loggedIn)  return <Redirect to="/home" />;
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
                                <CInputGroup className="mb-4">
                                    <input type="text" placeholder="ユーザー名" name="username" className="registerinput form-control form-control-lg" onChange={userNameHandler} />
                                </CInputGroup>
                                <CInputGroup className="mb-4">
                                    <input type="password" placeholder="パスワード" name="password" className="registerinput form-control form-control-lg" onChange={passwordHandler} />
                                </CInputGroup>
                                <CRow>
                                    <CCol xs="6">
                                        <CButton disabled={isLoading} color="success" className="px-4"onClick={!isLoading ? handleSubmit : null}>
                                            {isLoading ? 'ローディング…' : 'ログイン'}
                                        </CButton>
                                    </CCol>
                                    <CCol xs="6" className="text-right">
                                        <small className="smallFont"><a href="/forgotpassword">パスワードをお忘れですか？</a></small>
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