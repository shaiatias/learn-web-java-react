package com.example.demo.service;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@Service
public class UserService {

    public String getUserIdFromRequest(HttpServletRequest request) {
        Principal userPrincipal = request.getUserPrincipal();
        String sessionId = request.getSession().getId();

        return userPrincipal == null ?
                sessionId :
                userPrincipal.getName();
    }

}
