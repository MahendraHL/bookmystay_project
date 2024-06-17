package com.excel.book_my_stay.entity;

import java.time.LocalDate;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookingId;
	
	@Temporal(TemporalType.DATE)
	private LocalDate dateOfBook;
	
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private Integer noOfPerson;
	private Boolean isCancelled;
	private String hotelName;
	private String email;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private PropertyInfo property;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private CustomerInfo customer;
	
}
