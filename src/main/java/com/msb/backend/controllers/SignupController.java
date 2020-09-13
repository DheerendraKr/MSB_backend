/**
 * 
 */
package com.msb.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.msb.backend.model.request.UserRequestModel;
import com.msb.backend.model.response.UserResponseModel;
import com.msb.backend.services.UserService;
import com.msb.backend.shared.exceptions.MbsAppValidationException;

/**
 * @author dheerendra
 *
	 */
@RestController
public class SignupController {

	@Autowired
	private UserService userService;
		
	
	@PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> signup(@RequestBody @Validated UserRequestModel user) throws MbsAppValidationException{
		userService.validateSponsor(user.getMemberId());
		UserResponseModel response = userService.createUser(user);	
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
	
}
