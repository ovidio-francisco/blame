import React, { useState } from 'react';
import styled from 'styled-components';
import { getCurrentUserEmail } from '../../firebase/utils';
import { zipFiles } from '../../utils/fileUtils';

const FileDirectoryUploadWrapper = styled.div`
	input[type="file"] {
		display: none;
	}

	.custom-file-upload {
		cursor: pointer;
	}
`


const FileDirectoryUpload = () => {
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
                // setStatus(text);
            } catch (error) {
                setStatus('Error uploading: ' + error);
                console.error('Error:', error);
            }
        } else {
            setStatus('No files or directories selected');
        }
    };

    return (
        <FileDirectoryUploadWrapper>
		
            <form onSubmit={handleUpload}>
				<div>
					<label htmlFor="sectionInput">Section</label>
					<input type="text" id="sectionInput" value={section} onChange={e => setSection(e.target.value)} />
				</div>
				<div>
					<label for="fileDirectoryInput" class="custom-file-upload">
							Select files
					</label>

					<input 
						type="file" 
						id="fileDirectoryInput" 
						name="fileDirectory" 
						webkitdirectory="true" 
						directory="true" 
						multiple 
						onChange={handleFileChange}
					/>
				</div>
				<div>
					<button type="submit">Upload</button>
				</div>	
				<div>
					<h4>Selected Files:</h4>
					<ul>
						{selectedFiles.map((file, index) => (
							<li key={index}>{file.webkitRelativePath || file.name}</li>
						))}
					</ul>
				</div>
            </form>
            <p>{status}</p>
		</FileDirectoryUploadWrapper>
    );
};

export default FileDirectoryUpload;


// https://css-tricks.com/snippets/css/custom-file-input-styling-webkitblink/

