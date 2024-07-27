import React, { useState } from 'react';
import { getCurrentUserEmail } from '../../firebase/utils';
import { fetchFilesList, uploadFiles } from '../../utils/apiUtils';

import Panel from '../Panel/Panel'
import ScrollableContainer  from '../ScrollableContainer/ScrollableContainer';
import { FilesWrapper } from './FilesStyles';
import { StyledButton } from '../StyledComponents/StyledComponents';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Files = () => {
    const [status, setStatus] = useState('');
    const [section, setSection] = useState('Turma A');
    const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
        const input = event.target;
        const files = Array.from(input.files);
        setSelectedFiles(prevFiles => [...prevFiles, ...files]);
	};

	const handleClearFiles = () => {
		setSelectedFiles([]);
	}

	const handleUpload = async (event) => {
		event.preventDefault();

		if (selectedFiles.length > 0) {
			try {
				const user = getCurrentUserEmail();
				const result = await uploadFiles(section, user, selectedFiles);
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

	const handleFetchFileList = async ()  => {
		try {
			const user = getCurrentUserEmail();
			const filesList = await fetchFilesList(section, user);
			setSelectedFiles(filesList.map(file=>({name: file})));
		}
		catch (error) {
			setStatus(error.message);
			console.error("Error fetching files", error);
		}
	}

	return (
		<FilesWrapper>
			<Panel flex="1">
	
            <form onSubmit={handleUpload}>

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
					<input 
						type="text" 
						id="sectionInput" 
						value={section} 
						onChange={e => setSection(e.target.value)} 
					/>
				</div>

				<div id='filesContainer'>
					<label id='filesLabel'>Files:</label>
					<ScrollableContainer>
						<ul>
							{selectedFiles.map((file, index) => (
								<li key={index}>{file.webkitRelativePath || file.name}</li>
							))}
						</ul>
					</ScrollableContainer>
				</div>
					
				<StyledButton type="submit">Upload</StyledButton>
				<StyledButton type="button" onClick={handleFetchFileList} >Fetch</StyledButton>

            </form>
		
			{ status && <p id='statusParagraph'>{status}</p> }

			</Panel>
		</FilesWrapper>
	);
};

export default Files;
