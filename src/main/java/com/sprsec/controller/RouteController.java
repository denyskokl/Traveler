package com.sprsec.controller;

import com.sprsec.model.Marker;
import com.sprsec.model.Route;
import com.sprsec.service.map.MarkerService;
import com.sprsec.service.map.RouteService;
import com.sprsec.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class RouteController {

    @Autowired
    private RouteService routeService;

    @Autowired
    private MarkerService markerService;

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(value = "/routeByMarker", method = RequestMethod.POST)
    public Route saveMarkToRoute(@RequestParam int routeId,@RequestParam int markerId) {
        Route route;
        if (routeId < 0) {
            route = new Route();
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String name = auth.getName();
            route.setUser(userService.getUser(name));
        } else {
            route = routeService.getRoute(routeId);
        }

        Marker marker = markerService.getMarker(markerId);
        route.getMarkers().add(marker);
        routeService.saveOrUpdateRoute(route);
        return route;
    }

    @ResponseBody
    @RequestMapping(value = "/routes", method = RequestMethod.POST)
    public List<Integer> getRoutesId() {
        return routeService.getRoutesId();
    }

    @ResponseBody
    @RequestMapping(value = "/route", method = RequestMethod.POST)
    public Route saveMarkToRoute(@RequestParam int routeId) {
        return routeService.getRoute(routeId);
    }
}