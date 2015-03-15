package com.sprsec.service.map;

import com.sprsec.model.Marker;

import java.util.List;

public interface MarkerService {

    public List<Marker> getAllMarkers();

    Marker saveMarker(Marker marker);

    int removeMarker(Marker marker);

    Marker getMarker(Marker marker);
}
