package com.sample.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleController {
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "This is dynamic content.";
    }
}