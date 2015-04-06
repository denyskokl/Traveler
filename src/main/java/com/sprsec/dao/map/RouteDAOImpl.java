package com.sprsec.dao.map;

import com.sprsec.model.Route;
import com.sprsec.model.User;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
//        List<Route> routeList = openSession().createQuery("from Route r where r.user = :user")
//                .setParameter("user", user)
//                .list();
//        if (routeList.size() > 0) {
//            return routeList;
//        }
//        return null;
        Criteria criteria = openSession().createCriteria(Route.class);
        criteria.add(Restrictions.eq("user", user));
        return criteria.list();
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
    public List<Integer> getRoutesId(String login) {
        return openSession().createQuery("SELECT routeId FROM Route r where r.user.login = :login")
                .setParameter("login", login).list();
     //????????
    }
}