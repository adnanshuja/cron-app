import React, { useState, useEffect, createContext, useMemo } from 'react';
import { apiClient } from '../../helpers';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        checkLogin();
    }, []);
    
    const handleLogout = async () => {
        localStorage.clear();
        setCurrentUser(null);
    };

    const checkLogin = async () => {
        const token = localStorage.getItem("token");
        console.log("CHECKING LOGIN", token);

        if (token) {
            try {
                const currentUser = await apiClient.get('auth/get-profile');
                setCurrentUser(currentUser.data);
                setIsAuthenticated(true);
            } catch (error) {
                setCurrentUser(null);
                setIsAuthenticated(false);
                localStorage.clear();
            }
        } else {
            setIsAuthenticated(false);
            setCurrentUser(null);
        }
    };

    const stateValues = useMemo(() => ({
        currentUser,
        setCurrentUser,
        isAuthenticated,
        handleLogout
    }));
    return (
        <AuthContext.Provider value = {stateValues}>{children}</AuthContext.Provider>
    );
};
