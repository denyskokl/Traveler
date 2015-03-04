package com.sprsec.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "markers", catalog = "w")
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

    public Marker() {
    }

    public Marker(Double latitude, Double longitude, String address, String message) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.message = message;
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "markers")
    @JsonIgnore
    private List<Route> route = new ArrayList<>();

    public List<Route> getRoute() {
        return route;
    }

    public void setRoute(List<Route> route) {
        this.route = route;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public int getMarkerId() {
        return markerId;
    }

    public void setMarkerId(int markerId) {
        this.markerId = markerId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
