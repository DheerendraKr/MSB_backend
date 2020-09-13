/**
 * 
 */
package com.msb.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.msb.backend.model.request.AddMemberRequestModel;
import com.msb.backend.model.response.AddMemberResponseModel;
import com.msb.backend.model.response.MemberDetailsResponseModel;

/**
 * @author dheerendra
 *
 */
@Service
public interface MemberService {

	MemberDetailsResponseModel getCurrentMemberDetails();
	
	AddMemberResponseModel addNewMember(AddMemberRequestModel member);
	
	List<AddMemberResponseModel> getAddedMemberDetails();
	
}
