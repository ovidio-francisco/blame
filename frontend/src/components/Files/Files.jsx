import React from 'react';
import styled from 'styled-components';

import Panel from '../Panel/Panel'
import DirectoryUpload from '../DirectoryUpload/DirectoryUpload'
import VerticalScrollable  from '../VerticalScrollable/VerticalScrollable';


const FilesWrapper = styled.div`
	min-width: 20%;
	overflow: hidden;
	display: flex;
	flex-direction: column;

`;

const Files = () => {
	return (
		<FilesWrapper>
			<Panel flex="1">
				<VerticalScrollable>
					Files

					<ul>
						{Array.from({ length: 60 }, (_, i) => (
							<li> File_{i+1} </li>
						))}
					</ul>

				</VerticalScrollable>
				<footer>
					<DirectoryUpload />
				</footer>
			</Panel>
		</FilesWrapper>
	);
};

export default Files;

