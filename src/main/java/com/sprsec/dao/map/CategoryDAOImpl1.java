package com.sprsec.dao.map;

import com.sprsec.model.Category;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDAOImpl1 implements CategoryDAO1 {

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Category> getCategories() {
        return getSession().createQuery("from Category").list();
//        return getSession().createCriteria(Category.class).list();
    }
}
