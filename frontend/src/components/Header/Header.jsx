import React from 'react';
import styled from 'styled-components';

// import Auth from '../Auth/Auth';
import AuthComponent from '../Auth/AuthComponent';
import Panel from '../Panel/Panel';


const HeaderWrapper = styled.header`
	display: flex;
	text-align: center;

	align-items: center;
	justify-content: center;

	nav {
		width: 100%;
	}

	h1 {
		margin: 0;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
		<Panel flex="1">

			<h1>Blame</h1>
			<nav>
				<AuthComponent />
				
			</nav>
		</Panel>
	</HeaderWrapper>
	);
};

export default Header;

				// <Auth />
