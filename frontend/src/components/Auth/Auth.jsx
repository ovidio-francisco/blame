import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase/firebase';
import { signOutUser } from '../../firebase/auth';

import { StyledLink, StyledButton } from '../StyledComponents/StyledComponents';

const AuthWrapper = styled.div`
	display: flex;
	margin: 4px;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
`;


const Auth = () => {
    const [user] = useAuthState(auth);

	useEffect (() => {
		const handleUserLogin = () => {
			console.log('User loged in: ', user.displayName || user.email);
		}

		if ( user ) {
			handleUserLogin();
		}
	}, [user]);

    return (
		<AuthWrapper>
			{user ? (
				<>
					<span>{user.displayName || user.email}</span>
					<StyledLink to="/profile">Profile</StyledLink>
					<StyledButton onClick={signOutUser}>Sign Out</StyledButton>
				</>
			) : (
				<>
					<StyledLink to="/signin">Sign In</StyledLink>
					<StyledLink to="/signup">Sign Up</StyledLink>
				</>
			)}
		</AuthWrapper>
    );
};


export default Auth;

// https://chatgpt.com/c/f6e1bb18-801e-407e-b6b0-1fe900642a7f
