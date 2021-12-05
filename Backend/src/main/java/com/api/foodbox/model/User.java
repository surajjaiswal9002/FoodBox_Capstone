package com.api.foodbox.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="userid")
	private int uid;
	
	@Column(name = "username")
	private String uname;
	
	@Column(name = "useremail")
	private String email;
	
	@Column(name="upwd")
	private String pwd;
	
	@Column(name="usermobile")
	private int umobile;

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public int getUmobile() {
		return umobile;
	}

	public void setUmobile(int umobile) {
		this.umobile = umobile;
	}

	
	
	

}
