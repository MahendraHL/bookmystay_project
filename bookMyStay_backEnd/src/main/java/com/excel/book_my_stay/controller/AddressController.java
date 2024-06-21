package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.ADDRESS_DETAILS_SAVED_MESSSAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.AddressDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.AddressService;


@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
//---------------------------Post Address-----------------------------------------------
		
		@PostMapping("/postaddress")
		public ResponseEntity<CommonResponse<String>> postAddress(@RequestBody AddressDto dto) {
			String addressId = addressService.addAddress(dto);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(CommonResponse.<String>builder().data(addressId).message(ADDRESS_DETAILS_SAVED_MESSSAGE).build());
		}
}
