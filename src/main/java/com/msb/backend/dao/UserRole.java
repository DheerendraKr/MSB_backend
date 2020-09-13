/**
 * 
 */
package com.msb.backend.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * @author dheer
 *
 */
@Entity
@Table(name = "roles")
public class UserRole implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 294461661927122551L;

	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(name = "role")
	private String role;

	@Column(name = "user")
	@ManyToMany(fetch = FetchType.LAZY)
	private List<UserDao> user;
	
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
	 * @return the role
	 */
	public String getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(String role) {
		this.role = role;
	}

	/**
	 * @return the user
	 */
	public List<UserDao> getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(List<UserDao> user) {
		this.user = user;
	}
	
	
}
