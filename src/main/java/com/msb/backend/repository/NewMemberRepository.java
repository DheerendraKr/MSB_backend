/**
 * 
 */
package com.msb.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.msb.backend.dao.MemberDao;

/**
 * @author dheer
 *
 */
public interface NewMemberRepository extends CrudRepository<MemberDao, Long> {
	
	List<MemberDao> findByMemberIdIn(List<String> memberId);
	
}
