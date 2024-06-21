package com.excel.book_my_stay.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.excel.book_my_stay.exception.DuplicateLocationException;
import com.excel.book_my_stay.exception.DuplicatePropertyException;
import com.excel.book_my_stay.exception.DuplicateSubsciptionException;
import com.excel.book_my_stay.exception.InvalidAddressException;
import com.excel.book_my_stay.exception.InvalidBookingCancellationException;
import com.excel.book_my_stay.exception.InvalidBookingException;
import com.excel.book_my_stay.exception.InvalidLocationException;
import com.excel.book_my_stay.exception.InvalidPropertyException;
import com.excel.book_my_stay.exception.InvalidPropertyUrlException;
import com.excel.book_my_stay.exception.InvalidSignUpException;

@RestControllerAdvice
public class BookMyStayExpceptionHandler {
	
//---------------------Duplicate Property Exception Handler----------------------------
	
	@ExceptionHandler(DuplicatePropertyException.class)
	public ResponseEntity<String> duplicatePropertyHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Property Exception Handler----------------------------
	
	@ExceptionHandler(InvalidPropertyException.class)
	public ResponseEntity<String> invalidPropertyHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Location Exception Handler----------------------------
	
	@ExceptionHandler(InvalidLocationException.class)
	public ResponseEntity<String> invalidLocationHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Duplicate Location Exception Handler----------------------------

	@ExceptionHandler(DuplicateLocationException.class)
	public ResponseEntity<String> duplicateLocationHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Address Exception Handler----------------------------
	
	@ExceptionHandler(InvalidAddressException.class)
	public ResponseEntity<String> invalidAddressHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Duplicate Subscription Exception Handler----------------------------
	
	@ExceptionHandler(DuplicateSubsciptionException.class)
	public ResponseEntity<String> duplicateSubscriptionExceptionHander(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Booking Exception Handler----------------------------
	
	@ExceptionHandler(InvalidBookingException.class)
	public ResponseEntity<String> invalidBookingExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Booking Cancellation Exception Handler----------------------------
	
	@ExceptionHandler(InvalidBookingCancellationException.class)
	public ResponseEntity<String> invalidBookingCancellationExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Sign up Exception Handler----------------------------
	
	@ExceptionHandler(InvalidSignUpException.class)
	public ResponseEntity<String> invalidSignUpExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
//---------------------Invalid Property Url Exception Handler----------------------------
	
	@ExceptionHandler(InvalidPropertyUrlException.class)
	public ResponseEntity<String> invalidPropertyUrlExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
}
