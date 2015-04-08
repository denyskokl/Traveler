package com.sprsec.controller;

import com.sprsec.model.User;
import com.sprsec.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    public static final SimpleDateFormat dt = new SimpleDateFormat("yyyy-mm-dd");

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String register() {
        return "frames/registration";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView addNewUser(
            @RequestParam("login") String login,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("birthday") String birthday,
            @RequestParam("nickname") String nickname,
            @RequestParam("sex") String sex) throws ParseException {
        
        Date date = dt.parse(birthday);
        ModelAndView model = new ModelAndView();
        User user = new User(login, password,email,date,nickname,sex);
        try {
            userService.addUser(user);
            model.setViewName("redirect:/");
        } catch (Exception e) {

            model.addObject("error", "User is already exist");
            model.setViewName("frames/registration");
        }
        return model;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(@RequestParam(value = "error", required = false) String error) {
        ModelAndView model = new ModelAndView();
        if (error != null) {
            model.addObject("error", error);
        }
        model.setViewName("/frames/login");
        return model;
    }
}