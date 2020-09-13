/**
 * 
 */
package com.msb.backend.model.response;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.msb.backend.model.enums.UserRoles;
import com.msb.backend.model.enums.UserStatus;

/**
 * @author dheerendra
 *
 */
@JsonInclude(value = Include.NON_NULL)
public class UserResponseModel {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String mobileNo;
	
	private String sponserId;
	
	private String memberId;
	
	private UserStatus userStatus;
	
	private Date joinedOn;
	
	private Date activatedOn;
	
	private Set<UserRoles> userRoles;

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
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
	 * @return the sponserId
	 */
	public String getSponserId() {
		return sponserId;
	}

	/**
	 * @param sponserId the sponserId to set
	 */
	public void setSponserId(String sponserId) {
		this.sponserId = sponserId;
	}

	/**
	 * @return the memberId
	 */
	public String getMemberId() {
		return memberId;
	}

	/**
	 * @param memberId the memberId to set
	 */
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	/**
	 * @return the userStatus
	 */
	public UserStatus getUserStatus() {
		return userStatus;
	}

	/**
	 * @param userStatus the userStatus to set
	 */
	public void setUserStatus(UserStatus userStatus) {
		this.userStatus = userStatus;
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
	 * @return the activatedOn
	 */
	public Date getActivatedOn() {
		return activatedOn;
	}

	/**
	 * @param activatedOn the activatedOn to set
	 */
	public void setActivatedOn(Date activatedOn) {
		this.activatedOn = activatedOn;
	}

	/**
	 * @return the userRoles
	 */
	public Set<UserRoles> getUserRoles() {
		return userRoles;
	}

	/**
	 * @param userRoles the userRoles to set
	 */
	public void setUserRoles(Set<UserRoles> userRoles) {
		this.userRoles = userRoles;
	}

	
}
	
