import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel/Panel'

const HeaderWrapper = styled.header`
	h1 {
		margin: 4px;
	}
`;

const Header = () => {
	return (
		<Panel>
			<HeaderWrapper>
				<h1>Header aqui!</h1>
			</HeaderWrapper>
		</Panel>
	);
};

export default Header;
