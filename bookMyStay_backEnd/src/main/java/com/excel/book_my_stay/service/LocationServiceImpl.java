package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_LOCATION_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_LOCATION_MESSAGE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.LocationDto;
import com.excel.book_my_stay.entity.Location;
import com.excel.book_my_stay.exception.DuplicateLocationException;
import com.excel.book_my_stay.exception.InvalidLocationException;
import com.excel.book_my_stay.repository.LocationRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class LocationServiceImpl implements LocationService{
	
	@Autowired
	private LocationRepository locationRepository;
	
	
	//---------------------------fetch location id by place---------------------------------
		@Override
		public Integer fetchLocationIdbyPlace(String place) {
			Optional<Location> optional = locationRepository.findByPlace(place);
			if(optional.isPresent()) {
				Location location =optional.get();
				return location.getLocationId();
			}
			throw new InvalidLocationException(INVALID_LOCATION_MESSAGE);
		}

		//-----------------------------adding location details---------------------------------
		@Override
		public String addLocation(LocationDto dto){
			Optional<Location> optional= locationRepository.findByPlace(dto.getPlace());
			if(!optional.isPresent()) {
				Location location = Location.builder().place(dto.getPlace()).locationUrl(dto.getLocationUrl()).build();
				Location save = locationRepository.save(location);
				
				return String.valueOf(save.getLocationId());
			}
			throw new DuplicateLocationException(DUPLICATE_LOCATION_MESSAGE);
			
		}

		//---------------------------get all location details---------------------------------
		@Override
		public List<LocationDto> fetchLocation() {
			return locationRepository.findAll().stream().map(ObjectUtils::locationToDto).toList();
		}

		//---------------------------update location details-----------------------------------
		@Override
		public String updateLocation(LocationDto dto) {
			Optional<Location> optionalLocation = locationRepository.findByLocationId(dto.getLocationId());
			if(optionalLocation.isPresent())
			{
				Location location = optionalLocation.get();
				location = ObjectUtils.updateLocation(location, dto);
				locationRepository.save(location);
				return "Update Succesful";
			}
			throw new InvalidLocationException(INVALID_LOCATION_MESSAGE);
		}

}
