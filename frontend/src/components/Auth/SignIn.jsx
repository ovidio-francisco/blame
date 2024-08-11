import React, { useState } from 'react';
import { signInWithEmail, signInWithGoogle } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmail(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignIn}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Sign In</button>
                <button type="button" onClick={handleSignInWithGoogle}>Sign In with Google</button>
            </form>
        </div>
    );
};

export default SignIn;
