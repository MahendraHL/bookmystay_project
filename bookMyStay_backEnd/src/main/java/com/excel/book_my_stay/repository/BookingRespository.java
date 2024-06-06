package com.excel.book_my_stay.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.book_my_stay.entity.Booking;

public interface BookingRespository extends JpaRepository<Booking, Integer>{

	Optional<Booking> findByEmail(String email);

	List<Booking> findByCustomerCustomerId(Integer customerId);

}
