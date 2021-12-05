package com.api.foodbox.repository;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.foodbox.model.Purchase;
@Transactional
@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, Integer> {

	List<Purchase> findByUsername(String username);

	
	
	



}
