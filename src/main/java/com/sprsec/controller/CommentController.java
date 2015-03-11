package com.sprsec.controller;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;
import com.sprsec.model.Route;
import com.sprsec.service.comment.CommentService;
import com.sprsec.service.map.MarkerService;
import com.sprsec.service.map.RouteService;
import com.sprsec.service.user.UserService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private UserService userService;

    @Autowired
    private MarkerService markerService;

    @Autowired
    private RouteService routeService;

    @RequestMapping(value = "/comment", method = RequestMethod.POST)
    public Comment saveComment(@RequestBody Comment comment) {
        commentService.saveComment(comment);
        return comment;
    }

    @ResponseBody
    @RequestMapping(value = "/getAllComments", method = RequestMethod.GET)
    public List<Comment> getAllComments() throws JSONException {
        return commentService.getAllComments();
    }

    @ResponseBody
    @RequestMapping(value = "/getAllRoute", method = RequestMethod.POST)
    public Route getRoute(@RequestBody Marker marker) throws JSONException {
        System.out.println(marker);
        return routeService.getRoutes().get(0);
    }
}
