
import JSZip from 'jszip';

export const zipFiles = (files) => {
    const zip = new JSZip();

    Array.from(files).forEach(file => {
        zip.file(file.webkitRelativePath || file.name, file);
    });

    return zip.generateAsync({ type: 'blob' })
        .then(blob => {
            return { blob, zipFileName: 'upload.zip' };
        });
};

