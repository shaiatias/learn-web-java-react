package com.example.demo.service;


import com.example.demo.domain.Cart;
import com.example.demo.domain.ProductInCart;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.example.demo.domain.Roles.*;

@Component
public class MongoUserDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        com.example.demo.domain.User user = usersRepository.findByEmail(email);

        if(user == null) {
            throw new UsernameNotFoundException("user not found");
        }

        handleCartMerge(user);

        List<SimpleGrantedAuthority> roles = user.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());

        return new User(user.getEmail(), user.getPassword(), roles);
    }

    private void handleCartMerge(com.example.demo.domain.User user) {

        Cart cart = cartService.getCart(userService.getUserIdFromRequest(request));
        Cart newCart = cartService.getCart(user.getEmail());

        cartService.cartsRepository.save(mergeCart(cart, newCart));

        // reset old cart
        cartService.cartsRepository.delete(cart);

    }

    private Cart mergeCart(Cart cart, Cart newCart) {

        for (ProductInCart p : cart.getProducts().values()) {

            // item is new
            if (newCart.getProducts().get(p.getProductId()) == null) {
                newCart.getProducts().put(p.getProductId(), p);
            }

            // old items, combine quantity
            else {

                ProductInCart productInCart = cart.getProducts().get(p.getProductId());
                ProductInCart newProductInCart = newCart.getProducts().get(p.getProductId());

                newProductInCart.setQuantity(
                        newProductInCart.getQuantity() + productInCart.getQuantity()
                );
            }
        }

        return newCart;
    }
}