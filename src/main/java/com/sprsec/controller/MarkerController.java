package com.sprsec.controller;

import com.sprsec.model.Category;
import com.sprsec.model.Marker;
import com.sprsec.service.map.CategoryService;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
public class MarkerController {

    @Autowired
    private MarkerService markerService;

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(value = "/markers", method = RequestMethod.GET)
    public Map<Integer, Marker> getMarkers() {
        List<Marker> markers = markerService.getAllMarkers();
        Map<Integer, Marker> markerMap = new HashMap<>();
        for (Marker marker : markers) {
            markerMap.put(marker.getMarkerId(), marker);
        }
        return markerMap;
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

    @RequestMapping(value = "/categories", method = RequestMethod.POST)
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @RequestMapping(value = "/markersByCategory", method = RequestMethod.POST)
    public List<Marker> getMarkersByCategory(@RequestParam int categoryId) {
        return markerService.getMarkersByCategory(categoryId);
    }
}