import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
	display: flex;
	flex: ${({ $flex }) => $flex || 'initial'};
	overflow: inherit;
	flex-direction: inherit;
	align-items: inherit;

	background-color: #fff;

	border-radius: 5px; 
	box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);

	padding: 4px;
	margin: 10px;
`;


const Panel = ({ children, flex }) => {
	return (
		<PanelWrapper $flex={flex}>
			{children}
		</PanelWrapper>
	);
};

export default Panel;

