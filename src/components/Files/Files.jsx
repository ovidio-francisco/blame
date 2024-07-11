import React from 'react';
import styled from 'styled-components';

import VerticalScrollable  from '../VerticalScrollable/VerticalScrollable';

const FilesWrapper = styled.div`
	min-width: 20%;
	overflow: hidden;
	display: flex;
	flex-direction: column;

`;



const Files = () => {
	return (
		// <Panel flex="1">
			<FilesWrapper>
			Files
			
			<VerticalScrollable>
				<ul>
					<li>Item 0</li>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
					<li>Item 5</li>
					<li>Item 6</li>
					<li>Item 7</li>
					<li>Item 8</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 15</li>
					<li>Item 16</li>
					<li>Item 17</li>
				</ul>
			</VerticalScrollable>
			<footer>
				<button>Open Files</button>	
			</footer>
			</FilesWrapper>
		// </Panel>
	);
};

export default Files;

