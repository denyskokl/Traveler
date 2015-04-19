package com.sprsec.service.user;

import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.Role;
import com.sprsec.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private RoleService roleService;

    public User getUser(String username) {
        return userDAO.getUser(username);
    }

    @Override
    public void addUser(User user) {
        Set<Role> roles = new HashSet<>();
        roles.add(roleService.getRole(2));
        user.setUserRoles(roles);
        Date date = new java.util.Date();
        user.setDateReg(new Timestamp(date.getTime()));
        user.setEnabled(true);
        userDAO.addUser(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    @Override
    public User changeStatus(User user) {
        return userDAO.changeStatus(user);
    }

    @Override
    public User getAllInfAuthUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return userDAO.getUser(username);
    }

    @Override
    public void updateUser(String email, Date date, String nickname, String sex) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String userName = auth.getName();
        User user = userDAO.getUser(userName);
        user.setEmail(email);
        user.setBirthday(date);
        user.setNickname(nickname);
        user.setSex(sex);
        userDAO.updateUser(user);
    }
}