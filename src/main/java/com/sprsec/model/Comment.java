package com.sprsec.model;

import javax.persistence.*;

@Entity
@Table(name = "comments", catalog = "travel")
public class Comment {

    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int commentId;


    @Column(name = "comment")
    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "marker_id", nullable = false)
    private Marker marker;

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Marker getMarker() {
        return marker;
    }

    public void setMarker(Marker marker) {
        this.marker = marker;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
