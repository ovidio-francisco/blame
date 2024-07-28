package com.ovidiojf;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/files")
// public class StorageController {
public class FileUploadController {

	private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);

	@Value("${file.upload-dir}")
	private String uploadDir;

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("user") String user,
            @RequestParam("section") String section) {

        try {
            
            Path tempZipFile = Files.createTempFile("upload", ".zip");
            Files.write(tempZipFile, file.getBytes());
            
            user = Utils.normalizeFileName(user);
            section = Utils.normalizeFileName(section);

            File destDir = new File(uploadDir, user + File.separator + section + File.separator);
            if (!destDir.exists()) {
                destDir.mkdirs();
            }

            ZipUtils.unzip(tempZipFile.toFile(), destDir);
            Files.delete(tempZipFile);

            return ResponseEntity.ok("Directory uploaded and extracted successfully.");
        } catch (Exception e) {
            logger.error("Failed to process uploaded directory", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to process uploaded directory.");
        }
    }

	@GetMapping("/list") 
	public ResponseEntity<List<String>> getFilesUploaded(
			@RequestParam("user") String user,
            @RequestParam("section") String section) {

            user = Utils.normalizeFileName(user);
            section = Utils.normalizeFileName(section);

			try {

				File directory = new File(uploadDir, user + File.separator + section + File.separator);
				
				if(!directory.exists() || !directory.isDirectory()) {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
				}

				int basePathLength = directory.getAbsolutePath().length();
				List<String> list = new ArrayList<>();

				Utils.listFiles(directory, list, basePathLength);

				return ResponseEntity.ok(list);

			}
			catch(Exception e) {
				logger.error("Failed to list files in the directory", e);

				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
			}
	}

	// http://localhost:8080/files/list?user=ovidiojf@gmail.com&section=Turma_BBB

}
