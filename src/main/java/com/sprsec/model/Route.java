package com.sprsec.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routes", catalog = "w")
public class Route {

    @Id
    @Column(name = "router_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int routeId;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "routes_markers", catalog = "w", joinColumns = {
            @JoinColumn(name = "router_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "marker_id", nullable = false, updatable = false) })
    private List<Marker> markers = new ArrayList<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public int getRouteId() {
        return routeId;
    }

    public void setRouteId(int routeId) {
        this.routeId = routeId;
    }

    public List<Marker> getMarkers() {
        return markers;
    }

    public void setMarkers(List<Marker> markers) {
        this.markers = markers;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
