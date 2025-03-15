import React, { useEffect, useState } from "react";
import AuthContext from "../authContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const popupSign = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password ) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // const signOut = () =>{
  //   setLoading(true);
  //   return signOut(auth);
  // }
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
      setUser(currentUser)
      // console.log(currentUser ? ('state captured', currentUser) : 'User Not Find')
      setLoading(false);
    })
    return () => unSubscribe();
  },[])

  const AuthInfo = {
    popupSign,
    user,
    setLoading,
    loading,
    createUser,
    loginUser,
    
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
