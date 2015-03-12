package com.sprsec.service.map;

import com.sprsec.dao.map.MarkerDAO;
import com.sprsec.dao.map.RouteDAO;
import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.Marker;
import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class RouteServiceImpl implements RouteService {

    @Autowired
    private RouteDAO routeDAO;

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private MarkerDAO markerDAO;

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
    public void saveRoute(Route route) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        User user = userDAO.getUser(name);
        route.setUser(user);
        List<Marker> markerList = new ArrayList<>();
        markerList.add(route.getMarkers().get(0));
        route.setMarkers(markerList);
        routeDAO.saveRoute(route);
    }
}
