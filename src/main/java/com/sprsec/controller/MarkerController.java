package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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

    @RequestMapping(value = "/save_marker", method = RequestMethod.POST, produces = "application/json")
    public Marker saveMarker(@RequestBody Marker marker) throws JSONException {
        markerService.saveMarker(marker);
        return marker;
    }

    @RequestMapping(value = "/remove_marker", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Marker> removeMarker(@RequestBody Marker marker) throws JSONException {
        if (markerService.removeMarker(marker) > 0) {
            return new ResponseEntity<>(marker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(marker, HttpStatus.NO_CONTENT);
        }
    }
}