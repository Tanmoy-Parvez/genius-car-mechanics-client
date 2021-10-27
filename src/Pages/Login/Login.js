import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <h1>This is log in page</h1>
            <button onClick={googleSignIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;