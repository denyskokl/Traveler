package com.sprsec.service.comment;

import com.sprsec.dao.comment.CommentDAO;
import com.sprsec.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDAO commentDAO;
    @Override
    public Comment saveComment(Comment comment) {
        return commentDAO.saveComment(comment);
    }

    @Override
    public List<Comment> getAllComments() {
        return commentDAO.getAllComments();
    }
}
