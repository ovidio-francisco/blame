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
@RequestMapping("/storage")
public class StorageController {

	private static final Logger logger = LoggerFactory.getLogger(StorageController.class);

	@Value("${file.upload-dir}")
	private String uploadDir;

    @PostMapping("/files/upload")
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

	@GetMapping("/files/list") 
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

	@GetMapping("/sections/list") 
	public ResponseEntity<List<String>> getSectionList(
			@RequestParam("user") String user) {

            user = Utils.normalizeFileName(user);

			try {

				File directory = new File(uploadDir, user  + File.separator);
				List<String> list = new ArrayList<>();
			

				if(directory.exists() && directory.isDirectory()) {
					File[] subdirectories = directory.listFiles(File::isDirectory);

					if (subdirectories != null) {
						for(File d : subdirectories) {
							list.add(d.getName());
						}
					}
				}


				return ResponseEntity.ok(list);
			}
			catch(Exception e) {
				logger.error("Failed to list files in the directory", e);

				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
			}

	}
}
