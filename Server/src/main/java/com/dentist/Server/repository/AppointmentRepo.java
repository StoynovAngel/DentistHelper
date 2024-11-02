package com.dentist.Server.repository;

import com.dentist.Server.model.AppointmentEntity;
import com.dentist.Server.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepo extends JpaRepository<AppointmentEntity, Long> {
    List<AppointmentEntity> findByUser(UserEntity user);
}
