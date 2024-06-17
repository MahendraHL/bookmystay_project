package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_SUBSCRIPTION_MESSAGE;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.SubscribedDto;
import com.excel.book_my_stay.entity.Subscribed;
import com.excel.book_my_stay.exception.DuplicateSubsciptionException;
import com.excel.book_my_stay.repository.SubscriptionRepository;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{

	@Autowired
	private SubscriptionRepository subscriptionRepository;

//-------------------------add Subscribers-------------------------------------------
		@Override
		public String fetchSubscribers(SubscribedDto dto) {
			Optional<Subscribed> optional = subscriptionRepository.findByEmailId(dto.getEmailId());
			if (!optional.isPresent()) {
				Subscribed subscribed = Subscribed.builder().emailId(dto.getEmailId()).build();
				Subscribed subscribes = subscriptionRepository.save(subscribed);
				return subscribes.getEmailId();
			} 
			throw new DuplicateSubsciptionException(DUPLICATE_SUBSCRIPTION_MESSAGE);
		}

}
