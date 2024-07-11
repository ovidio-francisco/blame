import styled from 'styled-components';


const ScrollableContainer = styled.div`
	width: 100%;
	overflow: auto;
`;

const VerticalScrollable = ({ children }) => {
	return (
			<ScrollableContainer>
				{ children }
			</ScrollableContainer>
	);
}


export default VerticalScrollable;
