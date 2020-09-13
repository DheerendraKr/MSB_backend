/**
 * 
 */
package com.msb.backend.shared.exceptions;

import com.msb.backend.shared.models.ErrorModel;

/**
 * @author dheer
 *
 */
public class MbsAppValidationException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6182852790597396417L;

	private ErrorModel error;
	
	public MbsAppValidationException(String  message) {
		super(message);		
	}
	
	public MbsAppValidationException(ErrorModel error) {
		super();
		this.setError(error);
	}

	/**
	 * @return the error
	 */
	public ErrorModel getError() {
		return error;
	}

	/**
	 * @param error the error to set
	 */
	public void setError(ErrorModel error) {
		this.error = error;
	}
	
	
	
}
