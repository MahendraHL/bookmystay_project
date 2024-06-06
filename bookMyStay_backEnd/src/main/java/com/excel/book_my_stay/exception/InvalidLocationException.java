package com.excel.book_my_stay.exception;

public class InvalidLocationException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public InvalidLocationException(String message) {
		super(message);
	}

}
