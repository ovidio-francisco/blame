import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';

const App = () => {
	return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
	);
}

export default App;



