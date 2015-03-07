package com.sprsec.dao.comment;

import com.sprsec.model.Comment;

import java.util.List;

public interface CommentDAO {
    Comment saveComment(Comment comment);

    List<Comment> getAllComments();
}
