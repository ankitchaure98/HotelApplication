package com.hotelapppackage.HotelApps.controller;

import com.hotelapppackage.HotelApps.dto.*;
import com.hotelapppackage.HotelApps.service.AuthService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthService service;

    @PostMapping("/register")
    public String register(@RequestBody RegisterDTO dto) {
        return service.register(dto);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginDTO dto) {
        return service.login(dto);
    }

}
