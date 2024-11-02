package com.dentist.Server.service;

import com.dentist.Server.exceptions.UserNotFoundException;
import com.dentist.Server.model.AppointmentEntity;
import com.dentist.Server.model.UserEntity;
import com.dentist.Server.repository.AppointmentRepo;
import com.dentist.Server.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepo appointmentRepo;
    @Autowired
    private UserRepo userRepo;

    public List<AppointmentEntity> getAppointmentByUser(Long id) throws UserNotFoundException {
        UserEntity user = userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found."));
        return appointmentRepo.findByUser(user);
    }

    public AppointmentEntity createAppointment(Long userId, AppointmentEntity appointmentEntity) throws UserNotFoundException{
        UserEntity user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found."));
        appointmentEntity.setUser(user);
        return appointmentRepo.save(appointmentEntity);
    }
}
