package com.example.demo.rest;

import com.example.demo.domain.Order;
import com.example.demo.domain.Product;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.service.OrdersService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RequestMapping("/api/orders")
@RestController
public class OrdersController {

    @Autowired
    OrdersService ordersService;

    @Autowired
    UserService userService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping
    public List<Order> getMy(HttpServletRequest request) {
        String userId = userService.getUserIdFromRequest(request);
        return ordersService.getOrdersByUserId(userId);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/all")
    public List<Order> getAll(HttpServletRequest request) {
        return ordersService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Optional<Order> getById(@PathVariable String id) {
        return ordersService.getById(id);
    }
}
