import { zipFiles } from './fileUtils';

const FILE_UPLOAD_URL = '/storage/files/upload';
const FILE_LIST_URL   = '/storage/files/list';

export const uploadFiles = async (section, user, selectedFiles) => {

	try {
		const { blob, zipFileName } = await zipFiles(selectedFiles);
		const formData = new FormData();
		formData.append('file', blob, zipFileName);
		formData.append('user', user);
		formData.append('section', section);

		const response = await fetch(FILE_UPLOAD_URL, {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			throw new Error('Failed to upload files');
		}

		return await response.text();
	} catch (error) {
		throw new Error(`Error uploading ${error.message}`);
	}
};



export const fetchFilesList = async (section, user) => {
	try {
		const response = await fetch(`${FILE_LIST_URL}?user=${user}&section=${section}`);

		if (!response.ok) {
			throw new Error('Failed to fetch files list');
		}

		const contentType = response.headers.get('content-type');
		if(contentType && contentType.indexOf('application/json') !== -1) {
			return await response.json();
		}
		else {
			throw new Error('Unexpected response content type');
		}
	}
	catch (error) {
		console.error("Error fetching files", error);
	}
};






