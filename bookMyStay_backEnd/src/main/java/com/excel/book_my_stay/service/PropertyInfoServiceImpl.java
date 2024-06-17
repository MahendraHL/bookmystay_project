package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.DUPLICATE_PROPERTY_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_PROPERTY_MESSAGE;
import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_URL_MESSAGE;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.PropertyDescriptionDto;
import com.excel.book_my_stay.dto.PropertyInfoDto;
import com.excel.book_my_stay.dto.PropertyLocationDto;
import com.excel.book_my_stay.dto.PropertyUrlListDto;
import com.excel.book_my_stay.entity.Location;
import com.excel.book_my_stay.entity.PropertyInfo;
import com.excel.book_my_stay.entity.PropertyUrl;
import com.excel.book_my_stay.exception.DuplicatePropertyException;
import com.excel.book_my_stay.exception.InvalidPropertyException;
import com.excel.book_my_stay.exception.InvalidPropertyUrlException;
import com.excel.book_my_stay.repository.LocationRepository;
import com.excel.book_my_stay.repository.PropertyRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class PropertyInfoServiceImpl implements PropertyInfoService{

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Autowired
	private LocationRepository locationRepository;
	
//-----------------------------adding property details--------------------------------------
	@Override
	public String addPropertyInfo(PropertyInfoDto dto) 
	{
		if(!propertyRepository.findByPropertyId(dto.getPropertyId()).isPresent())
		{
			Location location = locationRepository.findById(dto.getLocationId()).get();
			PropertyInfo propertyInfo = ObjectUtils.propertyToEntity(dto);
			propertyInfo.setLocation(location);
			location.getProperty().add(propertyInfo);
			PropertyInfo property = propertyRepository.save(propertyInfo);
			property.getPropertyId();
			return "Added property";
		}
		throw new DuplicatePropertyException(DUPLICATE_PROPERTY_MESSAGE);
	}

//----------------------------fetch propertyInfo by Id-------------------------------------
		@Override
		public PropertyInfoDto fetchPropertyInfoById(PropertyInfoDto dto) {
			Optional<PropertyInfo> info = propertyRepository.findByPropertyId(dto.getPropertyId());
			if(info.isPresent()) {
				PropertyInfo id = info.get();
				return ObjectUtils.propertyUrlDtoToEntity(id);
			}
			throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
		}

//-------------------------------fetch property name by location---------------------------
		@Override
		public List<String> fetchPropertyNamesByLocation(Integer locationId) {

		    List<PropertyInfo> properties = propertyRepository.findByLocationLocationId(locationId);
		    if (!properties.isEmpty()) {
		        return properties.stream().map(PropertyInfo::getHotelName).toList();
		    }
		    throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
		}

//----------------------------fetch property info by hotel name-----------------------------------
		@Override
		public PropertyDescriptionDto fetchPropertyInfoById(String hotelName) {
			Optional<PropertyInfo> optional =propertyRepository.findByHotelNameContainingIgnoreCase(hotelName);
			if(optional.isPresent()) {
				PropertyInfo property=optional.get();
				PropertyDescriptionDto propertyDescriptionDto = new PropertyDescriptionDto();
				propertyDescriptionDto.setHotelName(property.getHotelName());
				propertyDescriptionDto.setDescription(property.getDescription());
				propertyDescriptionDto.setPropertyId(property.getPropertyId());
				return propertyDescriptionDto;
			}
			
			throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
		}

//------------------------fetch property description---------------------------------
		@Override
		public List<PropertyDescriptionDto> fetchPropertyDescription(Integer locationId) {
			
			 List<PropertyInfo> properties = propertyRepository.findByLocationLocationId(locationId);
			    if (!properties.isEmpty()) {
			    	 return properties.stream()
	                         .map(property -> PropertyDescriptionDto.builder()
	                        		 .hotelName(property.getHotelName()).description(property.getDescription()).build())
	                         .collect(Collectors.toList());
			    }
			    throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
		}

//-----------------------------update property details(This is for future Enhancement)-------------------------------
		@Override
		public String updateProperty(PropertyInfoDto dto) {
			Optional<PropertyInfo> optional = propertyRepository.findByPropertyId(dto.getPropertyId());
			if (optional.isPresent()) {
				PropertyInfo propertyInfo = optional.get();
				propertyInfo = ObjectUtils.updateProperty(propertyInfo, dto);
				propertyRepository.save(propertyInfo);
				return "Update Succesful";
			}
			throw new InvalidPropertyException(INVALID_PROPERTY_MESSAGE);
		}

//---------------------------add location id to property---------------------------------
		@Override
		public String updatePropertyLocation(PropertyLocationDto dto) {

			Optional<PropertyInfo> propOptional = propertyRepository.findByPropertyId(dto.getPropertyId());
			Optional<Location> locOptional = locationRepository.findByLocationId(dto.getLocationId());
			if (propOptional.isPresent() && locOptional.isPresent()) {
				Location loc = locOptional.get();
				PropertyInfo prop = propOptional.get();
				loc.getProperty().add(prop);
				prop.setLocation(loc);
				propertyRepository.save(prop);
			}
			return "Location details";
		}

//------------------------post PropertyUrl(This is for future Enhancement)---------------------------------------------
		@Override
		public String postPropertyUrl(PropertyUrlListDto dto) {

			Optional<PropertyInfo> optional =propertyRepository.findByPropertyId(dto.getPropertyId());
			if(optional.isPresent()) {
				PropertyInfo info =optional.get();
				List<PropertyUrl> propertyUrls =ObjectUtils.propertyUrlDtoToEntity(dto.getPropertyUrls());
				info.setUrls(propertyUrls);
				propertyUrls.stream().forEach(x->x.setProperty(info));
				propertyRepository.save(info).getPropertyId();
				return "url added";
			}
			throw new InvalidPropertyUrlException(INVALID_URL_MESSAGE);
		}

//-----------------------------fetch property info by hotel name-------------------------
		@Override
		public List<PropertyInfoDto> fetchPropertyInfo(String hotelName) {
			List<PropertyInfoDto> collect = propertyRepository.findAll().stream()
					.map(ObjectUtils::entityToDto).collect(Collectors.toList());
			if(hotelName != null) {
				 return collect.stream()
		                    .filter(b -> b.getHotelName().toLowerCase().contains(hotelName.toLowerCase()))
		                    .collect(Collectors.toList());
			}
			return collect;
		}

//----------------------------Fetch PropertyInfo-------------------------------------
		@Override
		public List<PropertyInfoDto> fetchPropertyInfo() {
			
			return propertyRepository.findAll().stream()
					.map(ObjectUtils::entityToDto).toList();
		}

}
