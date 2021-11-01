import React from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {
    const {user,error,loginWithgoogle,handleEmail, handlePassword, handleResetPassword,handleLogin, signInWithFacebook} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        loginWithgoogle()
            .then(result => {
                history.push(from);
            })
    }
    return (
        <div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <img src="https://i.ibb.co/6XNptWk/secure-login-concept-illustration-114360-4582.jpg" alt="" className="img-fluid"/>
                    </div> 
                <div className="col-md-6 col-sm-12">
                    <div className="login">
                        <h1>Log in</h1>
                        <br />
                        <form onSubmit={handleLogin}>
                            <label htmlFor="">E-mail</label>
                            <br />
                            <input onBlur={handleEmail} type="email" name="email" id="" required className="w-75 py-2 mb-3"/>
                            <br />
                            <label htmlFor="">Password</label>
                            <br />
                            <input onBlur={handlePassword} type="password" name="password" id=""
                            required className="w-75  py-2"/>
                            <br />
                            <button className="btn text-primary" onClick={handleResetPassword}>Forgot Password?</button>

                            <h5 className="text-danger my-3">{error}</h5>

                            <button className="btn btn-primary rounded-pill w-75 mb-4">Log in</button>
                        </form>
                        <span className="ms-5 ps-5">or login using</span>
                        {/* sign in with social media */}
                        <div className="d-flex">
                            {/* google sign in */}
                            <div className="google-signin">
                                <button onClick={handleGoogleLogin} className="btn btn-primary px-3 mt-3"><span className="fs-4"><i class="fab fa-google " ></i></span></button>
                            </div>
                            <div>
                                {/* facebook sign in */}
                            <div className="ms-3">
                                <button onClick={signInWithFacebook} className="btn  btn-primary px-3 mt-3"><span className="fs-4"><i class="fab fa-facebook-f"></i></span></button></div>
                            </div>
                        </div>

                        <div className="mt-5 ">
                            <span>Don't have an acoount ?</span><Link  to="/signup" className="text-primary">Sign-up here</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

{/* <button onClick={handleGoogleLogin} className="btn btn-primary">Login with Google</button> */}