package com.sprsec.dao.user;

import com.sprsec.model.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private SessionFactory sessionFactory;

    private Session openSession() {
        return sessionFactory.getCurrentSession();
    }

    public User getUser(String login) {
        return (User) openSession().createQuery("from User u where u.login = :login")
                .setParameter("login", login)
                .uniqueResult();
    }

    @Override
    public void addUser(User user) {
        openSession().saveOrUpdate(user);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> getAllUsers() {
        return openSession().createCriteria(User.class).list();
    }

    @Override
    public User changeStatus(User user) {
        Query query = openSession().createQuery("update User u set u.userStatus = :userStatus where u.userId = :userId");
        query.setProperties(user)
                .executeUpdate();
        return (User) openSession().get(User.class, user.getUserId());
    }
}