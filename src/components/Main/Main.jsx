import React from 'react';
import styled from 'styled-components';

import Files  from '../Files/Files';
import Similarities  from '../Similarities/Similarities';

const MainWrapper = styled.main`
	flex: 1;
	display: flex;
	flex-direction: row;
	border: 1px solid black;
`;


const Main = () => {
	return (
		<MainWrapper>
			<Files />
			<Similarities />
		</MainWrapper>
	);
}

export default Main;
