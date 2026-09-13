package com.hotelapppackage.HotelApps.service;

import com.hotelapppackage.HotelApps.entity.User;
import com.hotelapppackage.HotelApps.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
