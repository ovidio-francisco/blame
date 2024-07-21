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

@RestController
@RequestMapping("/files")
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
            // Save the uploaded zip file temporarily
            Path tempZipFile = Files.createTempFile("upload", ".zip");
            Files.write(tempZipFile, file.getBytes());
            
            user = Utils.nomalizeFileName(user);
            section = Utils.nomalizeFileName(section);

            File destDir = new File(uploadDir, user + File.separator + section + File.separator);
            if (!destDir.exists()) {
                destDir.mkdirs();
            }

            // Extract the zip file to the unique directory
            ZipUtils.unzip(tempZipFile.toFile(), destDir);
            Files.delete(tempZipFile);

            return ResponseEntity.ok("Directory uploaded and extracted successfully.");
        } catch (Exception e) {
            logger.error("Failed to process uploaded directory", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to process uploaded directory.");
        }
    }

}
