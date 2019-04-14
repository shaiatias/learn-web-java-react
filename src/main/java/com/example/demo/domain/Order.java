package com.example.demo.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection = "orders")
public class Order {

    @Id
    private String id;

    private String userId;

    private Map<String, ProductInCart> products;

    private OrderStatus orderStatus;

    private double subtotalPrice;

    private double shippingPrice;

    private double totalPrice;

    public Order() {
    }

    public Order(String id, String userId, Map<String, ProductInCart> products, OrderStatus orderStatus, double subtotalPrice, double shippingPrice, double totalPrice) {
        this.id = id;
        this.userId = userId;
        this.products = products;
        this.orderStatus = orderStatus;
        this.subtotalPrice = subtotalPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
    }

    public Order(String userId, Map<String, ProductInCart> products, OrderStatus orderStatus, double subtotalPrice, double shippingPrice, double totalPrice) {
        this.userId = userId;
        this.products = products;
        this.orderStatus = orderStatus;
        this.subtotalPrice = subtotalPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
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
        return products;
    }

    public void setProducts(Map<String, ProductInCart> products) {
        this.products = products;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public double getSubtotalPrice() {
        return subtotalPrice;
    }

    public void setSubtotalPrice(double subtotalPrice) {
        this.subtotalPrice = subtotalPrice;
    }

    public double getShippingPrice() {
        return shippingPrice;
    }

    public void setShippingPrice(double shippingPrice) {
        this.shippingPrice = shippingPrice;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id='" + id + '\'' +
                ", userId='" + userId + '\'' +
                ", products=" + products +
                ", orderStatus='" + orderStatus + '\'' +
                ", subtotalPrice=" + subtotalPrice +
                ", shippingPrice=" + shippingPrice +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
