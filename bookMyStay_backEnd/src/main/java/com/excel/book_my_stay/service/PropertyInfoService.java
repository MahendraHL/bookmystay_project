package com.excel.book_my_stay.service;

import java.util.List;

import com.excel.book_my_stay.dto.PropertyDescriptionDto;
import com.excel.book_my_stay.dto.PropertyInfoDto;
import com.excel.book_my_stay.dto.PropertyLocationDto;
import com.excel.book_my_stay.dto.PropertyUrlListDto;

public interface PropertyInfoService {

	public String addPropertyInfo(PropertyInfoDto dto);

	PropertyInfoDto fetchPropertyInfoById(PropertyInfoDto dto);

	List<String> fetchPropertyNamesByLocation(Integer locationId);

	PropertyDescriptionDto fetchPropertyInfoById(String hotelName);

	List<PropertyInfoDto> fetchPropertyInfo();

	List<PropertyDescriptionDto> fetchPropertyDescription(Integer locationId);

	String updateProperty(PropertyInfoDto dto);

	String updatePropertyLocation(PropertyLocationDto dto);

	String postPropertyUrl(PropertyUrlListDto dto);

	List<PropertyInfoDto> fetchPropertyInfo(String hotelName);

}
