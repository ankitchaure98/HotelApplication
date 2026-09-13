package com.hotelapppackage.HotelApps.controller;

import com.hotelapppackage.HotelApps.entity.Hotel;
import com.hotelapppackage.HotelApps.repository.HotelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@RequiredArgsConstructor
public class HotelController {

    private final HotelRepository hotelRepository;

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