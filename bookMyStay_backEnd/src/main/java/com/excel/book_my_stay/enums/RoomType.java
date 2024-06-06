package com.excel.book_my_stay.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum RoomType {

	HOTEL("HOTEL"), APARTMENT("APARTMENT"), RESORT("RESORT"), VILLA("VILLA"), CABIN("CABIN");
	
	private final String bookType;
}
