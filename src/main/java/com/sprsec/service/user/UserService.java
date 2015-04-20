package com.sprsec.service.user;

import com.sprsec.model.User;

import java.util.Date;
import java.util.List;

public interface UserService {

    public User getUser(String username);

    public void addUser(User user);

    List<User> getAllUsers();

    User changeStatus(User user);

    User getAllInfAuthUser();

    void updateUser(String email, String birthday, String nickname, String sex);
}