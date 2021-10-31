import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail,GoogleAuthProvider, FacebookAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initAuth from '../firebase/firebase.init';

initAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] =useState("");
    const [isLoading, setIsLoading] = useState(true);

    // auth
    const auth = getAuth();


    // set email and password
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    
     // handle email and password
     const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }


        // handle sign up and  log in
        const handleSignup = event => {
            event.preventDefault();
            if (password.length < 6) {
                setError('Password must have at least 6 characters');
                return;
              }
            createNewUserWithEmailAndPassword(email, password);
            event.target.reset();
            
        };
        const handleLogin = (event) => {
            event.preventDefault();
            loginWithEmailandPassword(email, password)
            event.target.reset();
            
        };

        

    // handle sign up with email and password
    const createNewUserWithEmailAndPassword = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            verifyEmail();
            setError("");
        })
        .catch(error => {
            setError(error.message);
        })
        };

       // handle log in with email password
       const loginWithEmailandPassword = (email, password) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            setError("");
        }).catch(error => {
            setError(error.message)
        })
     };
     

        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
            .then ( () => {
    
            })
        }
        const handleResetPassword = () => {
            sendPasswordResetEmail(auth, email)
            .then( () => {
    
            })
        }

       
    // providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const loginWithgoogle= () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    };

       // sign in with facebook

       const signInWithFacebook =() => {
        signInWithPopup(auth, facebookProvider)
        .then( result => {
          setUser(result.user);
          setError("");
        })
        .catch(error => {
            setError(error.message);
        })
}

     // state change observer
     useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


     // logout
     const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        handleEmail,
        handlePassword,
        handleResetPassword,
        handleSignup,
        handleLogin,
        loginWithgoogle,
        signInWithFacebook,
        logOut,
    }
};

export default useFirebase;