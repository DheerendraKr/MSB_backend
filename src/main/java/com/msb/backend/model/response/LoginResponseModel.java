/**
 * 
 */
package com.msb.backend.model.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.msb.backend.model.enums.UserRoles;

/**
 * @author dheerendra
 *
 */
@JsonInclude(value = Include.NON_NULL)
public class LoginResponseModel {
	
	private String userName;
	
	private String access_token;
	
	private long expires_in;
	
	private String token_type;
	
	private String refresh_token;
	
	private List<UserRoles> roles;

	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the access_token
	 */
	public String getAccess_token() {
		return access_token;
	}

	/**
	 * @param access_token the access_token to set
	 */
	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	/**
	 * @return the expires_in
	 */
	public long getExpires_in() {
		return expires_in;
	}

	/**
	 * @param expires_in the expires_in to set
	 */
	public void setExpires_in(long expires_in) {
		this.expires_in = expires_in;
	}

	/**
	 * @return the token_type
	 */
	public String getToken_type() {
		return token_type;
	}

	/**
	 * @param token_type the token_type to set
	 */
	public void setToken_type(String token_type) {
		this.token_type = token_type;
	}

	/**
	 * @return the refresh_token
	 */
	public String getRefresh_token() {
		return refresh_token;
	}

	/**
	 * @param refresh_token the refresh_token to set
	 */
	public void setRefresh_token(String refresh_token) {
		this.refresh_token = refresh_token;
	}

	/**
	 * @return the roles
	 */
	public List<UserRoles> getRoles() {
		return roles;
	}

	/**
	 * @param roles the roles to set
	 */
	public void setRoles(List<UserRoles> roles) {
		this.roles = roles;
	}
	
}
