package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.BOOKING_CANCEL_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.BOOKING_SAVED_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.BOOKING_DETAILS_FETCH;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.excel.book_my_stay.dto.BookingDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.BookingService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
//-------------------------------Post Booking-------------------------------------------
		
		@PostMapping("/postbooking")
		public ResponseEntity<CommonResponse<String>> postBooking(@RequestBody BookingDto dto) {
			String booking = bookingService.postBooking(dto);
			return ResponseEntity.status(HttpStatus.OK).body(
					CommonResponse.<String>builder().data(booking).isError(false).message(BOOKING_SAVED_MESSAGE).build());
		}
		
//--------------------------------Update Cancel Booking----------------------------------
		
		@PutMapping("/cancelbooking")
		public ResponseEntity<CommonResponse<String>> cancelBooking(@RequestBody BookingDto dto) {
			String bookingDto = bookingService.deleteBooking(dto);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(bookingDto)
					.isError(false).message(BOOKING_CANCEL_MESSAGE).build());
		}
		
//--------------------------get booking by customer id-------------------------------------
		
		@GetMapping("/getbooking/{customerId}")
		public ResponseEntity<CommonResponse<List<BookingDto>>> getBookingDetails(@PathVariable Integer customerId){
			List<BookingDto> booking = bookingService.fetchBookingDetails(customerId);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<BookingDto>>builder()
					.data(booking).message(BOOKING_DETAILS_FETCH).build());
		}
}
