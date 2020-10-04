/**
 * 
 */
package com.msb.backend.model.enums;

/**
 * @author dheerendra
 *
 */
public enum UserStatus {
	ACTIVE("ACTIVE"),
	PENDING("PENDING"),
	DEACTIVATED("DEACTIVATED"),
	CREATED("CREATED");
	
	public final String label;
	 
    private UserStatus(String label) {
        this.label = label;
    }
	
	public static UserStatus value(String label) {
	    for (UserStatus e : values()) {
	        if (e.label.equals(label)) {
	            return e;
	        }
	    }
	    return null;
	}
	
	@Override 
	public String toString() { 
	    return this.label; 
	}
}
