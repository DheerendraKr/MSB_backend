/**
 * 
 */
package com.msb.backend.model.enums;

/**
 * @author dheerendra
 *
 */
public enum UserRoles {
	ADMIN("ADMIN"),
	USER("USER");
	
	public final String label;
	 
    private UserRoles(String label) {
        this.label = label;
    }
	
	public static UserRoles value(String label) {
	    for (UserRoles e : values()) {
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
