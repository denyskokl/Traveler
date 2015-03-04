package com.sprsec.dao.user;

import java.util.List;

import com.sprsec.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.sprsec.model.User;

@Repository
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session openSession() {
		return sessionFactory.getCurrentSession();
	}

	public User getUser(String login) {
		List<User> userList;
		Query query = openSession().createQuery("from User u where u.login = :login");
		query.setParameter("login", login);
		userList = query.list();
		if (userList.size() > 0) {
            return userList.get(0);
        } else {
            return null;
        }
	}

	@Override
	public void addUser(User user) {
        Session session = sessionFactory.openSession();
		session.beginTransaction();
        session.saveOrUpdate(user);
        for (Role role: user.getUserRoles()) {
            session.saveOrUpdate(role);
        }
        session.getTransaction().commit();
        session.close();
	}
}
