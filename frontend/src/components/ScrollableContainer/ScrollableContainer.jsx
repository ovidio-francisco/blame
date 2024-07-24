import styled from 'styled-components';

const ScrollableContainerWrapper = styled.div`
	width: 100%;
	overflow-y: auto;
	overflow-x: auto;
`;

const ScrollableContainer = ({ children }) => {
	return (
			<ScrollableContainerWrapper>
				{ children }
			</ScrollableContainerWrapper>
	);
}


export default ScrollableContainer;
