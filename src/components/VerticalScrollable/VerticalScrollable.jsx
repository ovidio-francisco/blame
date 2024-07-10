import styled from 'styled-components';


const ScrollableContainer = styled.div`
	width: 100%;
	overflow: auto;
`;

const VerticalScrollable = () => {
	return (
			<ScrollableContainer>
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
			</ScrollableContainer>
	);
}


export default VerticalScrollable;
