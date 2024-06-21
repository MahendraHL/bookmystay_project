package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_BOOKING_CANCELLATION_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_BOOKING_INFO_MESSAGE;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.excel.book_my_stay.dto.BookingDto;
import com.excel.book_my_stay.entity.Booking;
import com.excel.book_my_stay.entity.CustomerInfo;
import com.excel.book_my_stay.entity.PropertyInfo;
import com.excel.book_my_stay.exception.InvalidBookingCancellationException;
import com.excel.book_my_stay.exception.InvalidBookingException;
import com.excel.book_my_stay.repository.BookingRespository;
import com.excel.book_my_stay.repository.CustomerRepository;
import com.excel.book_my_stay.repository.PropertyRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class BookingServiceImpl implements BookingService{

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BookingRespository bookingRespository;
	
//----------------------------add Booking----------------------------------------------
		
		@Override
		public String postBooking(BookingDto dto) {
			Optional<CustomerInfo> customerOptional = customerRepository
									.findByEmail(dto.getEmail());
			
			Optional<PropertyInfo> propId=propertyRepository
								.findByPropertyId(dto.getPropertyId());
			
			if(customerOptional.isPresent() && propId.isPresent()) {
				CustomerInfo cust = customerOptional.get();
				PropertyInfo id = propId.get();
				Booking bookings = ObjectUtils.dtoToEntity(dto);
				cust.getBookings().add(bookings);
				id.getBookings().add(bookings);
				bookings.setCustomer(cust);
				bookings.setProperty(id);
				customerRepository.save(cust).getCustomerId();
				return "Booking is succes";
			}
			throw new InvalidBookingException(INVALID_BOOKING_INFO_MESSAGE);
		}

//-------------------------Cancel Booking-----------------------------------------------
		
		@Override
		public String deleteBooking(BookingDto dto) {
			Optional<Booking> bookingInfo = bookingRespository.findById(dto.getBookingId());
			if(bookingInfo.isPresent())
			{
				Booking booking = bookingInfo.get();
				booking = ObjectUtils.updateBooking(booking, dto);
				bookingRespository.save(booking);
				return "Update Succesful";
			}
			throw new InvalidBookingCancellationException(INVALID_BOOKING_CANCELLATION_MESSAGE);
		}

//-----------------------------get booking details by customer id----------------------------
		
		@Override
		public List<BookingDto> fetchBookingDetails(Integer customerId) {
			List<Booking> booking = bookingRespository.findByCustomerCustomerId(customerId);
			if(!booking.isEmpty()) {
				return booking.stream()
						.map(bookings -> BookingDto.builder()
								.bookingId(bookings.getBookingId())
								.email(bookings.getEmail())
								.bookingId(bookings.getBookingId())
								.checkInDate(bookings.getCheckInDate())
								.checkOutDate(bookings.getCheckOutDate())
								.hotelName(bookings.getHotelName())
								.noOfPerson(bookings.getNoOfPerson()).build())
						.collect(Collectors.toList());
			}
			throw new InvalidBookingException(INVALID_BOOKING_INFO_MESSAGE);
		}
}

