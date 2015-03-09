package com.sprsec.controller;

import com.sprsec.model.Comment;
import com.sprsec.service.comment.CommentService;
import com.sprsec.service.map.MarkerService;
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

    @RequestMapping(value = "/comment", method = RequestMethod.GET)
    public String saveComment(@RequestBody Comment comment) {
//                commentService.saveComment(new Comment("1222 pidarasa", userService.getUser(user.getLogin()),
//                markerService.getMark(marker.getLatitude(), marker.getLongitude())));
        System.out.println(comment);
        return "comment/testOne";
    }

    @ResponseBody
    @RequestMapping(value = "/getAllComments", method = RequestMethod.GET)
    public List<Comment> getAllComments() throws JSONException {
        return commentService.getAllComments();
    }


}
