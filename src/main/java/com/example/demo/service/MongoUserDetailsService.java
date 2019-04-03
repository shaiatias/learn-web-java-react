package com.example.demo.service;


import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.example.demo.domain.Roles.*;

@Component
public class MongoUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        com.example.demo.domain.User user = usersRepository.findByEmail(email);

        if(user == null) {
            throw new UsernameNotFoundException("user not found");
        }

        List<SimpleGrantedAuthority> roles = user.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());

        return new User(user.getEmail(), user.getPassword(), roles);
    }
}