/**
 * 
 */
package com.msb.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@GetMapping(value = "/{memberId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getCurrentMemberDetails(@PathVariable("memberId") String memberId){
		return new ResponseEntity<>(memberService.getCurrentMemberDetails(memberId), HttpStatus.OK);
	}
	
	@GetMapping(value = "/{memberId}/added",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAddedMembers(@PathVariable("memberId") String memberId){
		return new ResponseEntity<>(memberService.getAddedMemberDetails(memberId), HttpStatus.OK);
	}
	
	@PostMapping(value = "/{sponsorId}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<?> addNewMember(@PathVariable("sponsorId") String sponsorId, @RequestBody AddMemberRequestModel member){
		// validate input data		
		return new ResponseEntity<>(memberService.addNewMember(member, sponsorId), HttpStatus.CREATED);
	}
	
	
}
