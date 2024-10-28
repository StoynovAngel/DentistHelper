package com.dentist.Server.model;

import com.dentist.Server.enums.UserType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username", length = 100, nullable = false, unique = true)
    private String username;

    @Column(name="full_name", length = 50, nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

    @Min(value = 1, message = "Patient is too young.")
    @Max(value = 130, message = "Invalid age")
    @Column(name = "age", length = 3, nullable = false)
    private int age;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", columnDefinition = "VARCHAR(20) DEFAULT 'PATIENT'")
    private UserType role;
}
