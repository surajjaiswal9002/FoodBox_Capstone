package com.api.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.api.foodbox.model.Product;

@Transactional
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	
	
	public List<Product> findByCategories(String categories);
	public List<Product> findByPrice(int price);
//	public List<Product> findByNameIgnoreCase(String name);
//	public List<Product> findByNameIncludesIgnoreCase(String name);
	public List<Product> findByNameContainingIgnoreCase(String name);
	
	
	
	
	



}
