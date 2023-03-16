package com.jkconsultoria.repository;

import com.jkconsultoria.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    
}