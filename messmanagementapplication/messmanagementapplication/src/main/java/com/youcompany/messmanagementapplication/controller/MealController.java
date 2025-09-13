package com.youcompany.messmanagementapplication.controller;

import com.youcompany.messmanagementapplication.model.Meal;
import com.youcompany.messmanagementapplication.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {
    @Autowired
    private MealRepository mealRepository;

    @GetMapping
    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    @PostMapping
    public Meal addMeal(@RequestBody Meal meal) {
        return mealRepository.save(meal);
    }
}
