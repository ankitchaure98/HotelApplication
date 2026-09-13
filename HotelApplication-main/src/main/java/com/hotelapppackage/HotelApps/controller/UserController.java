package com.hotelapppackage.HotelApps.controller;

//package com.hotelapppackage.HotelApps.controller;

import com.hotelapppackage.HotelApps.entity.User;
import com.hotelapppackage.HotelApps.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}
