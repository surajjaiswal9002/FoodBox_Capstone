package com.api.foodbox.controller;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.foodbox.model.Purchase;
import com.api.foodbox.repository.PurchaseRepository;
import com.api.foodbox.repository.UserRepository;

@RestController
@RequestMapping("items")
@CrossOrigin
public class PurchaseController 
{
	@Autowired
	PurchaseRepository purchaseRepository;
	UserRepository  us;
	// retrieve all purchase item information from database
			@GetMapping("itemAll")
			public List<Purchase> getAllItem()
			{
				List<Purchase> item=(List<Purchase>) purchaseRepository.findAll(); 
				return item;
			}
	// add purchase item into database
			@PostMapping("itemAdd")
			public Purchase addItem(@RequestBody Purchase item)
			{
				return purchaseRepository.save(item);
			}
	// get particular item by their ID from database
				@GetMapping("searchbyorderid/{purchase_id}")
				public Optional<Purchase > getPurchaseId(@PathVariable int purchase_id)
				{
					return purchaseRepository.findById(purchase_id);
					
				}

	// update purchase item  from database
			@PutMapping("itemUpdate/{id}")
			public Purchase updatItem(@RequestBody Purchase item)
			{
				return purchaseRepository.save(item);
			}

	// delete the  purchase item from database
			@DeleteMapping("delete/{id}")
			public void deleteItem(@PathVariable int id)
			{
				purchaseRepository.deleteById(id);
			}
	

}