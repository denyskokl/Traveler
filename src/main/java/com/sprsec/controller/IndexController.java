package com.sprsec.controller;

import com.sprsec.service.map.MarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class IndexController {

    @Autowired
    private MarkerService markerService;

    @ResponseBody
    @RequestMapping(value = "/")
    public ModelAndView index() {
        ModelAndView m = new ModelAndView("index");
        m.addObject(markerService.getAllMarkers());

        return m;
    }
}
