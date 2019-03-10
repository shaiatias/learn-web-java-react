package com.example.demo.repository;

import com.example.demo.domain.Customer;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface CustomersRepository extends ReactiveMongoRepository<Customer, String> {

	/**
	 *
	 * @param name name of customer
	 * @return
	 */
	Flux<Customer> findByName(String name);
}
