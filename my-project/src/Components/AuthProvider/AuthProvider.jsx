import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
    // https://back-end-nine-lake.vercel.app/product
    const [lodder , setLodder] = useState(true);
    const [user , setUser] = useState(null);

  const googleLogin =  () =>{
    setLodder(true);
    return signInWithPopup(auth, GoogleProvider);
  }
  
  const createAccountEmailPassword =  (email, password) =>{
    setLodder(true);
     return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithEmailPass = (email, password) =>{
    setLodder(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
    

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        //
        const userInfo = {email : user?.email};
        axiosPublic.post("/jwt",userInfo)
        .then(res=>{
          if (res.data.token) {
            localStorage.setItem("access-token" , res.data.token)
          }
        })
      }
      else{
        //
        localStorage.removeItem("access-token");
      }
      setLodder(false);
    
     
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const logOut = () => {
    setLodder(true)
    return signOut(auth)
      
  };  

    const authData = {
        googleLogin,
        createAccountEmailPassword,
        loginWithEmailPass,
        user,
        lodder,
        logOut,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;