package com.youcompany.messmanagementapplication.controller;

import com.youcompany.messmanagementapplication.model.Payment;
import com.youcompany.messmanagementapplication.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @PostMapping
    public Payment addPayment(@RequestBody Payment payment) {
        return paymentRepository.save(payment);
    }
}
