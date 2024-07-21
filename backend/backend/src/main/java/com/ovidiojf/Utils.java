package com.ovidiojf;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils {
	public static String currentTimeStamp() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH_mm_ss_SSS");
		
		return sdf.format(new Date()); 
	} 
	
	public static String nomalizeFileName(String name) {
		String result = name;
		
		result = result.replace(".", "Dot");
		result = result.replace("@", "At");
		result = result.replace(" ", "_");
		
		return result;
	}
}



