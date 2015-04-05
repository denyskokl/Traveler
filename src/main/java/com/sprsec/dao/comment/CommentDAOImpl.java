package com.sprsec.dao.comment;

import com.sprsec.model.Comment;
import com.sprsec.model.Marker;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
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
        getSession().save(comment);
        return comment;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Comment> getAllComments() {
        return getSession().createCriteria(Comment.class).list();
    }

    @Override
    @SuppressWarnings("unchecked")
    //todo : criteria
    public List<Comment> getCommentsByMark(Marker marker) {
//        Query query = getSession().createQuery("from Comment m where m.marker = :marker");
//        query.setParameter("marker", marker);
//        return query.list();
        Criteria criteria = getSession().createCriteria(Comment.class);
        criteria.add(Restrictions.eq("marker", marker));
        return criteria.list();
    }

    @Override
    //todo : too
    public void deleteComment(Comment comment) {
        Query query = getSession().createQuery("delete from Comment m where m.commentId = :commentId");
        query.setParameter("commentId", comment.getCommentId());
        query.executeUpdate();
//        Criteria criteria = getSession().createCriteria(Comment.class);
//        criteria.add(Restrictions.eq("comment_id", comment.getCommentId())).uniqueResult();
//        getSession().delete(criteria);

    }
}