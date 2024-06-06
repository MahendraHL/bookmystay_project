package com.excel.book_my_stay.service;

import java.util.List;

import com.excel.book_my_stay.dto.LocationDto;

public interface LocationService {

	Integer fetchLocationIdbyPlace(String place);

	String addLocation(LocationDto dto);

	List<LocationDto> fetchLocation();

	String updateLocation(LocationDto dto);

}
