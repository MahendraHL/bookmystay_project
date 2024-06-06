package com.excel.book_my_stay.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.book_my_stay.entity.PropertyInfo;

public interface PropertyRepository extends JpaRepository<PropertyInfo, Integer>{

	Optional<PropertyInfo> findByPropertyId(Integer propertyId);

	Optional<PropertyInfo> findByHotelNameContainingIgnoreCase(String hotelName);
	
	List<PropertyInfo> findByLocationLocationId(Integer locationId);


}
