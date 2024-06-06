//package com.excel.book_my_stay.service;
//
//import java.util.List;
//import com.excel.book_my_stay.dto.AddressDto;
//import com.excel.book_my_stay.dto.BookingDto;
//import com.excel.book_my_stay.dto.CustomerInfoDto;
//import com.excel.book_my_stay.dto.FeedBackDto;
//import com.excel.book_my_stay.dto.LocationDto;
//import com.excel.book_my_stay.dto.PropertyDescriptionDto;
//import com.excel.book_my_stay.dto.PropertyInfoDto;
//import com.excel.book_my_stay.dto.PropertyLocationDto;
//import com.excel.book_my_stay.dto.PropertyUrlListDto;
//import com.excel.book_my_stay.dto.SubscribedDto;
//import com.excel.book_my_stay.entity.Location;
//
//public interface BookMyStayService {
//
//
//	public String addPropertyInfo(PropertyInfoDto dto);
//
//	public List<PropertyInfoDto> fetchPropertyInfo();
//	
//	public String updateProperty(PropertyInfoDto dto);
//
//	public String addLocation(LocationDto dto);
//
//	public String updatePropertyLocation(PropertyLocationDto dto);
//
//	public List<LocationDto> fetchLocation();
//
//	public String updateLocation(LocationDto dto);
//
//	public String addAddress(AddressDto dto);
//	
//	String postFeedBack(FeedBackDto dto);
//
//	List<FeedBackDto> fetchFeedBacks();
//
//	String fetchSubscribers(SubscribedDto dto);
//
//	public String postBooking(BookingDto dto);
//
//	public String addCustomerInfo(CustomerInfoDto dto);
//
//	public String postPropertyUrl(PropertyUrlListDto dto);
//
//	public String deleteBooking(BookingDto dto);
//
//	public String signIn(CustomerInfoDto dto);
//
//	public PropertyInfoDto fetchPropertyInfoById(PropertyInfoDto dto);
//
//	public List<String> fetchPropertyNamesByLocation(Integer locationId);
//
//	public Integer fetchLocationIdbyPlace(String place);
//
//	public PropertyDescriptionDto fetchPropertyInfoById(String hotelName);
//
//	public List<PropertyDescriptionDto> fetchPropertyDescription(Integer locationId);
//
//	public List<PropertyInfoDto> fetchPropertyInfo(String hotelName);
//
//
//}
