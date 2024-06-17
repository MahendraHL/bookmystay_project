package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.SUBSCRIBED_MESSAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.SubscribedDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.SubscriptionService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SubscriptionController {

	@Autowired
	private SubscriptionService subscriptionService;
	
//--------------------------------Post Subscription------------------------------------
		@PostMapping("/subscription")
		public ResponseEntity<CommonResponse<String>> getSubscribe(@RequestBody SubscribedDto dto) {
			String subscribes = subscriptionService.fetchSubscribers(dto);
			return ResponseEntity.status(HttpStatus.OK).body(
					CommonResponse.<String>builder().data(subscribes).isError(false).message(SUBSCRIBED_MESSAGE).build());
		}
}
