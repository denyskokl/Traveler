package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MarkerController {

    @Autowired
    private MarkerService markerService;

//    @RequestMapping(value = "/markers", method = RequestMethod.GET)
//    public Map<Integer, Marker> getMarkers() {
//        List<Marker> markers = markerService.getAllMarkers();
//        Map<Integer, Marker> markerMap = new HashMap<>();
//        for (Marker marker : markers) {
//            markerMap.put(marker.getMarkerId(), marker);
//        }
//        //todo як витягувати зразу мап
//        return markerMap;
//    }
//todo refactor!!!!!!
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