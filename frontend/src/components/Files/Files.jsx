import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { fetchFilesList, uploadFiles, fetchSections } from '../../utils/apiUtils';

import Panel from '../Panel/Panel'
import ScrollableContainer  from '../ScrollableContainer/ScrollableContainer';
import { FilesWrapper } from './FilesStyles';
import { StyledButton } from '../StyledComponents/StyledComponents';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Files = () => {
	const [user] = useAuthState(auth);
    const [status, setStatus] = useState('');
    const [section, setSection] = useState('');
    const [sections, setSections] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]); // TODO renomear para FilesSections

	const handleFileChange = (event) => {
        const input = event.target;
        const files = Array.from(input.files);
        setSelectedFiles(prevFiles => [...prevFiles, ...files]);
	};

	const handleClearFiles = () => {
		setSelectedFiles([]);
	}

	const handleUpload = async () => {
		
		if(!user) {
			setStatus('User not logged in');
			return;
		}

		if (selectedFiles.length > 0) {
			try {
				const result = await uploadFiles(section, user.email, selectedFiles);
				setStatus(result);
			}
			catch (error) {
				setStatus(error.message);	
				console.error('Error', error);
			}
		} else {
			setStatus('No files or directories selected');
		}
	}

	const handleFetchFileList = async () => {
		if(!user) {
			setStatus('User not logged in');
			return;
		}

		try {
			const filesList = await fetchFilesList(section, user.email);
			setSelectedFiles(filesList.map(file=>({name: file})));
		}
		catch (error) {
			setStatus(error.message);
			console.error("Error fetching files", error);
		}
	}

	const loadSections = async () => {
		try {
			const sections = await fetchSections();
			setSections(sections);
			if(sections.length > 0) {
				setSection(sections[0]);
			}
		}
		catch (error) {
			console.error('Error fetching sections: ', error);
		}
	}

	useEffect(() => {
		if(user) {
			loadSections();
		}
		else {
			setSections([]);
			setSelectedFiles([]);
			setSection('');
		}
	}, [user]);



	return (
		<FilesWrapper>
			<Panel flex="1">
	
            <div id='filesControls'>

				<div id="toolButtons">
					<div id='leftButtons'>
							<i className="fas fa-upload btn-files" onClick={() => document.getElementById('fileDirectoryInput').click()}></i>
						<input 
							type="file" 
							id="fileDirectoryInput" 
							name="fileDirectory" 
							webkitdirectory="true" 
							directory="true" 
							multiple 
							onChange={handleFileChange}
						/>
						<i className="fa-solid fa-file-arrow-up btn-files"></i>
					</div>

					<div id='rightButtons'>
						<i className="fa-solid fa-eraser btn-files" onClick={handleClearFiles}></i>
						<i className="fa-solid fa-xmark btn-files"></i>
					</div>
				</div>

				<div id='sectionControls'>
					<label htmlFor="sectionInput">Section</label>
					<select id="sectionInput" value={section} onChange={e => setSection(e.target.value)} >
						{ sections.map((sec, index) => (
							<option key={index} value={sec}>
								{sec}
							</option>
						))}
					</select>
				</div>

				<div id='filesListContainer'>
					<label id='filesLabel'>Files:</label>
					<ScrollableContainer>
						<ul>
							{selectedFiles.map((file, index) => (
								<li key={index}>{file.webkitRelativePath || file.name}</li>
							))}
						</ul>
					</ScrollableContainer>
				</div>
					
				<StyledButton id='btnUpload' onClick={handleUpload}>Upload</StyledButton>
				<StyledButton onClick={handleFetchFileList} >Fetch</StyledButton>

            </div>
		
			{ status && <p id='statusParagraph'>{status}</p> }

			</Panel>
		</FilesWrapper>
	);
};

export default Files;
