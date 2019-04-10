package com.example.demo.rest;

import com.example.demo.domain.Product;
import com.example.demo.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/products")
@RestController
public class ProductsController {

    @Autowired
    ProductsRepository productsRepository;

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product) {
        product.setId(null);
        Product savedPro = productsRepository.save(product);
        return ResponseEntity.ok(savedPro);
    }

    @PutMapping
    public ResponseEntity<Product> update(@RequestBody Product product) {
        Product savedPro = productsRepository.save(product);
        return ResponseEntity.ok(savedPro);
    }

    @GetMapping
    public List<Product> getAll(
            @RequestParam(required = false) List<String> tags,
            @RequestParam(required = false) List<String> categories) {

        if (tags != null)
            return productsRepository.findInTags(tags);

        else if (categories!= null)
            return productsRepository.findInCategories(categories);

        else
            return productsRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getById(@PathVariable String id) {
        return productsRepository.findById(id);
    }
}
