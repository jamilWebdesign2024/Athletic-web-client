import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext/authContext';


// signIn with Google authentication
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

const [loading, setLoading]=useState(true);
const [user, setUser]=useState(null);


// User Create Authentication
const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}



// signIn Authentication
const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// signOut Authentication
const signOutUser =()=>{
    setLoading(true)
    return signOut(auth)
}


// updateProfile
const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };




// Observer 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)

       
    })
    return()=>{
        unSubscribe();
    }
},[]);


// google authentication
const signInWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}




const authInfo  = {
    user,
    setUser,
    createUser,
    loading,
    setLoading,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUserProfile
}







    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;