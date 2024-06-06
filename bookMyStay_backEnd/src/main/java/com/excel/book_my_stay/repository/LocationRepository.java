package com.excel.book_my_stay.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.book_my_stay.entity.Location;

public interface LocationRepository extends JpaRepository<Location, Integer>{
	Optional<Location> findByLocationId(Integer locationId);
	Optional<Location> findByPlace(String place);

}
