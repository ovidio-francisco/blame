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

// Styled component for the sidebar
const StyledFilesSidebar = styled.div`
	flex: 1; /* Sidebar takes 1 part of the available space */
	max-width: 250px; /* Optional: set a maximum width for the sidebar */
	background-color: blue;
`;

// Styled component for the main content
const StyledMain = styled.div`
	flex: 3; /* Main content takes 3 parts of the available space */
	background-color: yellow;
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
