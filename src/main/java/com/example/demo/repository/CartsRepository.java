package com.example.demo.repository;

import com.example.demo.domain.Cart;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface CartsRepository extends ReactiveMongoRepository<Cart, String> {

    Mono<Cart> findByUserId(String userId);

}
