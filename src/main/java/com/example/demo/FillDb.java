package com.example.demo;

import com.example.demo.domain.Product;
import com.example.demo.domain.User;
import com.example.demo.domain.UserRegisterRequest;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.repository.UsersRepository;
import com.example.demo.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@Service
public class FillDb {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    ProductsRepository productsRepository;

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    UserService userService;

    @PostConstruct
    public void loaded() {
        createProducts();
        createAdmin();
        createCustomer();
        createSeller();
    }

    private void createAdmin() {
        User admin = usersRepository.findByEmail("admin");

        if (admin != null) {
            return;
        }

        userService.createAdmin(new UserRegisterRequest("admin", "admin", "admin", "admin"));
    }

    private void createSeller() {
        User seller1 = usersRepository.findByEmail("seller1@gmail.com");

        if (seller1 != null) {
            return;
        }

        userService.createSeller(new UserRegisterRequest("seller1", "seller1@gmail.com", "seller1", "seller1"));
    }

    private void createCustomer() {
        User customer1 = usersRepository.findByEmail("customer1@gmail.com");

        if (customer1 != null) {
            return;
        }

        userService.createCustomer(new UserRegisterRequest("customer1", "customer1@gmail.com", "customer1", "customer1"));
    }

    private void createProducts() {
        List<Product> products = Arrays.asList(
                new Product(
                        null,
                        "Boohoo exclusive basic long sleeve midi dress in khaki",
                        "Boohoo",
                        "Boohoo exclusive basic long sleeve midi dress in khaki",
                        "https://images.asos-media.com/products/boohoo-exclusive-basic-long-sleeve-midi-dress-in-khaki/10873944-1-khaki?$XXL$&wid=513&fit=constrain",
                        Arrays.asList("S", "L"),
                        Arrays.asList("dress", "women", "sale"),
                        31.95,
                        Arrays.asList("sale")
                ),
                new Product(
                        null,
                        "Missguided exclusive ribbed short sleeve v neck midi dress in beige",
                        "missguided",
                        "Missguided exclusive ribbed short sleeve v neck midi dress in beige",
                        "https://images.asos-media.com/products/missguided-exclusive-ribbed-short-sleeve-v-neck-midi-dress-in-beige/10890758-1-camel?$XXL$&wid=513&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "sale", "dress", "women"),
                        61.95,
                        Arrays.asList("new", "sale", "dress", "women")
                ));

        List<Product> products1 = productsRepository.saveAll(products);
        logger.info("product saved {}", products1);
    }
}
