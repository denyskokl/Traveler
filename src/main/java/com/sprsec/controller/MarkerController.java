package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MarkerController {

    @Autowired
    private MarkerService markerService;

    @RequestMapping(value = "/markers", method = RequestMethod.GET)
      public List<Marker> getMarkers() {
        return markerService.getAllMarkers();
    }

    @RequestMapping(value = "/save_markers", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public String saveMarkers(@RequestBody Marker marker) throws JSONException {
         return "<h1 class=\"marker-heading\">" + marker.getMessage() + "</h1><p>" + marker.getAddress() + "</p>";
    }
}