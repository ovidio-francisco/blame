import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel/Panel'

const FilesSidebarWrapper = styled.aside`
	display: flex;
	flex: 1;
	flex-direction: column;
	
	div {
		text-align: center;
		width: 100%;
	}

	ul {
		padding: 4px;
		margin: 0px;
	}

	ul li {
		list-style: none;
	}
`;

const FilesSidebar = () => {
	return (
		<Panel flex="1">
			<FilesSidebarWrapper>
				
				<ul>
					<li>Files</li>
					<li>Files</li>
					<li>Files</li>
				</ul>
				
			</FilesSidebarWrapper>
		</Panel>
	);
};

export default FilesSidebar;

