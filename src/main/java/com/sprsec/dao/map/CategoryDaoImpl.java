package com.sprsec.dao.map;

import com.sprsec.model.Category;
import com.sprsec.model.Marker;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class CategoryDAOImpl implements CategoryDAO{

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Category> getCategories() {
        return getSession().createCriteria(Category.class).list();



    }
}