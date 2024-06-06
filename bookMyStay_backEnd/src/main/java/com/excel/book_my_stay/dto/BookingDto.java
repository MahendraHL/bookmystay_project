package com.excel.book_my_stay.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingDto {


	private Integer customerId;
	private Integer propertyId;
	private Integer bookingId;
	private String hotelName;
	private LocalDate dateOfBook;
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private Integer noOfPerson;
	private Boolean isCancelled;
	private String email;
}
