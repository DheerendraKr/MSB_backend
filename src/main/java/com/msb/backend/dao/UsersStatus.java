/**
 * 
 */
package com.msb.backend.dao;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author dheer
 *
 */
@Entity
@Table(name = "status")
public class UsersStatus implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5725080842584543697L;

	@Id
	@GeneratedValue
	private long id;
	
	
	private String status;


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
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}


	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
}
