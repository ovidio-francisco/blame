import React, { useState } from 'react';
import styled from 'styled-components';
import { getCurrentUserEmail } from '../../firebase/utils';
import { zipFiles } from '../../utils/fileUtils';

import Panel from '../Panel/Panel'
import ScrollableContainer  from '../ScrollableContainer/ScrollableContainer';
import { StyledButton } from '../StyledComponents/StyledComponents';

import '@fortawesome/fontawesome-free/css/all.min.css';

const FilesWrapper = styled.div`
	min-width: 20%;
	max-width: 20%;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	input[type="file"] {
		display: none;
	}

	form, #filesContainer {
		display: flex;
		flex: 1;
		overflow: hidden;
		flex-direction: inherit;
	}

	#toolButtons {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	#leftButtons i {
		margin-right: 0.2rem	
	}

	#rightButtons i {
		margin-left: 0.2rem	
	}

	#sectionControls {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	#sectionControls label {
		margin-right: 0.5em;
	}

	#sectionInput {
		padding: 0.2rem;
		width: 100%;
	}

    .btn-files {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        color: #6c757d;
        border: 1px solid #ced4da;
        border-radius: 4px;
		font-size: 1.2rem;
    }

    .btn-files:hover {
        background-color: #e2e6ea;
    }

	#filesLabel {
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 0.1rem;
	}

	button[type="submit"] {
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 0.5rem;
		font-weight: bold;
	}

	#statusParagraph {
		color: red;
	}
						
	#filesContainer ul li {
		list-style:none;
	}

	#filesContainer ul {
		padding-left: 1rem;
	}

`;


const Files = () => {
    const [status, setStatus] = useState('');
    const [section, setSection] = useState('Turma A');
    const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
        const input = event.target;
        const files = Array.from(input.files);
        setSelectedFiles(prevFiles => [...prevFiles, ...files]);
	};

    const handleUpload = async (event) => {
        event.preventDefault();

        if (selectedFiles.length > 0) {
            try {
                const { blob, zipFileName } = await zipFiles(selectedFiles);
                const formData = new FormData();
                formData.append('file', blob, zipFileName);
                formData.append('user', getCurrentUserEmail());
                formData.append('section', section);

                const response = await fetch('/files/upload', {
                    method: 'POST',
                    body: formData
                });

                const text = await response.text();
				setStatus(text);
            } catch (error) {
                setStatus('Error uploading: ' + error);
                console.error('Error:', error);
            }
        } else {
            setStatus('No files or directories selected');
        }
    };

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
						<i className="fa-solid fa-eraser btn-files"></i>
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

            </form>
		
			{ status && <p id='statusParagraph'>{status}</p> }

			</Panel>
		</FilesWrapper>
	);
};

export default Files;
