package com.youcompany.messmanagementapplication.repository;

import com.youcompany.messmanagementapplication.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {
}
