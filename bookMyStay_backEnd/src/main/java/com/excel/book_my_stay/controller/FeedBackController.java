package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.ALL_FEEDBACK_DETAILS_FETCHED_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.FEEDBACK_SUBMITTED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.FeedBackDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.FeedBackService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FeedBackController {

	@Autowired
	private FeedBackService feedBackService;
	
	//---------------------------Post FeedBack--------------------------------------------
		@PostMapping("/postfeedback")
		public ResponseEntity<CommonResponse<String>> postFeedBack(@RequestBody FeedBackDto dto) {
			String feedBackId = feedBackService.postFeedBack(dto);

			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(feedBackId)
					.isError(false).message(FEEDBACK_SUBMITTED_MESSAGE).build());
		}

	//----------------------------Get all FeedBack----------------------------------------
		@GetMapping("/getfeedback")
		public ResponseEntity<CommonResponse<List<FeedBackDto>>> getFeedBack() {
			List<FeedBackDto> feedBacks = feedBackService.fetchFeedBacks();
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<FeedBackDto>>builder().data(feedBacks)
					.isError(false).message(ALL_FEEDBACK_DETAILS_FETCHED_MESSAGE).build());
		}
}
