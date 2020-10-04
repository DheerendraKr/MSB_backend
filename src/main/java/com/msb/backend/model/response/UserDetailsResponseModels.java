/**
 * 
 */
package com.msb.backend.model.response;

import java.util.Date;

/**
 * @author dheer
 *
 */
public class UserDetailsResponseModels {
	
	private String name;
	
	private String mobileNo;
	
	private String email;
	
	private int addedMembers;
	
	private Date joinedOn;
	
	private Date activeFrom;
	
	private long totalEarnings;

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the mobileNo
	 */
	public String getMobileNo() {
		return mobileNo;
	}

	/**
	 * @param mobileNo the mobileNo to set
	 */
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the addedMembers
	 */
	public int getAddedMembers() {
		return addedMembers;
	}

	/**
	 * @param addedMembers the addedMembers to set
	 */
	public void setAddedMembers(int addedMembers) {
		this.addedMembers = addedMembers;
	}

	/**
	 * @return the joinedOn
	 */
	public Date getJoinedOn() {
		return joinedOn;
	}

	/**
	 * @param joinedOn the joinedOn to set
	 */
	public void setJoinedOn(Date joinedOn) {
		this.joinedOn = joinedOn;
	}

	/**
	 * @return the activeFrom
	 */
	public Date getActiveFrom() {
		return activeFrom;
	}

	/**
	 * @param activeFrom the activeFrom to set
	 */
	public void setActiveFrom(Date activeFrom) {
		this.activeFrom = activeFrom;
	}

	/**
	 * @return the totalEarnings
	 */
	public long getTotalEarnings() {
		return totalEarnings;
	}

	/**
	 * @param totalEarnings the totalEarnings to set
	 */
	public void setTotalEarnings(long totalEarnings) {
		this.totalEarnings = totalEarnings;
	}
}
  