package com.dentist.Server.dto;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;
import com.dentist.Server.model.Message;

@Data
public class ChatRequestDTO {
    private String model;
    private List<Message> messages;
    private int n;
    private double temperature;

    public ChatRequestDTO(String model, String prompt) {
        this.model = model;
        this.messages = new ArrayList<>();
        this.messages.add(new Message("user", prompt));
    }
    public void addMessage(String role, String content) {
        this.messages.add(new Message(role, content));
    }
}