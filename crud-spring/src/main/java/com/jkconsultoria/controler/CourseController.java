package com.jkconsultoria.controler;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jkconsultoria.model.Course;
import com.jkconsultoria.repository.CourseRepository;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CourseController {
    
    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list() { 
        return courseRepository.findAll();
    }
}
