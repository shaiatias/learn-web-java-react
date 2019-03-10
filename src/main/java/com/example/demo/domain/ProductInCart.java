package com.example.demo.domain;

public class ProductInCart {

    private Product product;

    private int quantity;

    private String size;

    public ProductInCart() {
    }

    public ProductInCart(Product product, int quantity, String size) {
        this.product = product;
        this.quantity = quantity;
        this.size = size;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "ProductInCart{" +
                "product=" + product +
                ", quantity=" + quantity +
                ", size='" + size + '\'' +
                '}';
    }
}
