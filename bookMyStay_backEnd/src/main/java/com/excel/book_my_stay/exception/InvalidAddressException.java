package com.excel.book_my_stay.exception;

public class InvalidAddressException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InvalidAddressException(String message) {
		super(message);
	}

}
