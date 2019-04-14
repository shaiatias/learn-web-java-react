package com.example.demo.rest;

import com.example.demo.domain.Order;
import com.example.demo.domain.PaymentRequest;
import com.example.demo.service.CartService;
import com.example.demo.service.OrdersService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("/api/checkout")
@RestController
public class CheckoutController {

	@Autowired
	OrdersService ordersService;

	@Autowired
	UserService userService;

	@PreAuthorize("isAuthenticated()")
	@PostMapping
	public ResponseEntity<Order> performCheckout(HttpServletRequest request, @RequestBody PaymentRequest paymentRequest) {

		String userId = userService.getUserIdFromRequest(request);

		Order order = ordersService.createOrder(userId, paymentRequest);

		return ResponseEntity.ok(order);
	}
}
