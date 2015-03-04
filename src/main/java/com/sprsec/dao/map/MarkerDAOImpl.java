package com.sprsec.dao.map;

import com.sprsec.model.Marker;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MarkerDAOImpl implements MarkerDAO{

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Marker> getAllMarkers() {
        return getSession().createCriteria(Marker.class).list();
    }
}
