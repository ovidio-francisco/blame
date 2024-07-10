import React from 'react';
import styled from 'styled-components';

import VerticalScrollable  from '../VerticalScrollable/VerticalScrollable';

const FilesWrapper = styled.div`
	flex: 1;
	overflow: hidden;
	display: flex;
	flex-direction: row;

`;



const Files = () => {
	return (
		// <Panel flex="1">
			<FilesWrapper>
			
				Files
			<VerticalScrollable />
				
			</FilesWrapper>
		// </Panel>
	);
};

export default Files;

