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
`;

const Content = styled.div`
	display: flex;
	flex: 1;
`;

const App = () => {
	return (
		<AppWrapper>
		<Header /> 
		<Content>
			<FilesSidebar />
			<Main /> 
		</Content>
		<Footer /> 
		</AppWrapper>
	);
}

export default App;
