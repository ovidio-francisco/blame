import React from 'react';
import styled from 'styled-components'

const FooterWrapper = styled.footer`
	// display: flex;
	// justify-content: space-evenly;
	min-height: 1em;
	
	padding-left: 4px;
	margin-left: 10px;

	// text-align: left;
`;


const Footer = ({loading, status}) => {
	return (
		<FooterWrapper>
			<div>{loading ? 'Loading ...' : status}</div>
		</FooterWrapper>
	);
};

export default Footer;



