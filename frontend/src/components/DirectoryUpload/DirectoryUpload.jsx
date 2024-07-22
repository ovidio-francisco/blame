import React, { useState } from 'react';
import JSZip from 'jszip';
import { getCurrentUserEmail } from '../../firebase/utils';

const zipFiles = (files) => {
    const zip = new JSZip();

    Array.from(files).forEach(file => {
        zip.file(file.webkitRelativePath || file.name, file);
    });

    return zip.generateAsync({ type: 'blob' })
        .then(blob => {
            return { blob, zipFileName: 'upload.zip' };
        });
};


const FileDirectoryUpload = () => {
    const [status, setStatus] = useState('');
    const [section, setSection] = useState('Turma A');

    const handleUpload = async (event) => {
        event.preventDefault();
        const input = document.getElementById('fileDirectoryInput');
        const files = input.files;

        if (files.length > 0) {
            try {
                const { blob, zipFileName } = await zipFiles(files);
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
        <div>
			<fieldset>
			<legend>Upload files</legend>
            <form onSubmit={handleUpload}>
				<div>
					<label htmlFor="sectionInput">Section</label>
					<input type="text" id="sectionInput" value={section} onChange={e => setSection(e.target.value)} />
				</div>
				<div>
					<input type="file" id="fileDirectoryInput" name="fileDirectory" webkitdirectory="true" directory="true" multiple />
					<button type="submit">Upload</button>
				</div>
            </form>
            <p>{status}</p>
			</fieldset>
        </div>
    );
};

export default FileDirectoryUpload;


// https://css-tricks.com/snippets/css/custom-file-input-styling-webkitblink/

