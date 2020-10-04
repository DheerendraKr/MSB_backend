/**
 * 
 */
package com.msb.backend.model.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author dheer
 *
 */
@JsonInclude(value = Include.NON_NULL)
public class MemberDetailsResponseModel extends UserResponseModel {

	private List<UserResponseModel> addedMembersDetails;

	/**
	 * @return the addedMembers
	 */
	public List<UserResponseModel> getAddedMembers() {
		return addedMembersDetails;
	}

	/**
	 * @param addedMembers the addedMembers to set
	 */
	public void setAddedMembers(List<UserResponseModel> addedMembersDetails) {
		this.addedMembersDetails = addedMembersDetails;
	}
	
}
