package com.sprsec.controller;

import com.sprsec.model.User;
import com.sprsec.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(value = "/user_profile", method = RequestMethod.POST)
    public User showUserProfile() {

        return userService.getAllInfAuthUser();
    }

    @RequestMapping(value = "/user_account", method = RequestMethod.GET)
    public String userList() {
        return "/content/contentAccount";
    }
}
