package com.excel.book_my_stay.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PropertyUrlListDto {

	private Integer propertyId;

	private List<PropertyUrlDto> propertyUrls;

}
