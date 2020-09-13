/**
 * 
 */
package com.msb.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.msb.backend.dao.MemberRelations;

/**
 * @author dheer
 *
 */
public interface MemberRelationRepository extends CrudRepository<MemberRelations, Long>{

	List<MemberRelations> findByMemberId(String memberId);
	
	List<MemberRelations> findBySponsorId(String sponsorId);
}
