package com.excel.book_my_stay.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Entity

public class Subscribed {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int subscriptionId;
	
	@Column(unique = true)
	private String emailId;
	

}
