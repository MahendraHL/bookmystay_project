package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.CUSTOMER_DETAILS_SAVED_MESSAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.CustomerInfoDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.CustomerInfoService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerInfoService customerInfoService;
	
//------------------------------Post Customer/register------------------------------------------
		
		@PostMapping("/postcustomer")
		public ResponseEntity<CommonResponse<String>> postCustomer(@RequestBody CustomerInfoDto dto) {
			String customerId = customerInfoService.addCustomerInfo(dto);
			return ResponseEntity.status(HttpStatus.CREATED).body(
					CommonResponse.<String>builder().data(customerId).message(CUSTOMER_DETAILS_SAVED_MESSAGE).build());
		}
}
