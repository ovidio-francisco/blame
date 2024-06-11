import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel/Panel'

const FilesSidebarWrapper = styled.aside`
	display: flex;
	flex: 1;
	
	div {
		text-align: center;
		width: 100%;
	}
`;

const FilesSidebar = () => {
	return (
		<Panel flex="1">
			<FilesSidebarWrapper>
				
				<h2>Files</h2>	
				
			</FilesSidebarWrapper>
		</Panel>
	);
};

export default FilesSidebar;

