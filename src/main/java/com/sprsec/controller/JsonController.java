package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.service.map.MarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JsonController {

    @Autowired
    private MarkerService markerService;

    @RequestMapping(value = "/markers", method = RequestMethod.GET)
    public List<Marker> getMarkers() {
        return markerService.getAllMarkers();
    }
}
