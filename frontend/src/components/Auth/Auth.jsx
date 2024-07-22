import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase';
import { signOutUser } from '../../firebase/auth';

const AuthWrapper = styled.div`
	display: flex;
	margin: 4px;
	width: 100%;
	justify-content: flex-end;
	align-items: center;

`;

const AuthLink = styled(Link)`
	margin-left: 10px;
	text-decoration: none;
	color: #007BFF;

	&:hover {
		color: #0056b3;
	}
`;

const AuthButton = styled.button`
	margin-left: 10px;
	margin-right: 6px;
	padding: 8px 16px;
	border: none;
	background-color: #007BFF;
	color: white;
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		background-color: #0056b3;
	}
`;

const Auth = () => {
    const [user] = useAuthState(auth);

    return (
		<AuthWrapper>
			{user ? (
				<>
					<span>{user.displayName || user.email}</span>
					<AuthLink to="/profile">Profile</AuthLink>
					<AuthButton onClick={signOutUser}>Sign Out</AuthButton>
				</>
			) : (
				<>
					<AuthLink to="/signin">Sign In</AuthLink>
					<AuthLink to="/signup">Sign Up</AuthLink>
				</>
			)}
		</AuthWrapper>
    );
};


export default Auth;


