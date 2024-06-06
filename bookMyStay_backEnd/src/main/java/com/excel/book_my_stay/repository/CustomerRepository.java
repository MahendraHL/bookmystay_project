package com.excel.book_my_stay.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.book_my_stay.entity.CustomerInfo;




public interface CustomerRepository extends JpaRepository<CustomerInfo, Integer>{

	Optional<CustomerInfo> findByCustomerId(Integer customerId);
	Optional<CustomerInfo> findByEmail(String email);

}
