package com.sprsec.dao.comment;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;

import java.util.List;

public interface CommentDAO {

    Comment saveComment(Comment comment);

    List<Comment> getAllComments();

    List<Comment> getCommentsByMark(Marker marker);

    void deleteComment(Comment comment);
}