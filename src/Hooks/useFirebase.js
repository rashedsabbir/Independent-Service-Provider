import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,
FacebookAuthProvider,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,
updateProfile,sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    // set user
    const [user,setUser] = useState({});
    // loading
    const [isLoading,setIsLoading] = useState(true);
    // set error success state
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('')
    // name email password state
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // console.log(email,password,name);

    const auth = getAuth();
    // provider
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
       return signInWithPopup(auth,googleProvider)
    }

    // facebook sign in
    const signInUsingFb = () => {
       return signInWithPopup(auth,fbProvider)
    }

    // github sign in
    const signInUsingGithub = () => {
       return signInWithPopup(auth,githubProvider)
    }

    // create User With Email And Password 
    const registerUserUsingEmailPassword = () => {
        // if(password.length < 6){
        //     return alert('Password must be at least 6 character');
        //  }
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign In With Email And Password 
    const loginUsingEmailPassword = () => {
       return signInWithEmailAndPassword(auth,email,password)
    };

    // update Profile 
    const registerUpdateUser = () => {
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(() => {
            console.log('profile updated');
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    
    // console.log(name)
    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setSuccess('Email verification sent')
        })
    }

    const passwordReset = () => {
        sendPasswordResetEmail(auth,email)
        .then(() => {
             setSuccess('Password reset email sent!')
          })
          .catch((err) => {
            const errorMessage = err.message;
            setError(errorMessage)
          });
    }

    // on Auth State Changed 
    useEffect(() => {
        onAuthStateChanged (auth,user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[]);

    // logout
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(err => {
            console.log(err.message);
        })
    };

    return{
        user,
        setUser,
        signInUsingGoogle,
        signInUsingFb,
        signInUsingGithub,
        registerUserUsingEmailPassword,
        registerUpdateUser,
        verifyEmail,
        loginUsingEmailPassword,
        passwordReset,
        logout,
        success,
        error,
        setError,
        setName,
        setEmail,
        setPassword,
        password,
        isLoading
    }
}

export default useFirebase;