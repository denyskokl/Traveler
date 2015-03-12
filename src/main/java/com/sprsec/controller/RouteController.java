package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.model.Route;
import com.sprsec.service.map.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class RouteController {

    @Autowired
    private RouteService routeService;

    @ResponseBody
    @RequestMapping(value = "/route", method = RequestMethod.POST)
    public Route saveMarkToRoute(@RequestBody Marker marker) {
        Route route = new Route();
        List<Marker> markerList = new ArrayList<>();
        route.setRouteId(1);
        markerList.add(marker);
        route.setMarkers(markerList);
        routeService.saveRoute(route);
        return routeService.getRoutes().get(0);
    }
}
