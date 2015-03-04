package com.sprsec.service.user;

import com.sprsec.dao.user.EnumRoles;
import com.sprsec.model.Role;
import org.springframework.transaction.annotation.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.User;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	public User getUser(String login) {
		return userDAO.getUser(login);
	}

	@Override
	public void addUser(User user) {
        Set<Role> roles = new HashSet<>();
        roles.add(new Role(EnumRoles.ROLE_USER.toString(), user));
        user.setUserRoles(roles);
        userDAO.addUser(user);
	}
}
