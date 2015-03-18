package com.sprsec.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "markers", catalog = "travel")
public class Marker {


    @Id
    @Column(name = "marker_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int markerId;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "address")
    private String address;

    @Column(name = "message")
    private String message;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "markers")
    private List<Route> routes = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "marker", cascade={CascadeType.PERSIST, CascadeType.REMOVE})
    @org.hibernate.annotations.Cascade( {org.hibernate.annotations.CascadeType.SAVE_UPDATE})
    private List<Comment> comments = new ArrayList<>();

    public Marker() {
    }

    public Marker(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Marker(Double latitude, Double longitude, String address, String message) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.message = message;
    }

    public int getMarkerId() {
        return markerId;
    }

    public void setMarkerId(int markerId) {
        this.markerId = markerId;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Marker marker = (Marker) o;

        if (markerId != marker.markerId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return markerId;
    }
}
