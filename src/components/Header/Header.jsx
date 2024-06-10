import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	h1 {
		margin: 4px;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<h1>Header aqui!</h1>
		</HeaderWrapper>
	);
};

export default Header;
