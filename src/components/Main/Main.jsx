import React from 'react';
import styled from 'styled-components'

import Panel from '../Panel/Panel'

const MainWrapper = styled.main`
	display: flex;
	flex: 6;

	div {
		text-align: center;
		width: 100%;
	}
`;

const Main = () => {
	return (
			<MainWrapper>
		<Panel>
				<div>Main content!</div>
		</Panel>
			</MainWrapper>
	);
};

export default Main;

