package com.excel.book_my_stay.utils;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.excel.book_my_stay.dto.AddressDto;
import com.excel.book_my_stay.dto.BookingDto;
import com.excel.book_my_stay.dto.CustomerInfoDto;
import com.excel.book_my_stay.dto.LocationDto;
import com.excel.book_my_stay.dto.PropertyInfoDto;
import com.excel.book_my_stay.dto.PropertyUrlDto;
import com.excel.book_my_stay.entity.Address;
import com.excel.book_my_stay.entity.Booking;
import com.excel.book_my_stay.entity.CustomerInfo;
import com.excel.book_my_stay.entity.Location;
import com.excel.book_my_stay.entity.PropertyInfo;
import com.excel.book_my_stay.entity.PropertyUrl;

public class ObjectUtils {
	
	private ObjectUtils() {
		
	}
	
//---------------------PropertyDto to Entity Conversion------------------------------------
	
	public static PropertyInfo propertyToEntity(PropertyInfoDto dto) {
		return PropertyInfo.builder()
				.propertyId(dto.getPropertyId())
				.email(dto.getEmail())
				.contactPersonName(dto.getContactPersonName())
				.hotelName(dto.getHotelName())
				.roomType(dto.getRoomType())
				.isAvailable(dto.getIsAvailable())
				.phoneNumber(dto.getPhoneNumber())
				.price(dto.getPrice())
				.availableRooms(dto.getAvailableRooms())
				.isAvailable(dto.getIsAvailable())
				.description(dto.getDescription())
				.build();
	}
	
//---------------------PropertyEntity to Dto Conversion------------------------------------
	
	public static PropertyInfoDto entityToDto(PropertyInfo property) {
		return PropertyInfoDto.builder()
				.propertyId(property.getPropertyId())
				.email(property.getEmail())
				.contactPersonName(property.getContactPersonName())
				.hotelName(property.getHotelName())
				.roomType(property.getRoomType())
				.phoneNumber(property.getPhoneNumber())
				.price(property.getPrice())
				.availableRooms(property.getAvailableRooms())
				.isAvailable(property.getIsAvailable())
				.description(property.getDescription())
				.build();
	}
	
//---------------------PropertyEntity Update--------------------------------------------
	
	public static PropertyInfo updateProperty(PropertyInfo propertyInfo, PropertyInfoDto dto) {
		propertyInfo.setContactPersonName(dto.getContactPersonName());
		propertyInfo.setAvailableRooms(dto.getAvailableRooms());
		propertyInfo.setEmail(dto.getEmail());
		propertyInfo.setHotelName(dto.getHotelName());
		propertyInfo.setIsAvailable(dto.getIsAvailable());
		propertyInfo.setPhoneNumber(dto.getPhoneNumber());
		propertyInfo.setPrice(dto.getPrice());
		propertyInfo.setRoomType(dto.getRoomType());
		propertyInfo.setDescription(dto.getDescription());
		return propertyInfo;
	}
	

//---------------------LocationDto to Entity Convertion-----------------------------------------	
	
	//location details post
	public static Location dtoToEntity(LocationDto dto) {
		return Location.builder()
				.locationId(dto.getLocationId())
				.place(dto.getPlace())
				.locationUrl(dto.getLocationUrl())
				.build();
	}
	
//---------------------Location Entity to Dto Conversion-----------------------------------------
	
	public static LocationDto locationToDto(Location location) {
		return LocationDto.builder()
				.locationId(location.getLocationId())
				.place(location.getPlace())
				.locationUrl(location.getLocationUrl())
				.build();
	}

//---------------------LocationEntity Update-----------------------------------------
	
	public static Location updateLocation(Location location, LocationDto dto) {
		location.setLocationId(dto.getLocationId());
		location.setLocationUrl(dto.getLocationUrl());
		location.setPlace(dto.getPlace());
		return location;
	}
	
//---------------------AddressDto to Entity Convertion-----------------------------------------

	public static Address adressToEntity(AddressDto dto) {
		return Address.builder()
				.addressId(dto.getAddressId())
				.city(dto.getCity())
				.doorNo(dto.getDoorNo())
				.landMark(dto.getLandMark())
				.pinCode(dto.getPinCode())
				.state(dto.getState())
				.street(dto.getStreet())
				.build();
	}
	
//---------------------CustomerDto to Entity Convertion (For Customer SignIn)-------------------
	
	public static CustomerInfo dtoToEntity(CustomerInfoDto dto) {
		return CustomerInfo.builder()
				.customerId(dto.getCustomerid())
				.email(dto.getEmail())
				.password(dto.getPassword())
				.name(dto.getName())
				.phoneNumber(dto.getPhoneNumber())
				.build();
	}
	
//---------------------BookingDto to Entity Convertion-----------------------------------------

	public static Booking dtoToEntity(BookingDto e) {
		  return Booking.builder()
				  .bookingId(e.getBookingId())
				  .hotelName(e.getHotelName())
	                        .checkInDate(e.getCheckInDate())
	                        .checkOutDate(e.getCheckOutDate())
	                        .dateOfBook(LocalDate.now())
	                        .noOfPerson(e.getNoOfPerson())
	                        .email(e.getEmail())
	                        .isCancelled(false)
	                        .build();
	    }
	
//---------------------PropertyUrlDto to Entity Convertion------------------------------------

	public static List<PropertyUrl> propertyUrlDtoToEntity(List<PropertyUrlDto> propertyurls) {
		if(propertyurls == null) {
			throw new IllegalArgumentException("There is no property url");
		}
		return propertyurls.stream().map(e-> PropertyUrl.builder()
				.url(e.getUrl()).build()).collect(Collectors.toList());
	}

	public static Booking updateBooking(Booking booking, BookingDto dto) {
		booking.setIsCancelled(dto.getIsCancelled());
		return booking;
	}

//---------------------CustomerEntity to Dto Convertion-----------------------------------------
	
	public static CustomerInfoDto customerInfoTodto(CustomerInfo info) {
		return CustomerInfoDto.builder().customerid(info.getCustomerId())
				.name(info.getName()).email(info.getEmail()).build();
	}


}
