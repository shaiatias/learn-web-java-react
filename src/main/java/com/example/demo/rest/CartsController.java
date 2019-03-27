package com.example.demo.rest;

import com.example.demo.domain.Cart;
import com.example.demo.domain.Product;
import com.example.demo.domain.ProductInCart;
import com.example.demo.repository.CartsRepository;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.service.CartService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Arrays;
import java.util.Collections;
import java.util.Objects;

@RequestMapping("/api/carts")
@RestController
public class CartsController {

	@Autowired
	CartsRepository cartsRepository;

	@Autowired
	CartService cartService;

	@Autowired
	UserService userService;

	@GetMapping
	public Mono<Cart> get(HttpServletRequest request) {
		return cartService.getCart(userService.getUserIdFromRequest(request));
	}

	@PutMapping
	public Mono<Cart> updateCart(HttpServletRequest request, @RequestBody ProductInCart productInCart) {

		String userId = userService.getUserIdFromRequest(request);

		Cart cart = cartService.getCart(userId).block();
		cart.getProducts().put(productInCart.getProduct().getId(), productInCart);

		return cartsRepository.save(cart);
	}

	@DeleteMapping
	public Mono<Cart> clearCart(HttpServletRequest request) {

		String userId = userService.getUserIdFromRequest(request);

		Cart cart = cartService.getCart(userId).block();

		cart.getProducts().clear();

		return cartsRepository.save(cart);

	}
}
