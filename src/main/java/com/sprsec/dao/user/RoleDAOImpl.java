package com.sprsec.dao.user;

import com.sprsec.model.Role;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class RoleDAOImpl implements RoleDAO {

    @Autowired
    private SessionFactory sessionFactory;

    private Session openSession() {
        return sessionFactory.getCurrentSession();
    }

    public Set<Role> getRoles() {
        List<Role> userRole = openSession().createQuery("from Role").list();
        if (userRole.size() > 0)
            return new HashSet<>(userRole);
        else
            return null;
    }
}
