import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../../Firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userLogin = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}
    const logOut = () => {
        return signOut(auth);
    };

   
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return Unsubscribe();
        }
    },[]);


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;