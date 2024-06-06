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
public class PropertyDescriptionDto {
	

	private Integer propertyId;
	private String hotelName;
	private String description;
}
