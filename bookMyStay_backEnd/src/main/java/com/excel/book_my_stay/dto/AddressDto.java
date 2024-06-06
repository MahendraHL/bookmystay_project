package com.excel.book_my_stay.dto;

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
public class AddressDto {

	private Integer addressId;
	private String city;
	private String state;
	private String street;
	private String doorNo;
	private String landMark;
	private Integer pinCode;
	private Integer propertyId;
}
