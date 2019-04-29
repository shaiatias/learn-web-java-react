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

        new Thread(() -> {

            createProducts();
            createAdmin();
            createCustomer();
            createSeller();

        }).start();

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
                ),
                new Product(
                        null,
                        "New Look wedding skinny fit suit jacket in mid grey",
                        "ASOS",
                        "New Look wedding skinny fit suit jacket in mid grey",
                        "https://images.asos-media.com/products/new-look-wedding-skinny-fit-suit-jacket-in-mid-grey/8997111-1-midgrey?$n_240w$&wid=238&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "suits", "men"),
                        161.95,
                        Arrays.asList("new", "suits", "men")
                ),
                new Product(
                        null,
                        "Harry Brown wedding wool blend slim fit summer tweed suit",
                        "CK Clein",
                        "Harry Brown wedding wool blend slim fit summer tweed suit",
                        "https://images.asos-media.com/products/boohooman-skinny-fit-large-check-suit-jacket-in-red/10935352-1-red?$n_240w$&wid=238&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale", "suits", "men"),
                        200,
                        Arrays.asList("sale", "suits", "men")
                ),
                new Product(
                        null,
                        "New Look sweat with Colorado print in burgundy",
                        "Colorado",
                        "New Look sweat with Colorado print in burgundy",
                        "https://images.asos-media.com/products/new-look-sweat-with-colorado-print-in-burgundy/10876818-1-darkburgundy?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale", "training", "men"),
                        73,
                        Arrays.asList("sale", "training", "men")
                ),
                new Product(
                        null,
                        "Gym King piped poly funnel neck tracksuit top",
                        "Gym King",
                        "Gym King piped poly funnel neck tracksuit top",
                        "https://images.asos-media.com/products/gym-king-piped-poly-funnel-neck-tracksuit-top/11836264-1-grey?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "sale", "training", "men"),
                        28.50,
                        Arrays.asList("new", "sale", "training", "men")
                ),
                new Product(
                        null,
                        "Selected Homme leather mix trainers in black" ,
                        "Adidax",
                        "Selected Homme leather mix trainers in black",
                        "https://images.asos-media.com/products/selected-homme-leather-mix-trainers-in-black/11713450-1-black?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "shoes", "men"),
                        11.99,
                        Arrays.asList("new", "shoes", "men")
                ),
                new Product(
                        null,
                        "Brave Soul cross strap sliders in black" ,
                        "Naim",
                        "Brave Soul cross strap sliders in black",
                        "https://images.asos-media.com/products/brave-soul-cross-strap-sliders-in-black/11392818-1-black?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale", "shoes", "men"),
                        11.99,
                        Arrays.asList("sale", "shoes", "men")
                ),
                new Product(
                        null,
                        "New Look faux suede cross strap wedges in mid brown" ,
                        "New Look",
                        "New Look faux suede cross strap wedges in mid brown",
                        "https://images.asos-media.com/products/new-look-faux-suede-cross-strap-wedges-in-mid-brown/11481268-1-midbrown?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "shoes", "women"),
                        99.99,
                        Arrays.asList("new", "shoes", "women")
                ),
                new Product(
                        null,
                        "Glamorous studded slip on shoe" ,
                        "Glamour shoes",
                        "Glamorous studded slip on shoe",
                        "https://images.asos-media.com/products/glamorous-studded-slip-on-shoe/10744695-1-black?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale", "shoes", "women"),
                        11.99,
                        Arrays.asList("sale", "shoes", "women")
                ),
                new Product(
                        null,
                        "New Look tailored coat in mustard tartan" ,
                        "Best coats",
                        "New Look tailored coat in mustard tartan",
                        "https://images.asos-media.com/products/new-look-tailored-coat-in-mustard-tartan/10905044-1-yellowpattern?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale", "coats", "women"),
                        171.99,
                        Arrays.asList("sale", "coats", "women")
                ),
                new Product(
                        null,
                        "New  cross strap wedges in mid brown" ,
                        "New Look",
                        "New  cross strap wedges in mid brown",
                        "https://images.asos-media.com/products/new-look-faux-borg-lined-parka/11243277-1-darkkhaki?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("new", "coats", "women"),
                        299.99,
                        Arrays.asList("new", "coats", "women")
                ),
                new Product(
                        null,
                        "QED London cape in border print" ,
                        "QED",
                        "QED London cape in border print",
                        "https://images.asos-media.com/products/qed-london-cape-in-border-print/10700173-1-pinknavy?$n_320w$&wid=317&fit=constrain",
                        Arrays.asList("S", "L", "XL"),
                        Arrays.asList("sale","new", "jeans", "women"),
                        11.99,
                        Arrays.asList("sale", "jeans", "women")
                )
        );

        products.forEach(product -> {

            if (!productsRepository.findByName(product.getName()).isPresent()) {

                productsRepository.save(product);
                logger.info("product saved {}", product);
            }

        });
    }
}
