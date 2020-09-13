/**
 * 
 */
package com.msb.backend.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.msb.backend.dao.UserDao;
/**
 * @author dheerendra
 *
 */
public interface UserRepository extends CrudRepository<UserDao, Long>{
	
	UserDao findByMemberId(String memberId);
	
	UserDao findByEmail(String email);
	
	List<UserDao> findByMemberIdIn(List<String> memberId);
}