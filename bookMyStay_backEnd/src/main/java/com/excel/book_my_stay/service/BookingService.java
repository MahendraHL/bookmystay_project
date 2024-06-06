package com.excel.book_my_stay.service;

import java.util.List;

import com.excel.book_my_stay.dto.BookingDto;

public interface BookingService {

	String postBooking(BookingDto dto);

	String deleteBooking(BookingDto dto);

	List<BookingDto> fetchBookingDetails(Integer customerId);

}
