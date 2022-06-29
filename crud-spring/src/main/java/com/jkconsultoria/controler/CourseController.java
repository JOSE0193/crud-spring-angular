package com.jkconsultoria.controler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.jkconsultoria.model.Course;
import com.jkconsultoria.repository.CourseRepository;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {
    
    private final CourseRepository courseRepository;

    @GetMapping
    public @ResponseBody List<Course> list() { 
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course save(@RequestBody Course course){
        return courseRepository.save(course);
    }
}
