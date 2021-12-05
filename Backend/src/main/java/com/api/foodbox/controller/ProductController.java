package com.api.foodbox.controller;


import java.sql.Date;
import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;	
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.foodbox.model.Product;
import com.api.foodbox.repository.ProductRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("products")
@CrossOrigin
public class ProductController 
{
	@Autowired
	ProductRepository productrepository;
	
		// add new product into database
		@PostMapping("add")
				public Product addProduct(@RequestBody Product product)
				{
					return productrepository.save(product);
				}

		// retrieve all product from database
				@GetMapping("all")
				public List<Product> getAllProduct()
				{
					List<Product> product=(List<Product>) productrepository.findAll(); 
					return product;
				}

		// update product by id  from database
				@PutMapping("update/{id}")
				public Product updatProduct(@RequestBody Product product)
				{
					return productrepository.save(product);
				}
		
		// delete the  product by id from database
				@DeleteMapping("delete/{id}")
				public void deleteProduct(@PathVariable int id)
				{
					productrepository.deleteById(id);
				}

		// get particular product by their ID
				@GetMapping("searchbyid/{id}")
				public Optional<Product> getProductId(@PathVariable int id)
				{
					return productrepository.findById(id);
				}

	

		// search the product by category from database
				@GetMapping("searchbycategories/{categories}")
				public List<Product> searchProductbycategories(@PathVariable String categories)
				{
				List<Product> searchBycategories = productrepository.findByCategories(categories);
				return searchBycategories;
				}
				
				
		// search the product by NAme from database  with full text search
				@GetMapping("searchbyname/{name}")
				public List<Product> searchProductbyName(@PathVariable String name)
				{
				List<Product> searchByname = productrepository.findByNameContainingIgnoreCase(name);
				return searchByname;
				}
		//search the product by price from database
				
				@GetMapping("searchbyprice/{price}")
				public List<Product> searchProductbyprice(@PathVariable int price)
				{
					List<Product> searchbyprice = productrepository.findByPrice(price);
					return searchbyprice;
				}
				
		

				

}
