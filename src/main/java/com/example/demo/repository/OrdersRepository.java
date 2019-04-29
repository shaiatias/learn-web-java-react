package com.example.demo.repository;

import com.example.demo.domain.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdersRepository extends MongoRepository<Order, String> {

    List<Order> findByUserId(String userId);


}
