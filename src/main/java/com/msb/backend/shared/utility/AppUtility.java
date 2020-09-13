/**
 * 
 */
package com.msb.backend.shared.utility;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Random;

/**
 * @author dheerendra
 *
 */
public class AppUtility {

	private AppUtility() {
	}

	public static String generateMemberId(final String... info) {
		StringBuilder memberId = new StringBuilder(10);
		for (String item : info) {
			item = item.replaceAll("\\s", "");
			memberId.append(item);
			if (memberId.length() > 7) {
				memberId = new StringBuilder(memberId.substring(0, 7));
				break;
			}
		}		
		memberId = memberId.append(generateRandomString(memberId.length()));
		return memberId.toString().toUpperCase();
	}

	public static String getHostName() {
		try {
			return InetAddress.getLocalHost().getHostName();
		} catch (UnknownHostException e) {
			// do nothing
		}
		return null;
	}
	
	public static String generateRandomString(int length) {
		int leftLimit = 48; // numeral '0'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = length;
	    Random random = new Random();
	 
	    return random.ints(leftLimit, rightLimit + 1)
	      .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
	      .limit(targetStringLength)
	      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	      .toString();
	}

}
