package com.excel.book_my_stay.entity;


import java.util.List;
import com.excel.book_my_stay.enums.RoomType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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
@Table(name = "property_information")
public class PropertyInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer propertyId;
	
//	@Column(unique = true)
//	private String propertyId;
	
	private String contactPersonName;
	
	private String hotelName;
	private String description;
	
	@Enumerated(EnumType.STRING)
	private RoomType roomType;
	
	@Column(unique = true)
	private String email;
	
	private String phoneNumber;
	
	private Double price;
	private Integer availableRooms;
	private Boolean isAvailable;
	
	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,mappedBy = "property")
	private List<PropertyUrl> urls;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private Location location;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "property")
	private List<Booking> bookings;
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL, mappedBy="property")
	private Address address;
}
