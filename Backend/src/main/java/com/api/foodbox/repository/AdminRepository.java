package com.api.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.api.foodbox.model.Admin;

@Transactional
@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>
{
//	public List<Admin> findByMail(String a_mail);
//	public Admin findByPwd(String a_password);
//	public Admin findByNameAndPwd(String a_mail, String a_password);
}
