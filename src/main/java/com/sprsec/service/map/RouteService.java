package com.sprsec.service.map;

import com.sprsec.model.Route;

import java.util.List;

public interface RouteService {
    public List<Route> getRoutes();

    public Route getRoute(int id);

    public void saveOrUpdateRoute(int routeId, int markerId);

    List<Integer> getRoutesId();

    void createRouteByUserName(String name);
}