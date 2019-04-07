package com.example.demo.domain;

public class ProductInCart {

    private String productId;

    private int quantity;

    private String size;

    public ProductInCart() {
    }

    public ProductInCart(String productId, int quantity, String size) {
        this.productId = productId;
        this.quantity = quantity;
        this.size = size;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
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
                "productId=" + productId +
                ", quantity=" + quantity +
                ", size='" + size + '\'' +
                '}';
    }
}
