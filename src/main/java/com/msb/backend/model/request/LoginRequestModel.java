/**
 * 
 */
package com.msb.backend.model.request;

/**
 * @author dheer
 *
 */

public class LoginRequestModel {

	private String memberId;
	
	private String password;

	/**
	 * @return the userId
	 */
	public String getMemberId() {
		return memberId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	
}
