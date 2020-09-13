/**
 * 
 */
package com.msb.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.msb.backend.dao.UsersStatus;

/**
 * @author dheer
 *
 */
public interface UserStatusRepository extends CrudRepository<UsersStatus, Long> {

	UsersStatus findByStatus(String status);
}
