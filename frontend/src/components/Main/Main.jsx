import React, { useState } from 'react';
import styled from 'styled-components';

import Files  from '../Files/Files';
import Similarities  from '../Similarities/Similarities';
import Footer from '../Footer/Footer';

const MainWrapper = styled.main`
	overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: row;
	// border: 1px solid black;
`;


const Main = () => {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState('');
	return (
		<>
			<MainWrapper>
				<Files setLoading={setLoading} setStatus={setStatus}/>
				<Similarities />
			</MainWrapper>
			<Footer loading={loading} status={status}/>
		</>
	);
}

export default Main;
