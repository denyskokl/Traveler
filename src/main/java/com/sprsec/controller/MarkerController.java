package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MarkerController {

    @Autowired
    private MarkerService markerService;

    @RequestMapping(value = "/markers", method = RequestMethod.GET)
      public List<Marker> getMarkers() {
        return markerService.getAllMarkers();
    }

    @RequestMapping(value = "/save_marker", method = RequestMethod.POST, produces = "application/json")
    public Marker saveMarker(@RequestBody Marker marker) throws JSONException {
        return marker;
    }
            //todo : як вернути string в ajax запросі якщо succsess
    @RequestMapping(value = "/remove_marker", method = RequestMethod.POST, produces = "application/json")
    public Marker removeMarker(@RequestBody Marker marker) throws JSONException {
        return marker;
    }
}