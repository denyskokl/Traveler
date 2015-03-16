package com.sprsec.dao.user;

import com.sprsec.model.User;

import java.util.List;

public interface UserDAO {
	
	public User getUser(String login);

	public void addUser(User user);

	List<User> getAllUsers();

	User getStatusByUser(User user);
}
