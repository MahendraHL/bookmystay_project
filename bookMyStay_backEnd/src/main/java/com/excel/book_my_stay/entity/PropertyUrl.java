package com.excel.book_my_stay.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PropertyUrl {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer urlId;
	private String url;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private PropertyInfo property;
}
