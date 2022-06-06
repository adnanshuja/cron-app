import React, { useState, useEffect, createContext } from 'react';
import { apiClient } from '../../helpers';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authIsLoading, setAuthIsLoading] = useState(false);

    useEffect(() => {
        checkLogin();
    }, []);
    const handleLogout = async () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
    };

    const checkLogin = async () => {
        const token = localStorage.getItem("token");
        console.log("CHECKING LOGIN");
        setAuthIsLoading(true);

        if (token) {
            try {
                const currentUser = await apiClient.get('auth/get-profile');
                setCurrentUser(currentUser);
                setAuthIsLoading(false);
            } catch (error) {
                setCurrentUser(null);
                setAuthIsLoading(false);
            }
        } else {
            setCurrentUser(null);
            setAuthIsLoading(false);
        }
    };

    const stateValues = {
        currentUser,
        setCurrentUser,
        authIsLoading,
        setAuthIsLoading,
        checkLogin,
        handleLogout
    };
    
    return (
        <AuthContext.Provider value = {'Hello'}>{children}</AuthContext.Provider>
    );
};
