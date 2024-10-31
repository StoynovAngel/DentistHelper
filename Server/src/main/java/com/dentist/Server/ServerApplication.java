package com.dentist.Server;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USER", dotenv.get("DB_USER"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		System.setProperty("SPRING_JPA_DATABASE_PLATFORM", dotenv.get("SPRING_JPA_DATABASE_PLATFORM"));
		System.setProperty("SPRING_JPA_HIBERNATE_DDL_AUTO", dotenv.get("SPRING_JPA_HIBERNATE_DDL_AUTO"));
		System.setProperty("SECURITY_JWT_SECRET_KEY", dotenv.get("SECURITY_JWT_SECRET_KEY"));
		System.setProperty("RECAPTCHA_SECRET", dotenv.get("RECAPTCHA_SECRET"));
		System.setProperty("OPENAI_KEY", dotenv.get("OPENAI_KEY"));

		SpringApplication.run(ServerApplication.class, args);
	}

}
