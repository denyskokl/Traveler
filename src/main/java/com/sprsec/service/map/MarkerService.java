package com.sprsec.service.map;

import com.sprsec.model.Marker;

import java.util.List;

public interface MarkerService {

    List<Marker> getAllMarkers();

    Marker saveMarker(Marker marker);

    int removeMarker(Marker marker);

    Marker getMarker(Marker marker);

    Marker getMarker(int markerId);

    List<Marker> getMarkersByCategory(int categoryId);
}