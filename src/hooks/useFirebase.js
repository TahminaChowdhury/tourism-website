import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut } from "firebase/auth";
import initAuth from '../firebase/firebase.init';

initAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] =useState("");

    // auth
    const auth = getAuth();

    // providers
    const googleProvider = new GoogleAuthProvider();

    const loginWithgoogle= () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            setError("")
        }).catch(err => {
            setError(err.message)
        })
    };

    // State Changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);

            } else {
              setUser({})
            }
          });
    }, [])

     // signout
     const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            
          });
    }

    return {
        user,
        error,
        loginWithgoogle,
        logOut
    }
};

export default useFirebase;