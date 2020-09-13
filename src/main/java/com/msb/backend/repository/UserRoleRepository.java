/**
 * 
 */
package com.msb.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.msb.backend.dao.UserRole;

/**
 * @author dheer
 *
 */
public interface UserRoleRepository extends CrudRepository<UserRole, Long> {

	List<UserRole> findAll();
	
}
