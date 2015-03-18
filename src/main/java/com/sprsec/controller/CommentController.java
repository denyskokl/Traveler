package com.sprsec.controller;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;
import com.sprsec.model.Route;
import com.sprsec.service.comment.CommentService;
import com.sprsec.service.map.MarkerService;
import com.sprsec.service.map.RouteService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private MarkerService markerService;


    @Autowired
    private RouteService routeService;

    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    @RequestMapping(value = "/comment", method = RequestMethod.POST)
    public List<Comment> saveComment(@RequestBody Comment comment) {
        commentService.saveComment(comment);
        return commentService.getCommentsByMark(comment.getMarker());
    }

    @ResponseBody
    @RequestMapping(value = "/getAllComments", method = RequestMethod.GET)
    public List<Comment> getAllComments() throws JSONException {
        return commentService.getAllComments();
    }

    @ResponseBody
    @RequestMapping(value = "/getAllRoute", method = RequestMethod.POST)
    public Route getRoute(@RequestBody Marker marker) throws JSONException {
        return routeService.getRoutes().get(0);
    }

    @ResponseBody
    @RequestMapping(value = "/remove_comment", method = RequestMethod.POST)
    public Marker removeCommentByAdmin(@RequestBody Comment comment) {
        commentService.deleteComment(comment);
        return markerService.getMarker(comment.getMarker());
    }
}
