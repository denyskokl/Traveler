package com.sprsec.service.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;

import java.util.List;
import java.util.Set;

public interface RouteService {
    public List<Route> getRoutes();

    public Route getRoute(int id);

    public void addRoute(Route route);
}
