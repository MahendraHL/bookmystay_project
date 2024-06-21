package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.ACCOUNT_NOT_FOUND_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.LOGIN_FAILED_MESSAGE;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.CustomerInfoDto;
import com.excel.book_my_stay.entity.CustomerInfo;
import com.excel.book_my_stay.exception.AccountNotFoundException;
import com.excel.book_my_stay.exception.LoginFailedException;
import com.excel.book_my_stay.repository.CustomerRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class SignInServiceImpl implements SignInService{


	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
//------------------------------------Login-------------------------------------------
	@Override
	public CustomerInfoDto signIn(CustomerInfoDto dto) {
		Optional<CustomerInfo> email = customerRepository.findByEmail(dto.getEmail());
		if(email.isPresent()) {
			CustomerInfo info=email.get();
			if(bCryptPasswordEncoder.matches(dto.getPassword(), info.getPassword())) {
				return ObjectUtils.customerInfoTodto(info);
			}
			else {
				throw new LoginFailedException(LOGIN_FAILED_MESSAGE);
			}
		}
		throw new AccountNotFoundException(ACCOUNT_NOT_FOUND_MESSAGE);
	}

	
}
