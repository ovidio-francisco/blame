import { auth } from './firebase';

export const getCurrentUserEmail = () => {
    const user = auth.currentUser;
    if (user) {
        return user.email;
    } else {
        return null;
    }
};
