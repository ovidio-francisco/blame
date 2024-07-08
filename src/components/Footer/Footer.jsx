import React from 'react';
import styled from 'styled-components'

// import Panel from '../Panel/Panel'

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: space-evenly;

	div {
		text-align: center;
		padding: 4px;
	}
`;


const Footer = () => {
	return (
		// <Panel>
			<FooterWrapper>
				<div>Blame</div>
				<div>Culpa</div>
				<div>Culpado</div>
			</FooterWrapper>
		// </Panel>
	);
};

export default Footer;



