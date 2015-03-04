package com.sprsec.controller;

import com.sprsec.dao.user.EnumRoles;
import com.sprsec.model.Role;
import com.sprsec.model.User;
import com.sprsec.service.user.RoleService;
import com.sprsec.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.Set;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String register(HttpServletRequest request, ModelMap model) {
//        model.addAttribute("user");
        return "frames/registration";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String addNewUser(
            @RequestParam("login") String login,
            @RequestParam("password") String password) {

        User user = new User();
        user.setLogin(login);
        user.setPassword(password);

        addUser(user);
        return "redirect:/";
    }

    private void addUser(User user) {
        Set<Role> roles = new HashSet<>();
        Role role = new Role();
        role.setRole(EnumRoles.ROLE_USER.toString());
        role.setUser(user);
        roles.add(role);
        user.setUserRoles(roles);
        userService.addUser(user);
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "/frames/login";
    }
}
