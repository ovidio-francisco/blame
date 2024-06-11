import React from 'react';

import Header from '../Header/Header';
import Main   from '../Main/Main';
import Footer from '../Footer/Footer';
import FilesSidebar from '../FilesSidebar/FilesSidebar';

import styled from 'styled-components';

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	padding: 15px;
	gap: 15px;
`;

const Content = styled.div`
	display: flex;
	flex: 1;

	gap: 15px;
`;


const App = () => {
	return (
		<AppWrapper>
			<Header /> 
			<Content>
				<FilesSidebar />
				<Main /> 
				<Main /> 
				<Main /> 
			</Content>
			<Footer /> 
		</AppWrapper>
	);
}

export default App;
