import React from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.footer`
	display: flex;
	justify-content: space-evenly;

	text-align: center;
`;


const Footer = () => {
	return (
		<FooterWrapper>
			<div>Blame</div>
			<div>Culpa</div>
			<div>Culpado</div>
		</FooterWrapper>
	);
};

export default Footer;



