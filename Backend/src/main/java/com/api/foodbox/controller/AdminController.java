package com.api.foodbox.controller;

import java.util.List;


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

import com.api.foodbox.model.Admin;
import com.api.foodbox.model.Product;
import com.api.foodbox.repository.AdminRepository;



@RestController
@RequestMapping("admins")
@CrossOrigin
public class AdminController 
{
	@Autowired
	AdminRepository adminrepo;

		// retrieve all user from database
				@GetMapping("adminAll")
				public List<Admin> getAllAdmin()
				{
					List<Admin> admin=(List<Admin>) adminrepo.findAll(); 
					return admin;
				}

		// add data from user
				@PostMapping("adminAdd")
				public Admin addAdmin(@RequestBody Admin admin)
				{
					return adminrepo.save(admin);
				}
	
		// update existing product 
				@PutMapping("adminUpdate/{id}")
				public Admin updatUser(@RequestBody Admin admin)
				{
					return adminrepo.save(admin);
				}

		// delete particular product from database
				@DeleteMapping("adminDelete/{id}")
				public void deleteAdmin(@PathVariable int a_id)
				{
					adminrepo.deleteById(a_id);
				}
				
		// search the product by category from database
//				@GetMapping("searchbya_mail/{a_mail}")
//				public List<Admin> searchAdminbymail(@PathVariable String a_mail)
//				{
//				List<Admin> searchByMail = adminrepo.findByMail(a_mail);
//				return searchByMail;
//				}
}
