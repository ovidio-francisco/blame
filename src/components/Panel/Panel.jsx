import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
	display: flex;
	flex: ${({flex}) => flex || 'initial'};

	background-color: #fff;

	border-radius: 4px; 
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

	padding: 4px;

`;


const Panel = ({ children, flex }) => {
	return (
		<PanelWrapper flex={flex}>
			{children}
		</PanelWrapper>
	);
};

export default Panel;

