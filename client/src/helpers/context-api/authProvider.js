import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import apiClient from '../apiClient';

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authIsLoading, setAuthIsLoading] = useState();

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

    const contextValues = {
        currentUser,
        setCurrentUser,
        authIsLoading,
        setAuthIsLoading,
        checkLogin,
        handleLogout
    };
    return (
        <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
    );
};
