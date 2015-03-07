package com.sprsec.dao.comment;

import com.sprsec.model.Comment;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class CommentDAOImpl implements CommentDAO {

    @Autowired
    private SessionFactory sessionFactory;

    private Session getSession() {
        return sessionFactory.getCurrentSession();
    }

    @Override
    public Comment saveComment(Comment comment) {
        getSession().saveOrUpdate(comment);
        return comment;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Comment> getAllComments() {
        return getSession().createCriteria(Comment.class).list();
    }
}
