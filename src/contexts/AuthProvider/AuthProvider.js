import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)


useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
       console.log("user inside auth state changed", currentUser)
       setUser(currentUser)
    })
    return () =>  unsubscribe() ;
}, [])


const providerLogin = (provider) => {
     return signInWithPopup(auth, provider)
}


const authInfo = {user, providerLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;