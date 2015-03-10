package com.sprsec.service.comment;

import com.sprsec.dao.comment.CommentDAO;
import com.sprsec.dao.map.MarkerDAO;
import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.Comment;
import com.sprsec.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDAO commentDAO;

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private MarkerDAO markerDAO;

    @Override
    public Comment saveComment(Comment comment) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        //todo чи можна так зберегти
        comment.setUser(userDAO.getUser(name));
        comment.setMarker(markerDAO.getMark(comment.getMarker()));
        return commentDAO.saveComment(comment);
    }

    @Override
    public List<Comment> getAllComments() {
        return commentDAO.getAllComments();
    }
}
