import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from '../firebase.init';
initAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] =useState("");
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const loginWithgoogle= () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            setError("")
        }).catch(err => {
            setError(err.message)
        })
    }

    return {
        user,
        error,
        loginWithgoogle,
    }
};

export default useFirebase;