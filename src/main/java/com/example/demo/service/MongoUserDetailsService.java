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

@Component
public class MongoUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository repository;

    @Autowired
    protected PasswordEncoder passwordEncoder;

    @PostConstruct
    public void addAdminUser() {

        com.example.demo.domain.User admin = repository.findByEmail("admin");

        if (admin != null) {
            return;
        }

        admin = new com.example.demo.domain.User();

        admin.setEmail("admin");
        admin.setPassword(passwordEncoder.encode("admin"));

        repository.save(admin);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        com.example.demo.domain.User user = repository.findByEmail(email);

        if(user == null) {
            throw new UsernameNotFoundException("user not found");
        }

        List<SimpleGrantedAuthority> authorities = Arrays.asList(
                new SimpleGrantedAuthority("USER"),
                new SimpleGrantedAuthority("ADMIN")
        );

        return new User(user.getEmail(), user.getPassword(), authorities);
    }
}