package com.example.demo.rest;

import com.example.demo.domain.Order;
import com.example.demo.domain.Product;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/orders")
@RestController
public class OrdersController {

    @Autowired
    OrdersService ordersService;

//    @PostMapping
//    public ResponseEntity<Product> create(@RequestBody Product product) {
//        product.setId(null);
//        Product savedPro = productsRepository.save(product);
//        return ResponseEntity.ok(savedPro);
//    }

//    @PutMapping
//    public ResponseEntity<Product> update(@RequestBody Product product) {
//        Product savedPro = productsRepository.save(product);
//        return ResponseEntity.ok(savedPro);
//    }

//    @GetMapping
//    public List<Product> getAll() {
//
//    }

    @GetMapping("/{id}")
    public Optional<Order> getById(@PathVariable String id) {
        return ordersService.getById(id);
    }
}
