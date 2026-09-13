package com.hotelapppackage.HotelApps.controller;

import com.hotelapppackage.HotelApps.entity.Hotel;
import com.hotelapppackage.HotelApps.repository.HotelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    private final HotelRepository hotelRepository;

    public HotelController(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @GetMapping
    public List<Hotel> getAll() {
        return hotelRepository.findAll();
    }

    @PostMapping("/register")
    public Hotel registerHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @PostMapping
    public Hotel add(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }
}