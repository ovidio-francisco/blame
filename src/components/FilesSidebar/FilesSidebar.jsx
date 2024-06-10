import React from 'react';
import styled from 'styled-components';


const FilesSidebarWrapper = styled.aside`
  background-color: #f0f0f0;
  color: #333;
  width: 200px;
  height: auto;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;


const FilesSidebar = () => {
	return (
		<FilesSidebarWrapper>
			
			<h2>Files</h2>	
			
		</FilesSidebarWrapper>
	);
};

export default FilesSidebar;



