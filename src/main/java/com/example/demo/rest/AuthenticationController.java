package com.example.demo.rest;

import com.example.demo.domain.UserLoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    @PostMapping(value = "/login")
    public Mono<ResponseEntity<Void>> login(HttpServletRequest request, @RequestBody UserLoginRequest body) {
        return Mono.justOrEmpty(ResponseEntity.ok().body(null));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {
        return ResponseEntity.ok().body(null);
    }
}
