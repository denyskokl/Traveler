package com.sprsec.service.map;

import com.sprsec.dao.map.RouteDAO;
import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

    @Autowired
    private RouteDAO routeDAO;

    @Autowired
    private UserDAO userDAO;


    @Override
    public List<Route> getRoutes() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        return routeDAO.getRoutes(userDAO.getUser(name));
    }

    @Override
    public Route getRoute(int id) {
        return routeDAO.getRoute(id);
    }

    @Override
    public Route saveOrUpdateRoute(Route route) {
        Route nextRoute = routeDAO.getRoute(route.getRouteId());
        nextRoute.getMarkers().addAll(route.getMarkers());

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userDAO.getUser(auth.getName());
        nextRoute.setUser(user);
        routeDAO.saveRoute(nextRoute);

        return nextRoute;
    }
}
