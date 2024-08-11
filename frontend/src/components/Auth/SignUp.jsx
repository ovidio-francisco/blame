import React, { useState } from 'react';
import { signUpWithEmail } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUpWithEmail(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
