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
	
	@ExceptionHandler(DuplicatePropertyException.class)
	public ResponseEntity<String> duplicatePropertyHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidPropertyException.class)
	public ResponseEntity<String> invalidPropertyHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidLocationException.class)
	public ResponseEntity<String> invalidLocationHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}

	@ExceptionHandler(DuplicateLocationException.class)
	public ResponseEntity<String> duplicateLocationHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidAddressException.class)
	public ResponseEntity<String> invalidAddressHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(DuplicateSubsciptionException.class)
	public ResponseEntity<String> duplicateSubscriptionExceptionHander(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidBookingException.class)
	public ResponseEntity<String> invalidBookingExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidBookingCancellationException.class)
	public ResponseEntity<String> invalidBookingCancellationExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidSignUpException.class)
	public ResponseEntity<String> invalidSignUpExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
	@ExceptionHandler(InvalidPropertyUrlException.class)
	public ResponseEntity<String> invalidPropertyUrlExceptionHandler(RuntimeException exe){
		return ResponseEntity.status(HttpStatus.OK).body(exe.getMessage());
	}
	
}
