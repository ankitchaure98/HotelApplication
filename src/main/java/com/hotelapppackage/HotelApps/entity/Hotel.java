package com.hotelapppackage.HotelApps.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
public class Hotel {
	@Id
    @GeneratedValue
    private Long id;

    private String name;
    private String address;
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	private String pincode;

    @ManyToOne
    private User owner;

}
