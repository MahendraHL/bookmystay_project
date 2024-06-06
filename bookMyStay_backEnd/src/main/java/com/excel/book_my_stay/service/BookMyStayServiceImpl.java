//package com.excel.book_my_stay.service;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
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
//import com.excel.book_my_stay.entity.Address;
//import com.excel.book_my_stay.entity.Booking;
//import com.excel.book_my_stay.entity.CustomerInfo;
//import com.excel.book_my_stay.entity.FeedBack;
//import com.excel.book_my_stay.entity.Location;
//import com.excel.book_my_stay.entity.PropertyInfo;
//import com.excel.book_my_stay.entity.PropertyUrl;
//import com.excel.book_my_stay.entity.Subscribed;
//import com.excel.book_my_stay.exception.AccountNotFoundException;
//import com.excel.book_my_stay.exception.DuplicateLocationException;
//import com.excel.book_my_stay.exception.DuplicatePropertyException;
//import com.excel.book_my_stay.exception.DuplicateSubsciptionException;
//import com.excel.book_my_stay.exception.InvalidAddressException;
//import com.excel.book_my_stay.exception.InvalidBookingCancellationException;
//import com.excel.book_my_stay.exception.InvalidBookingException;
//import com.excel.book_my_stay.exception.InvalidLocationException;
//import com.excel.book_my_stay.exception.InvalidPropertyException;
//import com.excel.book_my_stay.exception.InvalidPropertyUrlException;
//import com.excel.book_my_stay.exception.InvalidSignUpException;
//import com.excel.book_my_stay.exception.LoginFailedException;
//import com.excel.book_my_stay.repository.AddressRepository;
//import com.excel.book_my_stay.repository.BookingRespository;
//import com.excel.book_my_stay.repository.CustomerRepository;
//import com.excel.book_my_stay.repository.FeedBackRepository;
//import com.excel.book_my_stay.repository.LocationRepository;
//import com.excel.book_my_stay.repository.PropertyRepository;
//import com.excel.book_my_stay.repository.SubscriptionRepository;
//import com.excel.book_my_stay.utils.ObjectUtils;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_PROPERTY_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_PROPERTY_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_LOCATION_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_LOCATION_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_ADDRESS_INFO_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_SUBSCRIPTION_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_BOOKING_INFO_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_BOOKING_CANCELLATION_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_SIGNUP_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_URL_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.LOGIN_FAILED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.ACCOUNT_NOT_FOUND_MESSAGE;
//
//@Service 
//public class BookMyStayServiceImpl implements BookMyStayService{
//	
//
//	@Autowired
//	private PropertyRepository propertyRepository;
//	
//	@Autowired
//	private LocationRepository locationRepository;
//	
//	@Autowired
//	private CustomerRepository customerRepository;
//	
//	@Autowired
//	private BookingRespository bookingRespository;
//	
//	@Autowired
//	private AddressRepository addressRepository;
//	
//	@Autowired
//	private FeedBackRepository feedBackRepository;
//
//	@Autowired
//	private SubscriptionRepository subscriptionRepository;

//--------------------------------Post PropertyInfo---------------------------------------------
//	@Override
//	public String addPropertyInfo(PropertyInfoDto dto) 
//	{
//		if(!propertyRepository.findByPropertyId(dto.getPropertyId()).isPresent())
//		{
//			Location location = locationRepository.findById(dto.getLocationId()).get();
//			PropertyInfo propertyInfo = ObjectUtils.propertyToEntity(dto);
//			propertyInfo.setLocation(location);
//			location.getProperty().add(propertyInfo);
//			PropertyInfo property = propertyRepository.save(propertyInfo);
//			property.getPropertyId();
//			return "Added property";
//		}
//		throw new DuplicatePropertyException(DUPLICATE_PROPERTY_MESSAGE);
//	}

////----------------------------Fetch PropertyInfo-------------------------------------
//	@Override
//	public List<PropertyInfoDto> fetchPropertyInfo() {
//		
//		return propertyRepository.findAll().stream()
//				.map(ObjectUtils::entityToDto).toList();
//	}
	
////-----------------------------update property details-------------------------------
//	@Override
//	public String updateProperty(PropertyInfoDto dto) {
//		Optional<PropertyInfo> optional = propertyRepository.findByPropertyId(dto.getPropertyId());
//		if (optional.isPresent()) {
//			PropertyInfo propertyInfo = optional.get();
//			propertyInfo = ObjectUtils.updateProperty(propertyInfo, dto);
//			propertyRepository.save(propertyInfo);
//			return "Update Succesful";
//		}
//		throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
//	}

////-----------------------------adding location details---------------------------------
//	@Override
//	public String addLocation(LocationDto dto){
//		Optional<Location> optional= locationRepository.findByPlace(dto.getPlace());
//		if(!optional.isPresent()) {
//			Location location = Location.builder().place(dto.getPlace()).locationUrl(dto.getLocationUrl()).build();
//			Location save = locationRepository.save(location);
//			
//			return String.valueOf(save.getLocationId());
//		}
//		throw new DuplicateLocationException(DUPLICATE_LOCATION_MESSAGE);
//		
//	}
	
////---------------------------get all location details---------------------------------
//	@Override
//	public List<LocationDto> fetchLocation() {
//		return locationRepository.findAll().stream().map(ObjectUtils::locationToDto).toList();
//	}
	
////---------------------------update location details-----------------------------------
//	@Override
//	public String updateLocation(LocationDto dto) {
//		Optional<Location> optionalLocation = locationRepository.findByLocationId(dto.getLocationId());
//		if(optionalLocation.isPresent())
//		{
//			Location location = optionalLocation.get();
//			location = ObjectUtils.updateLocation(location, dto);
//			locationRepository.save(location);
//			return "Update Succesful";
//		}
//		throw new InvalidLocationException(INVALID_LOCATION_MESSAGE);
//	}

////---------------------------add location id to property---------------------------------
//	@Override
//	public String updatePropertyLocation(PropertyLocationDto dto) {
//
//		Optional<PropertyInfo> propOptional = propertyRepository.findByPropertyId(dto.getPropertyId());
//		Optional<Location> locOptional = locationRepository.findByLocationId(dto.getLocationId());
//		if (propOptional.isPresent() && locOptional.isPresent()) {
//			Location loc = locOptional.get();
//			PropertyInfo prop = propOptional.get();
//			loc.getProperty().add(prop);
//			prop.setLocation(loc);
//			propertyRepository.save(prop);
//		}
//		return "Location details";
//	}

////-------------------------add address details--------------------------------------------
//	@Override
//	public String addAddress(AddressDto dto) {
//		Optional<PropertyInfo> optionalProperty = propertyRepository.findByPropertyId(dto.getPropertyId());
//		if(optionalProperty.isPresent())
//		{
//			PropertyInfo propertyInfo = optionalProperty.get();
//			if(propertyInfo.getAddress()==null)
//			{
//				Address address = ObjectUtils.adressToEntity(dto);
//				propertyInfo.setAddress(address);
//				address.setProperty(propertyInfo);
//				propertyRepository.save(propertyInfo).getPropertyId();
//				return "added Adress";
//			}
//			else
//			{
//				Address address = propertyInfo.getAddress();
//				
//				address.setAddressId(dto.getAddressId());
//				address.setCity(dto.getCity());
//				address.setDoorNo(dto.getDoorNo());
//				address.setLandMark(dto.getLandMark());
//				address.setPinCode(dto.getPinCode());
//				address.setState(dto.getState());
//				address.setStreet(dto.getStreet());
//			}
//			propertyRepository.save(propertyInfo).getPropertyId();
//			return "succes";
//		}
//		throw new InvalidAddressException(INVALID_ADDRESS_INFO_MESSAGE);
//	}
	
////--------------------------Add FeedBack-------------------------------------------
//	@Override
//	public String postFeedBack(FeedBackDto dto) {
//
//		FeedBack feedBack = FeedBack.builder().name(dto.getName()).emailId(dto.getEmailId())
//				.mobileNumber(dto.getMobileNumber()).message(dto.getMessage()).build();
//		FeedBack feeds = feedBackRepository.save(feedBack);
//		return feeds.getEmailId();
//	}

////-------------------------Fetch Feedback details-----------------------------------
//	@Override
//	public List<FeedBackDto> fetchFeedBacks() {
//		
//		return feedBackRepository
//				.findAll().stream().map(e-> FeedBackDto.builder().feedBackId(e.getFeedBackId()).name(e.getName())
//						.emailId(e.getEmailId()).mobileNumber(e.getMobileNumber()).message(e.getMessage()).build())
//				.toList();
//	}

////-------------------------add Subscribers-------------------------------------------
//	@Override
//	public String fetchSubscribers(SubscribedDto dto) {
//		Optional<Subscribed> optional = subscriptionRepository.findByEmailId(dto.getEmailId());
//		if (!optional.isPresent()) {
//			Subscribed subscribed = Subscribed.builder().emailId(dto.getEmailId()).build();
//			Subscribed subscribes = subscriptionRepository.save(subscribed);
//			return subscribes.getEmailId();
//		} 
//		throw new DuplicateSubsciptionException(DUPLICATE_SUBSCRIPTION_MESSAGE);
//	}

////----------------------------add Booking----------------------------------------------
//	@Override
//	public String postBooking(BookingDto dto) {
//		Optional<PropertyInfo> propOptional =propertyRepository.findByHotelNameContainingIgnoreCase(dto.getHotelName());
//		Optional<CustomerInfo> customerOptional = customerRepository.findByEmail(dto.getEmail());
//		if(propOptional.isPresent()  && customerOptional.isPresent()) {
//			PropertyInfo prop = propOptional.get();
//			CustomerInfo cust = customerOptional.get();
//			Booking bookings = ObjectUtils.dtoToEntity(dto);
//			prop.getBookings().add(bookings);
//			cust.getBookings().add(bookings);
//			bookings.setProperty(prop);
//			bookings.setCustomer(cust);
//			customerRepository.save(cust).getCustomerId();
//			return "Booking is succes";
//		}
//		throw new InvalidBookingException(INVALID_BOOKING_INFO_MESSAGE);
//	}

////----------------------add customer/register-----------------------------------------
//	@Override
//	public String addCustomerInfo(CustomerInfoDto dto) {
//		if(!customerRepository.findByEmail(dto.getEmail()).isPresent())
//		{
//			CustomerInfo customerInfo = ObjectUtils.dtoToEntity(dto);
//			CustomerInfo customer = customerRepository.save(customerInfo);
//			customer.getCustomerId();
//			return "add customer";
//		}
//		throw new InvalidSignUpException(INVALID_SIGNUP_MESSAGE);
//	}

////------------------------post PropertyUrl---------------------------------------------
//	@Override
//	public String postPropertyUrl(PropertyUrlListDto dto) {
//
//		Optional<PropertyInfo> optional =propertyRepository.findByPropertyId(dto.getPropertyId());
//		if(optional.isPresent()) {
//			PropertyInfo info =optional.get();
//			List<PropertyUrl> propertyUrls =ObjectUtils.propertyUrlDtoToEntity(dto.getPropertyUrls());
//			info.setUrls(propertyUrls);
//			propertyUrls.stream().forEach(x->x.setProperty(info));
//			propertyRepository.save(info).getPropertyId();
//			return "url added";
//		}
//		throw new InvalidPropertyUrlException(INVALID_URL_MESSAGE);
//	}

////-------------------------Cancel Booking-----------------------------------------------
//	@Override
//	public String deleteBooking(BookingDto dto) {
//		Optional<Booking> bookingInfo = bookingRespository.findById(dto.getBookingId());
//		if(bookingInfo.isPresent())
//		{
//			Booking booking = bookingInfo.get();
//			booking = ObjectUtils.updateBooking(booking, dto);
//			bookingRespository.save(booking);
//			return "Update Succesful";
//		}
//		throw new InvalidBookingCancellationException(INVALID_BOOKING_CANCELLATION_MESSAGE);
//	}
//
////------------------------------------Login-------------------------------------------
//	@Override
//	public String signIn(CustomerInfoDto dto) {
//		Optional<CustomerInfo> email = customerRepository.findByEmail(dto.getEmail());
//		if(email.isPresent()) {
//			CustomerInfo info=email.get();
//			if(info.getPassword().equals(dto.getPassword())) {
//				return "Login sucessful";
//			}
//			else {
//				throw new LoginFailedException(LOGIN_FAILED_MESSAGE);
//			}
//		}
//		throw new AccountNotFoundException(ACCOUNT_NOT_FOUND_MESSAGE);
//	}

////----------------------------fetch propertyInfo by Id-------------------------------------
//	@Override
//	public PropertyInfoDto fetchPropertyInfoById(PropertyInfoDto dto) {
//		Optional<PropertyInfo> info = propertyRepository.findByPropertyId(dto.getPropertyId());
//		if(info.isPresent()) {
//			PropertyInfo id = info.get();
//			return ObjectUtils.propertyUrlDtoToEntity(id);
//		}
//		throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
//	}

////-------------------------------fetch property name by location---------------------------
//	@Override
//	public List<String> fetchPropertyNamesByLocation(Integer locationId) {
//
//	    List<PropertyInfo> properties = propertyRepository.findByLocationLocationId(locationId);
//	    if (!properties.isEmpty()) {
//	        return properties.stream().map(PropertyInfo::getHotelName).toList();
//	    }
//	    throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
//	}

////---------------------------fetch location id by place---------------------------------
//	@Override
//	public Integer fetchLocationIdbyPlace(String place) {
//		Optional<Location> optional = locationRepository.findByPlace(place);
//		if(optional.isPresent()) {
//			Location location =optional.get();
//			return location.getLocationId();
//		}
//		throw new InvalidLocationException(INVALID_LOCATION_MESSAGE);
//	}

////----------------------------fetch propertyinfo by id-----------------------------------
//	@Override
//	public PropertyDescriptionDto fetchPropertyInfoById(String hotelName) {
//		Optional<PropertyInfo> optional =propertyRepository.findByHotelNameContainingIgnoreCase(hotelName);
//		if(optional.isPresent()) {
//			PropertyInfo property=optional.get();
//			PropertyDescriptionDto propertyDescriptionDto = new PropertyDescriptionDto();
//			propertyDescriptionDto.setHotelName(property.getHotelName());
//			propertyDescriptionDto.setDescription(property.getDescription());
//			return propertyDescriptionDto;
//		}
//		
//		throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
//	}

////------------------------fetch property description---------------------------------
//	@Override
//	public List<PropertyDescriptionDto> fetchPropertyDescription(Integer locationId) {
//		
//		 List<PropertyInfo> properties = propertyRepository.findByLocationLocationId(locationId);
//		    if (!properties.isEmpty()) {
//		    	 return properties.stream()
//                         .map(property -> PropertyDescriptionDto.builder()
//                        		 .hotelName(property.getHotelName()).description(property.getDescription()).build())
//                         .collect(Collectors.toList());
//		    }
//		    throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
//	}

////-----------------------------fetch propertyinfo by hotel name-------------------------
//	@Override
//	public List<PropertyInfoDto> fetchPropertyInfo(String hotelName) {
//		List<PropertyInfoDto> collect = propertyRepository.findAll().stream()
//				.map(ObjectUtils::entityToDto).collect(Collectors.toList());
//		if(hotelName != null) {
//			 return collect.stream()
//	                    .filter(b -> b.getHotelName().toLowerCase().contains(hotelName.toLowerCase()))
//	                    .collect(Collectors.toList());
//		}
//		return collect;
//	}

//
//}
