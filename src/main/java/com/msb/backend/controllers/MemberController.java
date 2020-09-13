/**
 * 
 */
package com.msb.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msb.backend.model.request.AddMemberRequestModel;
import com.msb.backend.services.MemberService;

/**
 * @author dheerendra
 *
 */
@RestController
@RequestMapping("/secured/members")
public class MemberController {
	
	@Autowired
	private MemberService memberService;

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCurrentMemberDetails(){
		return new ResponseEntity<>(memberService.getCurrentMemberDetails(), HttpStatus.OK);
	}
	
	@GetMapping(value = "/added",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAddedMembers(){
		return new ResponseEntity<>(memberService.getAddedMemberDetails(), HttpStatus.OK);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<?> addNewMember(@RequestBody AddMemberRequestModel member){
		// validate input data		
		return new ResponseEntity<>(memberService.addNewMember(member), HttpStatus.CREATED);
	}
	
	
}
