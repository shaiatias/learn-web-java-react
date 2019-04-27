package com.example.demo.service;

import com.example.demo.domain.*;
import com.example.demo.repository.CartsRepository;
import com.example.demo.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Optional;

@Service
public class OrdersService {

    @Autowired
    CartsRepository cartsRepository;

    @Autowired
    OrdersRepository ordersRepository;

    public Order createOrder(String userId, PaymentRequest paymentRequest) {

        Cart cart = cartsRepository.findByUserId(userId);

        Order order = new Order(userId, cart.getProducts(), OrderStatus.PENDING, 0,0,0);

        Order savedOrder = ordersRepository.save(order);

        cartsRepository.delete(cart);

        return savedOrder;

    }

    public Optional<Order> getById(String id) {
        return ordersRepository.findById(id);
    }
}
