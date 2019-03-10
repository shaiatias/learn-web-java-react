package com.example.demo.rest;

import com.example.demo.domain.Customer;
import com.example.demo.repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("/api/customers")
@RestController
public class CustomerController {

	@Autowired
	CustomersRepository customersRepository;

	@PostMapping
	public Mono<ResponseEntity<Customer>> create(HttpServletRequest request) {
		Customer customer = new Customer();
		customer.setName("aaa");
		return customersRepository.save(customer).map(ResponseEntity::ok);
	}

	@GetMapping
	public Flux<Customer> getAll() {
		return customersRepository.findAll();
	}

	@GetMapping("/{name}")
	public Flux<Customer> getByName(@PathVariable("name") String name) {
		return customersRepository.findByName(name);
	}
}
