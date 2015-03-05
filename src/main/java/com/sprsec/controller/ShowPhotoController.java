package com.sprsec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ShowPhotoController {
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String register(HttpServletRequest request, ModelMap model) {
        return "comment/testOne";
    }
}
