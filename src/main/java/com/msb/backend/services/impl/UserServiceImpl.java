/**
 * 
 */
package com.msb.backend.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.msb.backend.dao.MemberRelations;
import com.msb.backend.dao.UserDao;
import com.msb.backend.dao.UserRole;
import com.msb.backend.dao.UsersStatus;
import com.msb.backend.model.enums.UserRoles;
import com.msb.backend.model.enums.UserStatus;
import com.msb.backend.model.request.UserRequestModel;
import com.msb.backend.model.response.UserDetailsResponseModels;
import com.msb.backend.model.response.UserResponseModel;
import com.msb.backend.repository.MemberRelationRepository;
import com.msb.backend.repository.NewMemberRepository;
import com.msb.backend.repository.UserRepository;
import com.msb.backend.repository.UserRoleRepository;
import com.msb.backend.repository.UserStatusRepository;
import com.msb.backend.services.UserService;
import com.msb.backend.shared.exceptions.MbsAppValidationException;
import com.msb.backend.shared.models.ErrorModel;
import com.msb.backend.shared.utility.AppUtility;

/**
 * @author dheer
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private MemberRelationRepository memberRelationRepository;
	
	@Autowired
	private NewMemberRepository newMemberRepository;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Autowired
	private UserStatusRepository userStatusRepository;

	private static List<UserRole> userRoles = new ArrayList<>();

	private static UsersStatus activeUserStatus;

	private static ModelMapper modelMapper = null;

	@PostConstruct
	public void init() {
		// initializing model-mapper
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		//initializing roles
		userRoles = userRoleRepository.findAll().stream()
				.filter(item -> item.getRole().equals(UserRoles.USER.toString())).collect(Collectors.toList());
		//initializing staus
		activeUserStatus = userStatusRepository.findByStatus(UserStatus.ACTIVE.toString());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDao userDao = userRepository.findByMemberId(username);
		if (userDao == null)
			throw new UsernameNotFoundException(username);
		return new User(userDao.getEmail(), userDao.getPassword(), true, true, true, true, new ArrayList<>());
	}

	@Override
	@Transactional
	public UserResponseModel getUserDetailsByEmail(String email) {
		UserDao userDao = userRepository.findByEmail(email);
		if (userDao == null)
			throw new UsernameNotFoundException("User not found");
		UserResponseModel userResponse = modelMapper.map(userDao, UserResponseModel.class);
		userResponse.setUserStatus(UserStatus.value(userDao.getStatus().getStatus()));
		userResponse.setUserRoles(convertToRoleEnum(userDao.getRoles()));
		return userResponse;
	}

	@Override
	public UserResponseModel createUser(UserRequestModel userDetails) {
		userDetails.setPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
		UserDao userDao = modelMapper.map(userDetails, UserDao.class);
		userDao.setJoinedOn(new Date(System.currentTimeMillis()));
		userDao.setStatus(activeUserStatus);
		userDao.setRoles(userRoles);
		userRepository.save(userDao);
		//deleting from new member table
		newMemberRepository.deleteByMemberId(userDetails.getMemberId());
		return modelMapper.map(userDao, UserResponseModel.class);
	}

	@Override
	public void validateSponsor(String memberId) throws MbsAppValidationException {
		List<MemberRelations> memberList = memberRelationRepository.findByMemberId(memberId);
		if (memberList.isEmpty()) {
			throw new MbsAppValidationException(new ErrorModel("", "", "", new Date(System.currentTimeMillis()),
					HttpStatus.BAD_REQUEST, AppUtility.getHostName()));
		}
	}

	private Set<UserRoles> convertToRoleEnum(List<UserRole> roles) {
		Set<UserRoles> rolesEnum = new HashSet<>();
		roles.stream().forEach(role -> rolesEnum.add(UserRoles.value(role.getRole())));
		return rolesEnum;
	}

	@Override
	public UserDetailsResponseModels fetchUserDetails(String memberId) {
		UserDao userByMemberId = userRepository.findByMemberId(memberId);		
		return this.createUserDetailsResponse(userByMemberId);
	}
	
	
	
	private UserDetailsResponseModels createUserDetailsResponse(final UserDao user) {
		UserDetailsResponseModels userResponse = new UserDetailsResponseModels();
		userResponse.setName(user.getFirstName()+" "+user.getLastName());
		userResponse.setMobileNo(user.getMobileNo());
		userResponse.setEmail(user.getEmail());
		userResponse.setJoinedOn(user.getJoinedOn());
		userResponse.setActiveFrom(user.getActivatedOn());
		userResponse.setTotalEarnings(this.calculateEarningForUser(user.getMemberId()));
		userResponse.setAddedMembers(this.calculateTotalAddedMembers(user.getMemberId()));
		return userResponse;
	}

	
	private long calculateEarningForUser(final String memberId) {	
		return 0;
	}
	
	private int calculateTotalAddedMembers(final String memberId) {
		return memberRelationRepository.findBySponsorId(memberId).size();
	}
	
}
