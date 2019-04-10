package com.example.demo.repository;

import com.example.demo.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends MongoRepository<Product, String> {

    @Query("{ 'tags' : { $in : ?0 } }")
    List<Product> findInTags(List<String> tags);

    @Query("{ 'tags' : { $all : ?0 } }")
    List<Product> findByAllTags(List<String> tags);

    @Query("{ 'categories' : { $in : ?0 } }")
    List<Product> findInCategories(List<String> categories);

    @Query("{ 'categories' : { $all : ?0 } }")
    List<Product> findByAllCategories(List<String> categories);
}
