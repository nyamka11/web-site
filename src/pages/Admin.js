
import  React, { useState  } from 'react';
import { Link , Redirect} from 'react-router-dom'

const Admin = () => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if(token == null)  {
        loggedIn = false;
    }

    const [isLogin, setIsLogin] = useState(loggedIn);

    if(!isLogin)  {
        return <Redirect to="/" />
    }
    else return (
        <div>
            <h1>Login できました。</h1>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Admin;