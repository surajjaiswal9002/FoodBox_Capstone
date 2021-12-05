package com.api.foodbox;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;



@ControllerAdvice

public class GlobalExceptionHandler {
	@ExceptionHandler(Exception.class)
	public String handleException1(Exception e) 
	{
		e.printStackTrace();
		return " Error has occurred, please contact to Administrator";
	}

}
