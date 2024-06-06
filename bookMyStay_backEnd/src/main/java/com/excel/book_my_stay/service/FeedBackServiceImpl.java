package com.excel.book_my_stay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.FeedBackDto;
import com.excel.book_my_stay.entity.FeedBack;
import com.excel.book_my_stay.repository.FeedBackRepository;

@Service
public class FeedBackServiceImpl implements FeedBackService{

	
	@Autowired
	private FeedBackRepository feedBackRepository;


	//--------------------------Add FeedBack-------------------------------------------
		@Override
		public String postFeedBack(FeedBackDto dto) {

			FeedBack feedBack = FeedBack.builder().name(dto.getName()).email(dto.getEmail())
					.mobileNumber(dto.getMobileNumber()).message(dto.getMessage()).build();
			FeedBack feeds = feedBackRepository.save(feedBack);
			return feeds.getEmail();
		}

		//-------------------------Fetch Feedback details-----------------------------------
		@Override
		public List<FeedBackDto> fetchFeedBacks() {
			
			return feedBackRepository
					.findAll().stream().map(e-> FeedBackDto.builder().feedBackId(e.getFeedBackId()).name(e.getName())
							.email(e.getEmail()).mobileNumber(e.getMobileNumber()).message(e.getMessage()).build())
					.toList();
		}
}
