package com.sprsec.dao.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RouteDAOImpl implements RouteDAO {

    @Autowired
    private SessionFactory sessionFactory;

    private Session openSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Route> getRoutes(User user) {
         return openSession().createCriteria(Route.class).add(Restrictions.eq("user", user)).list();
    }

    @Override
    public Route getRoute(int id) {
        return (Route) openSession().get(Route.class, id);
    }

    @Override
    public void saveRoute(Route route) {
        openSession().saveOrUpdate(route);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Integer> getRoutesId(String username) {
        return openSession().createCriteria(Route.class, "route")
                .createCriteria("route.user", "user")
                .add(Restrictions.eq("user.username", username))
                .setProjection(Projections.property("route.routeId"))
                .list();
    }
}