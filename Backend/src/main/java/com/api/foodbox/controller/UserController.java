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

import com.api.foodbox.model.User;
import com.api.foodbox.repository.UserRepository;


@RestController

@CrossOrigin
public class UserController
{
	@Autowired
	UserRepository userrepository;

		// retrieve all user from database
				@GetMapping("user")
				public List<User> getAllUser()
				{
					List<User> user=(List<User>) userrepository.findAll(); 
					return user;
				}
				
				
				
				
//				@PostMapping("/user")
//				@CrossOrigin(origins="http://localhost:4200")
//					public User addUser(@RequestBody User user) throws Exception {
//					String name=user.getName();
//					String password=user.getPwd();
//					if(name!=null && !"".equals(name))
//					{
//						User userobj=service.getUserByName(name);
//						if(userobj !=null)
//						{
//							throw new Exception("User with Name"+userobj+"is already exist");
//						}
//					}
//					if(password!=null && !"".equals(password))
//					{
//						User userobj=service.getUserByPwd(password);
//						if(userobj !=null)
//						{
//							throw new Exception("Pwd with User Name "+userobj+"is already exist");
//						}
//						
//					}
//					User userobj=null;
//					userobj=service.addUser(user);
//						return userobj;
//					
//					}
		
//		// add data from user
//				@PostMapping("/login")
//				public User login(@RequestBody User user) throws Exception
//				{
//					String uemail = user.getUemail();
//					String upwd = user.getUpwd();
//					User userObj = null;
//					
//					if(uemail != null && upwd != null)
//					{
//						userObj =(User) userrepository.findByEmail(uemail , upwd);
//					}
//					if(userObj == null)
//					{
//						
//						throw new Exception("bad credincials");
//					}
//					return userObj;
//				}
				
				//login
				@PostMapping("login")
				public User login(@RequestBody User user) throws Exception {
				String email=user.getEmail();
				String pwd=user.getPwd();
				User userobj=null;
				if(email!=null && pwd!=null)
				{
					userobj=(User) userrepository.findByEmailAndPwd(email, pwd);
				}
				if(userobj==null)
				{
					throw new Exception(" ");
				}
					return userobj;
				}
				
				
				
				
				

				
//		// add data from user
//				@PostMapping("/userall/login")
//				public User userlogin(@RequestBody User user)
//				{
//					return userrepository.save(user);
//				}
//				

		// add data from user
				@PostMapping("register")
				public User addUser(@RequestBody User user)
				{
					return userrepository.save(user);
				}
				
		
	
		// update existing product 
				@PutMapping("userupdate/{id}")
				public User updatUser(@RequestBody User user)
				{
					return userrepository.save(user);
				}

		// delete particular product from database
				@DeleteMapping("userdelete/{id}")
				public void deleteUser(@PathVariable int uid)
				{
					userrepository.deleteById(uid);
				}
				
				
				
				
}
