import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { fetchFilesList, uploadFiles, fetchSections } from '../../utils/apiUtils';

import Panel from '../Panel/Panel'
import ScrollableContainer  from '../ScrollableContainer/ScrollableContainer';
import { FilesWrapper } from './FilesStyles';
import { StyledButton } from '../StyledComponents/StyledComponents';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';


const Files = ({setLoading, setStatus}) => {
	const [user] = useAuthState(auth);
    const [section, setSection] = useState('');
    const [sections, setSections] = useState([]);
    const [filesSection, setFilesSection] = useState([]); 
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [visuallyDeletedFiles, setvisuallyDeletedFiles] = useState([]);

	const toggleFileSelection = (file) => {
		setSelectedFiles(prevSelected => {
			if (prevSelected.includes(file)) {
				return prevSelected.filter(f => f !== file);
			}
			else {
				return [...prevSelected, file];
			}
		})	
	}

	const handleFileChange = (event) => {
        const input = event.target;
        const selectedFiles = Array.from(input.files);

		const files = selectedFiles.map(f => ({file: f, stored:'local'}));

        setFilesSection(prevFiles => [...prevFiles, ...files]);
	};

	const handleClearFiles = () => {
		setFilesSection([]);
	}

	const handleUpload = async () => {
		
		if(!user) {
			setStatus('User not logged in');
			return;
		}

		const localFiles = filesSection.filter(f => f.stored === 'local');
		const files = localFiles.map(f => (f.file));

		if (files.length > 0) {
			setLoading(true);
			try {
				const result = await uploadFiles(section, user.email, files); 
				setStatus(result);

				const updatedFileList = await fetchFilesList(section, user.email);
				updateFilesSection(updatedFileList, 'remote');

			}
			catch (error) {
				setStatus(error.message);	
				console.error('Error', error);
			}
			finally {
				setLoading(false);
			}
		} else {
			setStatus('No files or directories selected');
		}
	}


	useEffect(() => {

		const loadSections = async () => {
			try {
				const sections = await fetchSections(user.email);
				setSections(sections);
				if(sections.length > 0) {
					setSection(sections[0]);
				}
			}
			catch (error) {
				console.error('Error fetching sections: ', error);
			}
		}

		if(user) {
			loadSections();
		}
		else {
			setSections([]);
			setFilesSection([]);
			setSection('');
		}
	}, [user]);


	useEffect(() => {
		const handleFetchFileList = async () => {
			if(!user) {
				setStatus('User not logged in');
				return;
			}
			setLoading(true);
			try {
				const filesList = await fetchFilesList(section, user.email);
				updateFilesSection(filesList, 'remote');
			}
			catch (error) {
				setStatus(error.message);
				console.error("Error fetching files", error);
			}
			finally {
				setLoading(false);
			}
		}

		if (section && user) {
			handleFetchFileList();
		}
	}, [user, section, setLoading, setStatus]);

	const updateFilesSection = (files, whereis) => {
		setFilesSection(files.map(fileName=>({file: fileName, stored: whereis})));
	}

	return (
		<FilesWrapper>
			<Panel flex="1">
	
            <div id='filesControls'>

				<div id="toolButtons">
					<div id='leftButtons'>
						<i className="fas fa-upload btn-files" aria-label="Select files to upload" onClick={() => document.getElementById('fileDirectoryInput').click()}></i>
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
							{filesSection.map((f, index) => (
								<li 
									key={index}
									className={`${f.stored === 'local' ? 'local-file' : 'remote-file'} ${selectedFiles.includes(f.file) ? 'selectedFile' : ''}`}			
									onClick={() => toggleFileSelection(f.file)}
								>
									{f.file.webkitRelativePath || f.file}
								</li>
							))}
						</ul>
					</ScrollableContainer>
				</div>
					
				<StyledButton id='btnUpload' onClick={handleUpload}>Upload</StyledButton>

            </div>

			</Panel>
		</FilesWrapper>
	);
};

export default Files;


