import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const Profile = () => {
    const [user] = useAuthState(auth);

    if (!user) {
        return <p>Please sign in to view your profile.</p>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.displayName || 'No display name'}</p>
            <p>Email: {user.email}</p>
            <p>Photo: <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="User profile" /></p>
        </div>
    );
};

export default Profile;

