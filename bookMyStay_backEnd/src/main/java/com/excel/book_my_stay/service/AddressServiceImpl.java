package com.excel.book_my_stay.service;

import static com.excel.book_my_stay.constant.BookMyStayConstant.INVALID_ADDRESS_INFO_MESSAGE;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.book_my_stay.dto.AddressDto;
import com.excel.book_my_stay.entity.Address;
import com.excel.book_my_stay.entity.PropertyInfo;
import com.excel.book_my_stay.exception.InvalidAddressException;
import com.excel.book_my_stay.repository.PropertyRepository;
import com.excel.book_my_stay.utils.ObjectUtils;

@Service
public class AddressServiceImpl implements AddressService{

	@Autowired
	private PropertyRepository propertyRepository;

//-------------------------add address details(This is for future Enhancement)---------------------
		
		@Override
		public String addAddress(AddressDto dto) {
			Optional<PropertyInfo> optionalProperty = propertyRepository
										.findByPropertyId(dto.getPropertyId());
			if(optionalProperty.isPresent())
			{
				PropertyInfo propertyInfo = optionalProperty.get();
				if(propertyInfo.getAddress()==null)
				{
					Address address = ObjectUtils.adressToEntity(dto);
					propertyInfo.setAddress(address);
					address.setProperty(propertyInfo);
					propertyRepository.save(propertyInfo).getPropertyId();
					return "added Adress";
				}
				else
				{
					Address address = propertyInfo.getAddress();
					
					address.setAddressId(dto.getAddressId());
					address.setCity(dto.getCity());
					address.setDoorNo(dto.getDoorNo());
					address.setLandMark(dto.getLandMark());
					address.setPinCode(dto.getPinCode());
					address.setState(dto.getState());
					address.setStreet(dto.getStreet());
				}
				propertyRepository.save(propertyInfo).getPropertyId();
				return "succes";
			}
			throw new InvalidAddressException(INVALID_ADDRESS_INFO_MESSAGE);
		}
	
}
