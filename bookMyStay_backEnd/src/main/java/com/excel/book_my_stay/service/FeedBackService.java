package com.excel.book_my_stay.service;

import java.util.List;

import com.excel.book_my_stay.dto.FeedBackDto;

public interface FeedBackService {

	String postFeedBack(FeedBackDto dto);

	List<FeedBackDto> fetchFeedBacks();

}
