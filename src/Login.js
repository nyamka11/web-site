
import  React, { useState  } from 'react';
import { Link } from 'react-router-dom'
import {CButton, CCard, CCardBody, CCardGroup, CCol, CContainer,
  CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const Login = () => {
  const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = (url, data, onSuccess) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(proxyurl+basicURL+url, data)
    .then(response => {
      onSuccess(response);
    });
  }

  const emailOrUserNameHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setEmail("");
    // setPassword("");
    console.log(email, password)
  }
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
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username or email" autoComplete="username" onChange={emailOrUserNameHandler} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={passwordHandler} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Hamamatsu ORI-Project. <br/>Digital Smart City HAMAMATSU<br/>FKC inc.</p>
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
  )
}

export default Login
     
    
    // import  React, { useState  } from 'react';
    // import './Components/CSS/todo.css'
    // import axios from 'axios';
    // import ReactNotification from 'react-notifications-component'
    // import 'react-notifications-component/dist/theme.css'
    // import { store } from 'react-notifications-component';


    // function Login()  {
    //     const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";
    //     const [email, setEmail] = useState("");
    //     const [password, setPassword] = useState("");

    //     const sendData = (url, data, onSuccess) => {
    //         const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //         axios.post(proxyurl+basicURL+url, data)
    //         .then(response => {
    //         onSuccess(response);
    //     });
    //     }

    //     const emailOrUserNameHandler = (event) => {
    //         setEmail(event.target.value);
    //     }

    //     const passwordHandler = (event) => {
    //         setPassword(event.target.value);
    //     }

    //     const handleSubmit = (event) => {
    //         event.preventDefault();
    //         // setEmail("");
    //         // setPassword("");
    //     }

    //     return (
    //         <div>
    //             <ReactNotification />
    //             <form onSubmit={handleSubmit}>
    //                 <h1>Login</h1>
    //                 <table >
    //                     <tbody>
    //                     <tr><td><label>Email :</label></td>
    //                         <td><input type="text" value={email} onChange={emailOrUserNameHandler} placeholder="User name..." /></td></tr>
    //                     <tr><td><label>Password :</label></td>
    //                         <td><input type="password" value={password} onChange={passwordHandler} placeholder="Password..." /></td></tr>
    //                     </tbody>
    //                 </table><br/>
    //                 <input className="submit" type="submit" value="Login" />
    //             </form>
    //         </div>
    //     )
    // }

    // export default Login;
