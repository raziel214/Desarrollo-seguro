package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor  @Getter
public class Greeting {
	
	private final long id;
	private  String content;

	
	public String validacion() {
		
		content="validacion";
		return content;
		
	}
}
