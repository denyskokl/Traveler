package com.sprsec.dao.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
        List<Route> userList = openSession().createQuery("from Route r where r.user = :user")
                .setParameter("user", user)
                .list();
        if (userList.size() > 0) {
            return userList;
        }
        return null;
    }

    @Override
    public Route getRoute(int id) {
        return (Route) openSession().get(Route.class, id);
    }

    @Override
    public void saveRoute(Route route) {
        openSession().saveOrUpdate(route);
    }
}
