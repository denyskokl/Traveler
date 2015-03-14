package com.sprsec.service.comment;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;

import java.util.List;

public interface CommentService {

    Comment saveComment(Comment comment);

    List<Comment> getAllComments();

    List<Comment> getCommentsByMark(Marker marker);
}
