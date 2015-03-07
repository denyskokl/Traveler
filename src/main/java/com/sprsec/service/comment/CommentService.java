package com.sprsec.service.comment;

import com.sprsec.model.Comment;

import java.util.List;

public interface CommentService {

    Comment saveComment(Comment comment);

    List<Comment> getAllComments();
}
