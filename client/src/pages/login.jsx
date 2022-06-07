
import React, { useState, useContext, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { apiClient, AuthContext } from '../helpers';

function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const { isAuthenticated, setCurrentUser } = useContext(AuthContext);

    useEffect(()=>{
        isAuthenticated ?? navigate('/dashboard');
    })
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await apiClient.post('auth/login', { email: email, password: password })
            if(!data.accessToken)
            throw new Error("NO TOKEN FOUND");
            localStorage.setItem('token', data.accessToken);
            const currentUser = await apiClient.get('auth/get-profile');
            setCurrentUser(currentUser.data);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setLoginError(error);
        }
    }
    return (
        <section className="">
            <div className="container">
                <div className="maxwidth-420">
                    <div className="login-wrap">
                        <div className="heading-title text-left">
                            <h2 className="m-b-5">Login</h2>
                        </div>
                        <div className="form-wrapper ">
                            <form onSubmit={handleSubmit}>
                                <div className="form-inner">
                                    <div className="grid-row">
                                        <div className="grid-12">
                                            <div className="input-field">
                                                <label className="">Email Address</label>
                                                <input className="" type="email" value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grid-12">
                                            <div className="input-field">
                                                <div className="input-field">
                                                    <label className="">Password</label>
                                                    <input className="" type="password" value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { loginError?? <div>{loginError}</div>}
                                <div className="submit-button">
                                    <input type="submit" value="Login " className="theme-btn" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LoginPage;
