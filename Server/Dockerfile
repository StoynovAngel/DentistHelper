# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the application JAR file and .env file
ARG JAR_FILE=target/Server-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
COPY .env .env

# Expose the port the application runs on
EXPOSE 8080

# Start the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]