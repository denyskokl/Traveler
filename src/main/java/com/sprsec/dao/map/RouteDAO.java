package com.sprsec.dao.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;

import java.util.List;
import java.util.Set;

public interface RouteDAO {
    public List<Route> getRoutes(User user);

    public Route getRoute(int id);

    public void addRoute(Route route);
}
