package com.socialmedia.analytics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class AnalyticsServiceApplication {

    public static void main(String-> {
        SpringApplication.run(AnalyticsServiceApplication.class, args);
    }
}

@RestController
@RequestMapping("/analytics")
class AnalyticsController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Analytics Service!";
    }
}
