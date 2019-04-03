package com.example.demo.rest;

import com.example.demo.domain.Product;
import com.example.demo.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;

@RequestMapping("/api/products")
@RestController
public class ProductsController {

    @Autowired
    ProductsRepository productsRepository;

    @PostMapping
    public Mono<ResponseEntity<Product>> create(@RequestBody Product product) {
        product.setId(null);
        return productsRepository.save(product).map(savedPro -> ResponseEntity.ok(savedPro));
    }

    @PutMapping
    public Mono<ResponseEntity<Product>> update(@RequestBody Product product) {
        return productsRepository.save(product).map(savedPro -> ResponseEntity.ok(savedPro));
    }

    @GetMapping
    public Flux<Product> getAll() {
        return productsRepository.findAll();
    }

    @GetMapping("/{id}")
    public Mono<Product> getById(@RequestParam String id) {
        return productsRepository.findById(id);
    }

}
