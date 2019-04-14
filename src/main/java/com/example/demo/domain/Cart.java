package com.example.demo.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collections;
import java.util.Map;
import java.util.Objects;

@Document(collection = "carts")
public class Cart {

    @Id
    private String id;

    private String userId;

    private Map<String, ProductInCart> products;

    public Cart() {
    }

    public Cart(String userId, Map<String, ProductInCart> products) {
        this.userId = userId;
        this.products = products;
    }

    public Cart(String id, String userId, Map<String, ProductInCart> products) {
        this.id = id;
        this.userId = userId;
        this.products = products;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Map<String, ProductInCart> getProducts() {
        return Objects.isNull(products) ? Collections.emptyMap() : products;
    }

    public void setProducts(Map<String, ProductInCart> products) {
        this.products = products;
    }
}
