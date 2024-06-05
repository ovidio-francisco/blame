import React from 'react';

import Header from '../Header/Header';
import Main   from '../Main/Main';
import Footer from '../Footer/Footer';
import FilesSidebar from '../FilesSidebar/FilesSidebar';

import './App.css';

const App = () => {
	return (
		<div className='app'>
		<Header /> 
			<div className='content'>
				<FilesSidebar />
				<Main /> 
			</div>
			<Footer /> 
		</div>
	);
}

export default App;
