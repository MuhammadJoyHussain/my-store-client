import React, { useContext, useState } from 'react';
import { initializeLoginFramework } from "./LoginManager";
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn } from './LoginManager';
import './Login.css';
import { UserContext } from '../../App';

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLoginFramework();
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()   
            .then(res => {
                handleResponse(res, true);
            })
    }
  
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        } 
    }    

   
    return (
        <div>
            <button className="signInButton" onClick={googleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;