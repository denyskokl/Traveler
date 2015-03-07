package com.sprsec.controller;

import com.sprsec.model.Comment;
import com.sprsec.service.comment.CommentService;
import com.sprsec.service.map.MarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private MarkerService markerService;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String register() {
        return "comment/testOne";
    }
//    @RequestMapping(value = "/save_comment", method = RequestMethod.GET)
//    public String saveComment() {
//        commentService.saveComment(new Comment("com1", new User("serg","1111"), new Marker(32.067636,49.450412)));
//        return "comment/testOne";
//    }

    @RequestMapping(value = "/getAllComments", method = RequestMethod.GET)
    public ModelAndView getAllComments() {
        for (Comment com : commentService.getAllComments()) {
            System.out.println(com.getComment());
        }
        ModelAndView m = new ModelAndView("index");
        m.addObject(markerService.getAllMarkers());
        return m;
    }
}
