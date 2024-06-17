package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_DETAILS_FETCHED_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_DETAILS_UPDATE_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_INFO_SAVED_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.PROPERTY_URL_SAVED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.PropertyDescriptionDto;
import com.excel.book_my_stay.dto.PropertyInfoDto;
import com.excel.book_my_stay.dto.PropertyLocationDto;
import com.excel.book_my_stay.dto.PropertyUrlListDto;
import com.excel.book_my_stay.response.CommonResponse;   
import com.excel.book_my_stay.service.PropertyInfoService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PropertyController {

	@Autowired
	private PropertyInfoService propertyInfoService;
	
//------------------------------Post Mapping Property-------------------------------------
		@PostMapping("/property")
		public ResponseEntity<CommonResponse<String>> postProperty(@RequestBody PropertyInfoDto dto) {
			String propertyId = propertyInfoService.addPropertyInfo(dto);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(CommonResponse.<String>builder().data(propertyId).message(PROPERTY_INFO_SAVED_MESSAGE).build());
		}
//------------------------------Get mapping Property by Id---------------------------------
		@GetMapping("/propertybyid")
		public ResponseEntity<CommonResponse<PropertyInfoDto>> getPropertyById(@RequestBody PropertyInfoDto dto) {
			PropertyInfoDto propertyId = propertyInfoService.fetchPropertyInfoById(dto);
			return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<PropertyInfoDto>builder().data(propertyId)
					.message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
		}
//-----------------------------Get Property by LocationId---------------------------------
		@GetMapping("/propertybylocation/{locationId}")
		public ResponseEntity<CommonResponse<List<String>>> getPropertyByLocation(
		        @PathVariable Integer locationId) {
		    List<String> propertyNames = propertyInfoService.fetchPropertyNamesByLocation(locationId);
		    return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<String>>builder()
		            .data(propertyNames).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
		}
		
//-----------------------------Get Property by Hotel Name---------------------------------
		@GetMapping("propertybyname/{hotelName}")
		public ResponseEntity<CommonResponse<PropertyDescriptionDto>> getPropertyByName(@PathVariable String hotelName) {
		    PropertyDescriptionDto propertyInfo = propertyInfoService.fetchPropertyInfoById(hotelName);
		    if (propertyInfo != null) {
		        return ResponseEntity.ok()
		                .body(CommonResponse.<PropertyDescriptionDto>builder()
		                        .data(propertyInfo)
		                        .message(PROPERTY_DETAILS_FETCHED_MESSAGE)
		                        .build());
		    } else {
		        return ResponseEntity.notFound().build();
		    }
		}
//-------------------------------Search Property by Hotel Name-----------------------------
		@GetMapping("/getproperty")
		public ResponseEntity<CommonResponse<List<PropertyInfoDto>>> getProperty(
				@RequestParam(name = "hotelName",required = false) String hotelName
				) {
			List<PropertyInfoDto> propertyId = propertyInfoService.fetchPropertyInfo();
			return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<List<PropertyInfoDto>>builder()
					.data(propertyInfoService.fetchPropertyInfo(hotelName)).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
		}
//------------------------------Get hotel Description by location Id----------------------
	    @GetMapping("/getdescription/{locationId}")
	    public ResponseEntity<CommonResponse<List<PropertyDescriptionDto>>> getPropertyDescription( @PathVariable Integer locationId) {
	        List<PropertyDescriptionDto> property = propertyInfoService.fetchPropertyDescription(locationId);
	        return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<List<PropertyDescriptionDto>>builder()
		            .data(property).message(PROPERTY_DETAILS_FETCHED_MESSAGE).build());
	    }
//------------------------------Update Property--------------------------------------------
		@PutMapping("/putproperty")
		public ResponseEntity<CommonResponse<String>> updatePropertyInfo(@RequestBody PropertyInfoDto dto) {
			String upPropertyInfoDto = propertyInfoService.updateProperty(dto);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(upPropertyInfoDto)
					.isError(false).message(PROPERTY_DETAILS_UPDATE_MESSAGE).build());
		}
//----------------------------Update Property Location-------------------------------------
		@PutMapping("/update")
		public ResponseEntity<CommonResponse<String>> updatePropertyLocation(@RequestBody PropertyLocationDto dto) {
			String id = propertyInfoService.updatePropertyLocation(dto);
			return ResponseEntity.status(HttpStatus.OK).body(
					CommonResponse.<String>builder().data(id).isError(false).message("Location added succesfully").build());
		}
		
//--------------------------------Post PropertyUrl(This is for future Enhancement)--------------------------------------
		@PostMapping("/postpropertyurl")
		public ResponseEntity<CommonResponse<String>> postPropertyUrls(@RequestBody PropertyUrlListDto dto) {
			String propertyUrl = propertyInfoService.postPropertyUrl(dto);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(propertyUrl)
					.isError(false).message(PROPERTY_URL_SAVED_MESSAGE).build());
		}
}
