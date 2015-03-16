package com.sprsec.controller;

import com.sprsec.model.User;
import com.sprsec.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class AdminController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/bla")
    public String getStartPage() {
        return "content/adminManagement";
    }

    @ResponseBody
    @RequestMapping(value = "/admin_list", method = RequestMethod.POST)
    private List<User> userList() {
        return userService.getAllUsers();
    }

    @ResponseBody
    @RequestMapping(value = "/admin_user_status", method = RequestMethod.POST)
    private User changeStatus(@RequestBody User user) {

        return userService.getStatusByUser(user);
    }

}
