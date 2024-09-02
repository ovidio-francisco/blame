import { zipFiles } from './fileUtils';

const FILES_UPLOAD_URL  = '/storage/files/upload';
const FILES_LIST_URL    = '/storage/files/list';
const SECTIONS_LIST_URL = '/storage/sections/list';

// TODO: renomedar para compareFiles
export const uploadFiles = async (section, user, files) => {

	try {
		const { blob, zipFileName } = await zipFiles(files);
		const formData = new FormData();
		formData.append('file', blob, zipFileName);
		formData.append('user', user);
		formData.append('section', section);

		const response = await fetch(FILES_UPLOAD_URL, {
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


export const deleteRemoteFiles = async (section, user, files) => {
	console.log("Deleting: ", files);

	try {
		const formData = new FormData();
		formData.append('')
	}
	catch(error) {
		throw new Error(`Error deleting files ${error.message}`);
	}

}


export const fetchFilesList = async (section, user) => {
	try {
		const response = await fetch(`${FILES_LIST_URL}?user=${user}&section=${section}`);

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


export const fetchSections = async (user) => {
	try {
		const response = await fetch(`${SECTIONS_LIST_URL}?user=${user}`);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to fetch sections list: ${errorText}`);
		}

		const contentType = response.headers.get('content-type');
		if (contentType && contentType.indexOf('application/json') !== -1) {
			return await response.json();
		}
		else {
			throw new Error("Unexpected resonse content type");
		}
	}
	catch (error) {
		console.error("Error fetching sections", error);
	}

	// return ['Turma RRR', 'Turma AAA', 'Turma LLL', 'Turma OOO'];
}




