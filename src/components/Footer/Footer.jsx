import React from 'react';
// import './Footer.css';
import styled from 'styled-components'


const FooterWrapper = styled.footer`
	display: flex;
	justify-content: space-evenly;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-left: 1px solid #ccc;
	background-color: #eee;
`;

const Box = styled.div`
	text-align: center;
	flex: 1;
	padding: 4px;
	border-right: 1px solid #ccc;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<Box>Blame</Box>
		</FooterWrapper>
	);
};

export default Footer;


