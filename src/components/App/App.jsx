import React from 'react';

import Header from '../Header/Header';
import Main   from '../Main/Main';
import Footer from '../Footer/Footer';

import './App.css';

const App = () => {
	return (
		<div className='app'>
			<div className='content'>
				<Header /> 
				<Main /> 
			</div>
			<Footer /> 
		</div>
	);
}

export default App;
