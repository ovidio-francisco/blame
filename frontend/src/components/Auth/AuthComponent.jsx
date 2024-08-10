
// TODO: Entender tudo isso!

import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signOutUser, onAuthStateChangedListener } from '../../firebase/auth';

const AuthComponent = () => {
    const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

    useEffect(() => {

        const unsubscribe = onAuthStateChangedListener((currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                console.log('User signed in:', currentUser.email);
            } else {
                console.log('No user signed in');
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);


    const handleGoogleSignIn = async () => {
		setLoading(true);
		setError('');

        try {

			await signInWithGoogle();

        } catch (error) {
            console.error('Error signing in with Google:', error);
			setError('Failed to sign in with Google');
        }
		finally {
			setLoading(false);
		}
    };


    const handleSignOut = async () => {
		setLoading(true);
		setError('');

        try {
            await signOutUser();
            console.log('User signed out');

        } catch (error) {
            console.error('Error signing out:', error);
			setError('Failed to sign in with Google');
        }
		finally {
			setLoading(false);
		}
    };

    return (
        <div>
		<h2>Authentication</h2>

			{loading ? (
				<p>Loading ...</p> 
			) : (
				<>
					{user ? (
						<div>
							<p>Welcome {user.email}</p>
							<button onClick={handleSignOut}>Sign Out</button>
						</div>
					) : (
						<button onClick={handleGoogleSignIn}>Sign In with Google</button>
					)}
				</>
			)}
			
			{error && <p>{error}</p>}
        </div>
    );
};

export default AuthComponent;
















// https://chatgpt.com/c/f6e1bb18-801e-407e-b6b0-1fe900642a7f

// Additional Configuration in Firebase
// Ensure that your Firebase project settings are correctly configured:

// Authorized Domains:

// In your Firebase console, under Authentication > Settings > Authorized domains, ensure that your app's domain (and any testing domains like localhost) are listed.
// OAuth Redirect URIs:

// Under the Google Cloud Platform, ensure that OAuth redirect URIs are correctly set to point to your app's URL.
// Security Rules:

// Check your Firebase security rules to ensure they allow the necessary access for the authenticated users.
	
	
// span or div?

// import React { UseEffect } from 'react';

	// useEffec(() => {
		// if(getCurrentEmail()) {
			// loadSections();
		// }

	// }, [getCurrentEmail]);
	
	
	// /
