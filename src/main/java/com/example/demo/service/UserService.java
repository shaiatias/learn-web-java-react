package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.domain.UserRegisterRequest;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Collections;

import static com.example.demo.domain.Roles.ROLE_USER;

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
        User user = new User(registerRequest.getName(), registerRequest.getEmail(), registerRequest.getPassword(), Collections.singletonList(ROLE_USER));
        return usersRepository.save(user);
    }

    public User getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }
}
