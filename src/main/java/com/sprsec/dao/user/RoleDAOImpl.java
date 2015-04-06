package com.sprsec.dao.user;

import com.sprsec.model.Role;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RoleDAOImpl implements RoleDAO {

    @Autowired
    private SessionFactory sessionFactory;

    private Session openSession() {
        return sessionFactory.getCurrentSession();
    }
    @SuppressWarnings("unchecked")
    public List<Role> getRoles() {
        return openSession().createCriteria(Role.class).list();
    }
}