package com.example.demo.service;

import com.example.demo.domain.Cart;
import com.example.demo.domain.Order;
import com.example.demo.domain.OrderStatus;
import com.example.demo.domain.PaymentRequest;
import com.example.demo.repository.CartsRepository;
import com.example.demo.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.HashMap;

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
}
