package com.ovidiojf;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class Utils {
	public static String currentTimeStamp() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH_mm_ss_SSS");
		
		return sdf.format(new Date()); 
	} 
	
	public static String normalizeFileName(String name) {
		String result = name;
		
		result = result.replace(".", "Dot");
		result = result.replace("@", "At");
		result = result.replace(" ", "_");
		
		return result;
	}

	public static void listFiles(File directory, List<String> list, int basePathLength) {
		File[] files = directory.listFiles();	

		if (files != null) {
			for( File f : files) {
				if(f.isDirectory()) {
					listFiles(f, list, basePathLength);
				}
				else {
					list.add(f.getAbsolutePath().substring(basePathLength+1));
				}
			}
		}
	}
}



