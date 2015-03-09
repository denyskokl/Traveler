package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.model.User;
import com.sprsec.service.map.MarkerService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @RequestMapping(value = "/bla", method = RequestMethod.GET, produces = "application/json")
    public User returnIdUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName(); //get logged in username
        User user = new User();
        user.setLogin(name);
        return user;

    }


}