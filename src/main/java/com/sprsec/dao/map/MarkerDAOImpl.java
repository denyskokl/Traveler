package com.sprsec.dao.map;

import com.sprsec.model.Marker;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
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

    // todo:2
    @Override
    public int removeMarker(Marker marker) {
        Query query = getSession().createQuery("delete from Marker m where m.latitude = :latitude and m.longitude = :longitude ");
        query.setProperties(marker);
        return query.executeUpdate();
//        Criteria criteria = getSession().createCriteria(Marker.class);
//        criteria
//                .add(Restrictions.eq("latitude", marker.getLatitude()))
//                .add(Restrictions.eq("longitude", marker.getLongitude())).uniqueResult();
//        getSession().delete(criteria);
//        return 0; ?????
    }

    //todo: 3
    @Override
    public Marker getMarker(Marker marker) {
        Query query = getSession().createQuery("from Marker m where m.latitude = :latitude and m.longitude = :longitude ");
        query.setProperties(marker);
        return (Marker) query.uniqueResult();
//        Criteria cr = getSession().createCriteria(Marker.class);
//        cr.add(Restrictions.eq("latitude", "latitude"));
//        cr.add(Restrictions.eq("longitude", "longitude"));
//        cr.add(Restrictions.eq("marker", "marker"));
//        return (Marker) cr.uniqueResult();
    }

    @Override
    public Marker getMark(int markerId) {
        return (Marker) getSession().get(Marker.class, markerId);
    }

    public List<Marker> getMarkersByCategory(int categoryId) {
        Criteria crit = getSession().createCriteria(Marker.class);
        crit.createAlias("categories", "category_markers");
        crit.add(Restrictions.eq("category_markers.categoryId", categoryId));
        return crit.list();
    }
}