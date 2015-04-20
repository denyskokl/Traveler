package com.sprsec.controller;

import com.sprsec.model.Route;
import com.sprsec.service.map.RouteService;
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

    @ResponseBody
    @RequestMapping(value = "/routeByMarker", method = RequestMethod.POST)
    public Route saveMarkToRoute(@RequestParam int routeId, @RequestParam int markerId) {
        routeService.saveOrUpdateRoute(routeId, markerId);
        return routeService.getRoute(routeId);

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

    @ResponseBody
    @RequestMapping(value = "/create_route", method = RequestMethod.POST)
    public List<Integer> createNewRoute() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        routeService.createRouteByUserName(auth.getName());
        return routeService.getRoutesId();
    }
}