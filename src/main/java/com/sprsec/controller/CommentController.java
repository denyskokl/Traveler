package com.sprsec.controller;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;
import com.sprsec.service.comment.CommentService;
import com.sprsec.service.map.MarkerService;
import com.sprsec.service.map.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private MarkerService markerService;

    @Autowired
    private RouteService routeService;

    @RequestMapping(value = "/comment", method = RequestMethod.POST)
    public ResponseEntity saveComment(@RequestBody Comment comment) {
        commentService.saveComment(comment);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "/getAllComments", method = RequestMethod.GET)
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }


    @ResponseBody
    @RequestMapping(value = "/remove_comment", method = RequestMethod.POST)
    public Marker removeCommentByAdmin(@RequestBody Comment comment) {
        commentService.deleteComment(comment);
        return markerService.getMarker(comment.getMarker());
    }
}