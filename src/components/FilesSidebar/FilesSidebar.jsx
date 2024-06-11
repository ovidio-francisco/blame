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
			<FilesSidebarWrapper>
		<Panel>
				
				<h2>Files</h2>	
				
		</Panel>
			</FilesSidebarWrapper>
	);
};

export default FilesSidebar;

