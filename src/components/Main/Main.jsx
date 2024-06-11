import React from 'react';
import styled from 'styled-components'

import Panel from '../Panel/Panel'

const MainWrapper = styled.main`
	display: flex;
	flex: 1;

	div {
		text-align: center;
		width: 100%;
	}
`;

const Main = () => {
	return (
		<Panel flex="3">
			<MainWrapper>
				<div>Main content!</div>
			</MainWrapper>
		</Panel>
	);
};

export default Main;

