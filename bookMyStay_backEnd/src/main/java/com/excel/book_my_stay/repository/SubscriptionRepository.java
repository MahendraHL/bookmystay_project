package com.excel.book_my_stay.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.book_my_stay.entity.Subscribed;

public interface SubscriptionRepository extends JpaRepository<Subscribed, Integer> {
	
	Optional<Subscribed> findByEmailId(String emailId);

}
