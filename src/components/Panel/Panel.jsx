import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
	display: flex;
	flex: ${({flex}) => flex || 'initial'};
	border: 1px solid red;
`;


const Panel = ({ children, flex }) => {
	return (
		<PanelWrapper flex={flex}>
			{children}
		</PanelWrapper>
	);
};

export default Panel;

