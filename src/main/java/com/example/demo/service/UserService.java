package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.domain.UserRegisterRequest;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.example.demo.domain.Roles.*;

@Service
public class UserService {

    @Autowired
    UsersRepository usersRepository;

    public String getUserIdFromRequest(HttpServletRequest request) {
        Principal userPrincipal = request.getUserPrincipal();
        String sessionId = request.getSession().getId();

        return userPrincipal == null ?
                sessionId :
                userPrincipal.getName();
    }

    public User createUser(UserRegisterRequest registerRequest) {
        List<String> roles = new ArrayList<>();
        roles.add(ROLE_USER);
        User user = new User(registerRequest.getName(), registerRequest.getEmail(), registerRequest.getPassword(), roles);

        return usersRepository.save(user);
    }

    public User createSeller(UserRegisterRequest registerRequest) {
        List<String> roles = new ArrayList<>();
        roles.add(ROLE_USER);
        roles.add(ROLE_SELLER);
        User user = new User(registerRequest.getName(), registerRequest.getEmail(), registerRequest.getPassword(), roles);

        return usersRepository.save(user);
    }

    public User createAdmin(UserRegisterRequest registerRequest) {
        List<String> roles = new ArrayList<>();
        roles.add(ROLE_USER);
        roles.add(ROLE_SELLER);
        roles.add(ROLE_ADMIN);
        User user = new User(registerRequest.getName(), registerRequest.getEmail(), registerRequest.getPassword(), roles);

        return usersRepository.save(user);
    }



    public User getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }
}
