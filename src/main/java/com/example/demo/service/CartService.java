package com.example.demo.service;

import com.example.demo.domain.Cart;
import com.example.demo.repository.CartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.HashMap;

@Service
public class CartService {

    @Autowired
    CartsRepository cartsRepository;

    public Cart getCart(String userId) {

        Cart cart = cartsRepository.findByUserId(userId);

        if (cart == null) {
            cart = cartsRepository.save(new Cart(userId, new HashMap<>()));
        }

        return cart;
    }
}
