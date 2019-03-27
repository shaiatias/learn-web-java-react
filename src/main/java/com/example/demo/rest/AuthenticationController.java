package com.example.demo.rest;

import com.example.demo.domain.User;
import com.example.demo.domain.UserLoginRequest;
import com.example.demo.domain.UserRegisterRequest;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    @Autowired
    UserService userService;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/login")
    public Mono<ResponseEntity<String>> login(HttpServletRequest request, HttpServletResponse response, @RequestBody UserLoginRequest body) {
        return Mono.justOrEmpty(ResponseEntity.ok().body("OK"));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        return ResponseEntity.ok().body(null);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(HttpServletRequest request, HttpServletResponse response, @RequestBody UserRegisterRequest body) {
        User user = userService.createUser(body);
        return ResponseEntity.ok().body(user);
    }
}
