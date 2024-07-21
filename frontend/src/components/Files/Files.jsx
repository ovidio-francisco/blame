import React from 'react';
import styled from 'styled-components';

import VerticalScrollable  from '../VerticalScrollable/VerticalScrollable';

import Panel from '../Panel/Panel'

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
					<button>Open Files</button>	
				</footer>
			</Panel>
		</FilesWrapper>
	);
};

export default Files;

