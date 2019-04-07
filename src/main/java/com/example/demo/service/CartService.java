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

    public Mono<Cart> getCart(String userId) {
        return cartsRepository
                .findByUserId(userId)
                .switchIfEmpty(Mono.defer(() -> cartsRepository.save(new Cart(userId, new HashMap<>()))));
    }
}
