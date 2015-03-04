package com.sprsec.dao.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class RouteDAOImpl implements RouteDAO{

    @Autowired
    private SessionFactory sessionFactory;

    private Session openSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public Set<Route> getRoutes(User user) {
        List<Route> userList;
        Query query = openSession().createQuery("from Route r where r.user = :user");
        query.setParameter("user", user);
        userList = query.list();
        if (userList.size() > 0) {
            return new HashSet<>(userList);
        } else {
            return null;
        }
    }

    @Override
    public Route getRoute(int id) {
        List<Route> userList;
        Query query = openSession().createQuery("from Route r where r.routeId = :routeId");
        query.setParameter("routeId", id);
        userList = query.list();
        if (userList.size() > 0) {
            return userList.get(0);
        } else {
            return null;
        }
    }

    @Override
    public void addRoute(Route route) {

    }
}
