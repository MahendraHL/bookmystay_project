package com.excel.book_my_stay.exception;

public class DuplicatePropertyException extends RuntimeException{

	public static final long serialVersionUID = 1L;
	
	public DuplicatePropertyException(String message)
	{
		super(message);
	}
}
