/**
 * 
 */
package com.msb.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msb.backend.services.UserService;

/**
 * @author dheer
 *
 */
@RestController
@RequestMapping(value = "/secured/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping(value ="/{memberId}",produces = "application/json" )
	public ResponseEntity<?> fetchUserDetails(@PathVariable("memberId") String memberId){
		return new ResponseEntity<>(userService.fetchUserDetails(memberId), HttpStatus.OK);		
	}
	
}
