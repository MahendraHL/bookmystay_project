package com.excel.book_my_stay.dto;


import com.excel.book_my_stay.enums.RoomType;
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
public class PropertyInfoDto {

	
	private Integer propertyId;
	private String contactPersonName;
	private String hotelName;
	private RoomType roomType;
	private String email;
	private String phoneNumber;
	private Double price;
	private Integer availableRooms;
	private Boolean isAvailable;
	private Integer locationId;
	private String description;
	
}
