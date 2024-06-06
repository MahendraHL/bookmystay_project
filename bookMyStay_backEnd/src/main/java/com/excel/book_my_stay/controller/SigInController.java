package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.LOGIN_MESSAGE;

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
import com.excel.book_my_stay.service.SignInService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SigInController {

	@Autowired
	private SignInService signInService;
	
	//-------------------------------Sign-In-------------------------------------------------
	@PostMapping("/signin")
	public ResponseEntity<CommonResponse<CustomerInfoDto>> signIn(@RequestBody CustomerInfoDto dto) {
		CustomerInfoDto signIn = signInService.signIn(dto);
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponse.<CustomerInfoDto>builder().data(signIn).isError(false).message(LOGIN_MESSAGE).build());

	}
}
