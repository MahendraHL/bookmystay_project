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
public class CustomerInfoDto {

	private Integer customerid;
	
	private String name;
	private String phoneNumber;
	private String email;
	private String password;
}
