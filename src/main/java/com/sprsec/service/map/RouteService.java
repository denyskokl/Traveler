package com.sprsec.service.map;

import com.sprsec.model.Route;

import java.util.List;

public interface RouteService {
    public List<Route> getRoutes();

    public Route getRoute(int id);

    public void saveOrUpdateRoute(Route route);
}
