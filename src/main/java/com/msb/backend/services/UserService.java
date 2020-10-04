/**
 * 
 */
package com.msb.backend.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.msb.backend.model.request.UserRequestModel;
import com.msb.backend.model.response.UserDetailsResponseModels;
import com.msb.backend.model.response.UserResponseModel;
import com.msb.backend.shared.exceptions.MbsAppValidationException;

/**
 * @author dheer
 *
 */
public interface UserService extends UserDetailsService {

	
	UserResponseModel createUser(UserRequestModel userDetails);
	
	void validateSponsor(String memberId) throws MbsAppValidationException;
	
	UserDetailsResponseModels fetchUserDetails(final String memberId);
	
	UserDetails loadUserByUsername(String username);
	
	UserResponseModel getUserDetailsByEmail(String user);
	
}
