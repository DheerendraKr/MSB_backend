/**
 * 
 */
package com.msb.backend.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msb.backend.dao.MemberDao;
import com.msb.backend.dao.MemberRelations;
import com.msb.backend.dao.UserDao;
import com.msb.backend.dao.UserRole;
import com.msb.backend.model.enums.UserRoles;
import com.msb.backend.model.enums.UserStatus;
import com.msb.backend.model.request.AddMemberRequestModel;
import com.msb.backend.model.response.AddMemberResponseModel;
import com.msb.backend.model.response.MemberDetailsResponseModel;
import com.msb.backend.model.response.UserResponseModel;
import com.msb.backend.repository.MemberRelationRepository;
import com.msb.backend.repository.NewMemberRepository;
import com.msb.backend.repository.UserRepository;
import com.msb.backend.services.MemberService;
import com.msb.backend.shared.utility.AppUtility;

/**
 * @author dheerendra
 *
 */
@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberRelationRepository memberRelationRepository;

	@Autowired
	private NewMemberRepository memberRepository;

	@Autowired
	private UserRepository userRepository;

	private static ModelMapper modelMapper = null;

	@PostConstruct
	public void init() {
		// initializing model-mapper
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	@Override
	public MemberDetailsResponseModel getCurrentMemberDetails() {
		MemberDetailsResponseModel memberDetailModel;
		String sponsorId = getUserId();
		UserDao user = userRepository.findByMemberId(sponsorId);
		memberDetailModel = modelMapper.map(user, MemberDetailsResponseModel.class);
		memberDetailModel.setUserStatus(UserStatus.value(user.getStatus().getStatus()));
		memberDetailModel.setUserRoles(getRoles(user.getRoles()));
		List<UserResponseModel> addedMembersList = new ArrayList<>();
		List<String> addedMembersIdsList = new ArrayList<>();
		List<MemberRelations> memberRelationsList = memberRelationRepository.findBySponsorId(sponsorId);
		memberRelationsList.stream().forEach(item -> addedMembersIdsList.add(item.getMemberId()));
		if (addedMembersIdsList.isEmpty()) {
			memberDetailModel.setAddedMembers(addedMembersList);
			return memberDetailModel;
		}
		List<UserDao> usersList = userRepository.findByMemberIdIn(addedMembersIdsList);
		usersList.stream().forEach(item -> {
			UserResponseModel tempModel = modelMapper.map(item, UserResponseModel.class);
			tempModel.setUserStatus(UserStatus.value(item.getStatus().getStatus()));
			tempModel.setUserRoles(getRoles(item.getRoles()));
			addedMembersList.add(tempModel);
		});
		memberDetailModel.setAddedMembers(addedMembersList);
		return memberDetailModel;
	}

	@Override
	public List<AddMemberResponseModel> getAddedMemberDetails() {
		List<String> memberIds = new ArrayList<>();
		List<AddMemberResponseModel> memberResponseList = new ArrayList<>();
		List<MemberRelations> memberRelationDetails = memberRelationRepository.findBySponsorId(getUserId());
		memberRelationDetails.stream().forEach(item -> memberIds.add(item.getMemberId()));
		if (memberIds.isEmpty()) {
			return memberResponseList;
		}
		List<MemberDao> memberDetails = memberRepository.findByMemberIdIn(memberIds);
		memberDetails.stream()
				.forEach(item -> memberResponseList.add(modelMapper.map(item, AddMemberResponseModel.class)));
		return memberResponseList;
	}

	@Override
	public AddMemberResponseModel addNewMember(final AddMemberRequestModel member) {
		MemberDao memberDao = modelMapper.map(member, MemberDao.class);
		MemberRelations memberRelation = new MemberRelations();
		String memberId = AppUtility.generateMemberId(member.getName());
		Date currentTimestamp = new Date(System.currentTimeMillis());
		memberDao.setAddedOn(currentTimestamp);
		memberDao.setMemberId(memberId);
		memberRelation.setAddedOn(currentTimestamp);
		memberRelation.setMemberId(memberId);
		memberRelation.setSponsorId(getUserId());
		memberRelationRepository.save(memberRelation);
		memberRepository.save(memberDao);
		return modelMapper.map(memberDao, AddMemberResponseModel.class);
	}

	private String getUserId() {
		// to be implemented
		return "itsme";
	}

	
	private Set<UserRoles> getRoles(List<UserRole> roles) {
		Set<UserRoles> rolesEnum = new HashSet<>();
		roles.forEach(role->rolesEnum.add(UserRoles.value(role.getRole())));		
		return rolesEnum;
	}
}
