import React from 'react';
import styled from 'styled-components';

// import Panel from '../Panel/Panel'

const HeaderWrapper = styled.header`
	h2 {
		margin: 4px;
	}
`;

const Header = () => {
	return (
		// <Panel>
			<HeaderWrapper>
				<h2>Header aqui!</h2>
			</HeaderWrapper>
		// </Panel>
	);
};

export default Header;

