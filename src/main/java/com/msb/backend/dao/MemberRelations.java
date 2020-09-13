/**
 * 
 */
package com.msb.backend.dao;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author dheer
 *
 */
@Entity
@Table(name = "member_relation")
public class MemberRelations implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5070196852839740077L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column(name = "sponsorId", nullable = false)
	private String sponsorId;
	
	@Column(name = "memberId", nullable = false)
	private String memberId;
	
	@Column(name = "addedOn", nullable = false)
	private Date addedOn;

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the sponsorId
	 */
	public String getSponsorId() {
		return sponsorId;
	}

	/**
	 * @param sponsorId the sponsorId to set
	 */
	public void setSponsorId(String sponsorId) {
		this.sponsorId = sponsorId;
	}

	/**
	 * @return the memberId
	 */
	public String getMemberId() {
		return memberId;
	}

	/**
	 * @param memberId the memberId to set
	 */
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	/**
	 * @return the addedOn
	 */
	public Date getAddedOn() {
		return addedOn;
	}

	/**
	 * @param addedOn the addedOn to set
	 */
	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}
	
	
}
