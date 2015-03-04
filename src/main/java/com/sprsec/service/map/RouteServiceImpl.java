package com.sprsec.service.map;

import com.sprsec.dao.map.RouteDAO;
import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Transactional
public class RouteServiceImpl implements RouteService{

    @Autowired
    private RouteDAO routeDAO;

    @Override
    public Set<Route> getRoutes(User user) {
        return routeDAO.getRoutes(user);
    }

    @Override
    public Route getRoute(int id) {
        return routeDAO.getRoute(id);
    }

    @Override
    public void addRoute(Route route) {
        routeDAO.addRoute(route);
    }
}
