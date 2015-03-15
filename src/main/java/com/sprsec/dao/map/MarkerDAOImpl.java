package com.sprsec.dao.map;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MarkerDAOImpl implements MarkerDAO {

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

    @Override
    public Marker saveMarker(Marker marker) {
        getSession().saveOrUpdate(marker);
        return marker;
    }

    @Override
    public int removeMarker(Marker marker) {
        Query query = getSession().createQuery("delete from Marker m where m.latitude = :latitude and m.longitude = :longitude ");
        query.setProperties(marker);
        return query.executeUpdate();
    }

    @Override
    public Marker getMark(Marker marker) {
        Query query = getSession().createQuery("from Marker m where m.latitude = :latitude and m.longitude = :longitude ");
        query.setProperties(marker);
        return (Marker) query.uniqueResult();
    }
}
