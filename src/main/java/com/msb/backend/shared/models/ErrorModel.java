/**
 * 
 */
package com.msb.backend.shared.models;

import java.util.Date;

import org.springframework.http.HttpStatus;

/**
 * @author dheerendra
 *
 */
public class ErrorModel {

	private String errorCode;
	
	private String message;
	
	private String originalMessage;
	
	private Date timestamp;
	
	private HttpStatus status;
	
	private String hostName;
	
	
	/**
	 * @param errorCode
	 * @param message
	 * @param originalMessage
	 * @param timestamp
	 * @param status
	 * @param hostName
	 */
	public ErrorModel(String errorCode, String message, String originalMessage, Date timestamp, HttpStatus status,
			String hostName) {
		super();
		this.errorCode = errorCode;
		this.message = message;
		this.originalMessage = originalMessage;
		this.timestamp = timestamp;
		this.status = status;
		this.hostName = hostName;
	}

	public ErrorModel() {
		super();
	}



	/**
	 * @return the errorCode
	 */
	public String getErrorCode() {
		return errorCode;
	}

	/**
	 * @param errorCode the errorCode to set
	 */
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return the originalMessage
	 */
	public String getOriginalMessage() {
		return originalMessage;
	}

	/**
	 * @param originalMessage the originalMessage to set
	 */
	public void setOriginalMessage(String originalMessage) {
		this.originalMessage = originalMessage;
	}

	/**
	 * @return the status
	 */
	public HttpStatus getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	/**
	 * @return the hostName
	 */
	public String getHostName() {
		return hostName;
	}

	/**
	 * @param hostName the hostName to set
	 */
	public void setHostName(String hostName) {
		this.hostName = hostName;
	}

	/**
	 * @return the timestamp
	 */
	public Date getTimestamp() {
		return timestamp;
	}

	/**
	 * @param timestamp the timestamp to set
	 */
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	
	
	
}
