package com.api.foodbox.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="admin_id")
	private int a_id;
	
	@Column(name = "admin_mail")
	private String a_mail;
	
	@Column(name="admin_password")
	private int a_password;
	
	

	public int getA_id() {
		return a_id;
	}

	public void setA_id(int a_id) {
		this.a_id = a_id;
	}

	public String getA_mail() {
		return a_mail;
	}

	public void setA_mail(String a_mail) {
		this.a_mail = a_mail;
	}

	public int getA_password() {
		return a_password;
	}

	public void setA_password(int a_password) {
		this.a_password = a_password;
	}

	

	@Override
	public String toString() {
		return "Admin [a_id=" + a_id + ", a_mail=" + a_mail + ", a_password=" + a_password + ", a_name=" 
				+ ", u_mobile=" + "]";
	}

	public Admin(int a_id, String a_mail, int a_password, String a_name, int u_mobile) {
		super();
		this.a_id = a_id;
		this.a_mail = a_mail;
		this.a_password = a_password;
		
	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
