import React from 'react';
// import './Footer.css';
import styled from 'styled-components'


const FooterWrapper = styled.footer`
	display: flex;
	justify-content: space-evenly;
	border: 1px solid #ccc;
	background-color: #eee;

	div {
		text-align: center;
		flex: 1;
		padding: 4px;
		border-right: 1px solid #ccc;
	}
`;


const Footer = () => {
	return (
		<FooterWrapper>
			<div>Blame</div>
		</FooterWrapper>
	);
};

export default Footer;


