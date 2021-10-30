import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {loginWithgoogle} = useAuth();
    
    return (
        <div className="text-center m-5">
            <button onClick={loginWithgoogle} className="btn btn-primary">Login with Google</button>
        </div>
    );
};

export default Login;