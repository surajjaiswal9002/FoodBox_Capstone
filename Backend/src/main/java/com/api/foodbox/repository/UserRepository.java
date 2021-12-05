package com.api.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.api.foodbox.model.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	

	User findByEmailAndPwd(String uemail, String upwd);

	

	


	

	

	




}
