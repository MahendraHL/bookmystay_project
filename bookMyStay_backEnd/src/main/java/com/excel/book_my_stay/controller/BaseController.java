//package com.excel.book_my_stay.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_INFO_SAVED_MESSAGE;
//
//import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_DETAILS_FETCHED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_DETAILS_UPDATE_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_SAVED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_DETAILS_FETCHED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_DETAILS_UPDATE_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.ADDRESS_DETAILS_SAVED_MESSSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.FEEDBACK_SUBMITTED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.ALL_FEEDBACK_DETAILS_FETCHED_MESSAGE;
//
//import static com.excel.book_my_stay.constant.BookMyStayConstant.SUBSCRIBED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.BOOKING_SAVED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.CUSTOMER_DETAILS_SAVED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_URL_SAVED_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.BOOKING_CANCEL_MESSAGE;
//import static com.excel.book_my_stay.constant.BookMyStayConstant.LOGIN_MESSAGE;
//import java.util.List;
//
//import com.excel.book_my_stay.dto.AddressDto;
//import com.excel.book_my_stay.dto.BookingDto;
//
//import com.excel.book_my_stay.dto.CustomerInfoDto;
//import com.excel.book_my_stay.dto.FeedBackDto;
//import com.excel.book_my_stay.dto.LocationDto;
//import com.excel.book_my_stay.dto.PropertyDescriptionDto;
//import com.excel.book_my_stay.dto.PropertyInfoDto;
//import com.excel.book_my_stay.dto.PropertyLocationDto;
//import com.excel.book_my_stay.dto.PropertyUrlListDto;
//import com.excel.book_my_stay.dto.SubscribedDto;
//import com.excel.book_my_stay.entity.Location;
//import com.excel.book_my_stay.response.CommonResponse;
//import com.excel.book_my_stay.service.BookMyStayService;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//
//@RequestMapping(path = "/api/v1/bookmystay")
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class BaseController {
//
//	@Autowired
//	private BookMyStayService bookMyStayService;
	
////------------------------------Post Mapping Property-------------------------------------
//	@PostMapping("/property")
//	public ResponseEntity<CommonResponse<String>> postProperty(@RequestBody PropertyInfoDto dto) {
//		String propertyId = bookMyStayService.addPropertyInfo(dto);
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(CommonResponse.<String>builder().data(propertyId).message(PROPERTY_INFO_SAVED_MESSAGE).build());
//	}
////------------------------------Get mapping Property by Id---------------------------------
//	@GetMapping("/propertybyid")
//	public ResponseEntity<CommonResponse<PropertyInfoDto>> getPropertyById(@RequestBody PropertyInfoDto dto) {
//		PropertyInfoDto propertyId = bookMyStayService.fetchPropertyInfoById(dto);
//		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<PropertyInfoDto>builder().data(propertyId)
//				.message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
//	}
////-----------------------------Get Property by LocationId---------------------------------
//	@GetMapping("/propertybylocation/{locationId}")
//	public ResponseEntity<CommonResponse<List<String>>> getPropertyByLocation(
//	        @PathVariable Integer locationId) {
//	    List<String> propertyNames = bookMyStayService.fetchPropertyNamesByLocation(locationId);
//	    return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<String>>builder()
//	            .data(propertyNames).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
//	}
//	
////-----------------------------Get Property by Hotel Name---------------------------------
//	@GetMapping("propertybyname/{hotelName}")
//	public ResponseEntity<CommonResponse<PropertyDescriptionDto>> getPropertyByName(@PathVariable String hotelName) {
//	    PropertyDescriptionDto propertyInfo = bookMyStayService.fetchPropertyInfoById(hotelName);
//	    if (propertyInfo != null) {
//	        return ResponseEntity.ok()
//	                .body(CommonResponse.<PropertyDescriptionDto>builder()
//	                        .data(propertyInfo)
//	                        .message(PROPERTY_DETAILS_FETCHED_MESSAGE)
//	                        .build());
//	    } else {
//	        return ResponseEntity.notFound().build();
//	    }
//	}
////-------------------------------Get Location By Id---------------------------------------
//	@GetMapping("/locationid")
//	public ResponseEntity<CommonResponse<Integer>> getLocationIdByName(@RequestParam String place) {
//		Integer id=bookMyStayService.fetchLocationIdbyPlace(place);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<Integer>builder()
//				.data(id).message(LOCATION_DETAILS_FETCHED_MESSAGE).build());
//		
//	}	
////-------------------------------Search Property by Hotel Name-----------------------------
//	@GetMapping("/getproperty")
//	public ResponseEntity<CommonResponse<List<PropertyInfoDto>>> getProperty(
//			@RequestParam(name = "hotelName",required = false) String hotelName
//			) {
//		List<PropertyInfoDto> propertyId = bookMyStayService.fetchPropertyInfo();
//		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<List<PropertyInfoDto>>builder()
//				.data(bookMyStayService.fetchPropertyInfo(hotelName)).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
//	}
	
////------------------------------Get hotel Description by location Id----------------------
//    @GetMapping("/getdescription/{locationId}")
//    public ResponseEntity<CommonResponse<List<PropertyDescriptionDto>>> getPropertyDescription( @PathVariable Integer locationId) {
//        List<PropertyDescriptionDto> property = bookMyStayService.fetchPropertyDescription(locationId);
//        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<PropertyDescriptionDto>>builder()
//	            .data(property).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
//    }
    
////------------------------------Update Property--------------------------------------------
//	@PutMapping("/putproperty")
//	public ResponseEntity<CommonResponse<String>> updatePropertyInfo(@RequestBody PropertyInfoDto dto) {
//		String upPropertyInfoDto = bookMyStayService.updateProperty(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(upPropertyInfoDto)
//				.isError(false).message(PROPERTY_DETAILS_UPDATE_MESSAGE).build());
//	}

////-----------------------------Post Location--------------------------------------------
//	@PostMapping("/postlocation")
//	public ResponseEntity<CommonResponse<String>> postLocation(@RequestBody LocationDto dto) {
//		String locationId = bookMyStayService.addLocation(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(locationId)
//				.isError(false).message(LOCATION_SAVED_MESSAGE).build());
//	}

////----------------------------Get All Location-----------------------------------------
//	@GetMapping("/getlocation")
//	public ResponseEntity<CommonResponse<List<LocationDto>>> getLocation() {
//		List<LocationDto> locationId = bookMyStayService.fetchLocation();
//		return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<List<LocationDto>>builder()
//				.data(locationId).message(LOCATION_DETAILS_FETCHED_MESSAGE).build());
//	}

////-----------------------------Update Location-----------------------------------------
//	@PutMapping("/putlocation")
//	public ResponseEntity<CommonResponse<String>> updateLocation(@RequestBody LocationDto dto) {
//		String updateLocationDto = bookMyStayService.updateLocation(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(updateLocationDto)
//				.isError(false).message(LOCATION_DETAILS_UPDATE_MESSAGE).build());
//	}

////----------------------------Update Property Location-------------------------------------
//	@PutMapping("/update")
//	public ResponseEntity<CommonResponse<String>> updatePropertyLocation(@RequestBody PropertyLocationDto dto) {
//		String id = bookMyStayService.updatePropertyLocation(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(
//				CommonResponse.<String>builder().data(id).isError(false).message("Location added succesfully").build());
//	}

////---------------------------Post Addresss-----------------------------------------------
//	@PostMapping("/postaddress")
//	public ResponseEntity<CommonResponse<String>> postAddress(@RequestBody AddressDto dto) {
//		String addressId = bookMyStayService.addAddress(dto);
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(CommonResponse.<String>builder().data(addressId).message(ADDRESS_DETAILS_SAVED_MESSSAGE).build());
//	}
	
////---------------------------Post FeedBack--------------------------------------------
//	@PostMapping("/postfeedback")
//	public ResponseEntity<CommonResponse<String>> postFeedBack(@RequestBody FeedBackDto dto) {
//		String feedBackId = bookMyStayService.postFeedBack(dto);
//
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(feedBackId)
//				.isError(false).message(FEEDBACK_SUBMITTED_MESSAGE).build());
//	}
//
////----------------------------Get all FeedBack----------------------------------------
//	@GetMapping("/getfeedback")
//	public ResponseEntity<CommonResponse<List<FeedBackDto>>> getFeedBack() {
//		List<FeedBackDto> feedBacks = bookMyStayService.fetchFeedBacks();
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<FeedBackDto>>builder().data(feedBacks)
//				.isError(false).message(ALL_FEEDBACK_DETAILS_FETCHED_MESSAGE).build());
//	}

////--------------------------------Post Subscription------------------------------------
//	@PostMapping("/subscription")
//	public ResponseEntity<CommonResponse<String>> getSubscribe(@RequestBody SubscribedDto dto) {
//		String subscribes = bookMyStayService.fetchSubscribers(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(
//				CommonResponse.<String>builder().data(subscribes).isError(false).message(SUBSCRIBED_MESSAGE).build());
//	}

////-------------------------------Post Booking-------------------------------------------
//	@PostMapping("/postbooking")
//	public ResponseEntity<CommonResponse<String>> postBooking(@RequestBody BookingDto dto) {
//		String booking = bookMyStayService.postBooking(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(
//				CommonResponse.<String>builder().data(booking).isError(false).message(BOOKING_SAVED_MESSAGE).build());
//	}

////------------------------------Post Customer------------------------------------------
//	@PostMapping("/postcustomer")
//	public ResponseEntity<CommonResponse<String>> postCustomer(@RequestBody CustomerInfoDto dto) {
//		String customerId = bookMyStayService.addCustomerInfo(dto);
//		return ResponseEntity.status(HttpStatus.CREATED).body(
//				CommonResponse.<String>builder().data(customerId).message(CUSTOMER_DETAILS_SAVED_MESSAGE).build());
//	}

////--------------------------------Post Property Url--------------------------------------
//	@PostMapping("/postpropertyurl")
//	public ResponseEntity<CommonResponse<String>> postPropertyUrls(@RequestBody PropertyUrlListDto dto) {
//		String propertyUrl = bookMyStayService.postPropertyUrl(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(propertyUrl)
//				.isError(false).message(PROPERTY_URL_SAVED_MESSAGE).build());
//	}

////--------------------------------Update Cancel Booking----------------------------------
//	@PutMapping("/cancelbooking")
//	public ResponseEntity<CommonResponse<String>> cancelBooking(@RequestBody BookingDto dto) {
//		String bookingDto = bookMyStayService.deleteBooking(dto);
//		return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(bookingDto)
//				.isError(false).message(BOOKING_CANCEL_MESSAGE).build());
//	}

////-------------------------------Sign-In-------------------------------------------------
//	@PostMapping("/signin")
//	public ResponseEntity<CommonResponse<String>> signIn(@RequestBody CustomerInfoDto dto) {
//		String signIn = bookMyStayService.signIn(dto);
//		return ResponseEntity.status(HttpStatus.OK)
//				.body(CommonResponse.<String>builder().data(signIn).isError(false).message(LOGIN_MESSAGE).build());
//
//	}
//
//}
