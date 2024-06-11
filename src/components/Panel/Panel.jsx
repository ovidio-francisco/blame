import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  border: 1px solid red;
`;


const Panel = ({children}) => {
	return (
		<PanelWrapper>
			{children}
		</PanelWrapper>
	);
};

export default Panel;

