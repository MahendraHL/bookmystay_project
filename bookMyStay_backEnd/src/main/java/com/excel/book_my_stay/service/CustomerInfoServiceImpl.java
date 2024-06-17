package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_SIGNUP_MESSAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.excel.book_my_stay.dto.CustomerInfoDto;
import com.excel.book_my_stay.entity.CustomerInfo;
import com.excel.book_my_stay.exception.InvalidSignUpException;
import com.excel.book_my_stay.repository.CustomerRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class CustomerInfoServiceImpl implements CustomerInfoService{

	@Autowired
	private CustomerRepository customerRepository;
	
//----------------------add customer/register-----------------------------------------
		@Override
		public String addCustomerInfo(CustomerInfoDto dto) {
			if(!customerRepository.findByEmail(dto.getEmail()).isPresent())
			{
				CustomerInfo customerInfo = ObjectUtils.dtoToEntity(dto);
				CustomerInfo customer = customerRepository.save(customerInfo);
				customer.getCustomerId();
				return "add customer";
			}
			throw new InvalidSignUpException(INVALID_SIGNUP_MESSAGE);
		}
}
