package com.excel.book_my_stay.controller;

import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_DETAILS_FETCHED_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_DETAILS_UPDATE_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.LOCATION_SAVED_MESSAGE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excel.book_my_stay.dto.LocationDto;
import com.excel.book_my_stay.response.CommonResponse;
import com.excel.book_my_stay.service.LocationService;

@RequestMapping(path = "/api/v1/bookmystay")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {

	@Autowired
	private LocationService locationService;
	
	
//-------------------------------Get Location By Id---------------------------------------
		
		@GetMapping("/locationid")
		public ResponseEntity<CommonResponse<Integer>> getLocationIdByName(@RequestParam String place) {
			Integer id=locationService.fetchLocationIdbyPlace(place);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<Integer>builder()
					.data(id).message(LOCATION_DETAILS_FETCHED_MESSAGE).build());
			
		}
		
//-----------------------------Post Location--------------------------------------------
		
		@PostMapping("/postlocation")
		public ResponseEntity<CommonResponse<String>> postLocation(@RequestBody LocationDto dto) {
			String locationId = locationService.addLocation(dto);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(locationId)
					.isError(false).message(LOCATION_SAVED_MESSAGE).build());
		}
		
//----------------------------Get All Location-----------------------------------------
		@GetMapping("/getlocation")
		public ResponseEntity<CommonResponse<List<LocationDto>>> getLocation() {
			List<LocationDto> locationId = locationService.fetchLocation();
			return ResponseEntity.status(HttpStatus.CREATED).body(CommonResponse.<List<LocationDto>>builder()
					.data(locationId).message(LOCATION_DETAILS_FETCHED_MESSAGE).build());
		}
		
//-----------------------------Update Location-----------------------------------------
		
		@PutMapping("/putlocation")
		public ResponseEntity<CommonResponse<String>> updateLocation(@RequestBody LocationDto dto) {
			String updateLocationDto = locationService.updateLocation(dto);
			return ResponseEntity.status(HttpStatus.OK).body(CommonResponse.<String>builder().data(updateLocationDto)
					.isError(false).message(LOCATION_DETAILS_UPDATE_MESSAGE).build());
		}
}
