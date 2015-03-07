package com.sprsec.service.map;

import com.sprsec.model.Marker;

import java.util.List;

public interface MarkerService {

    public List<Marker> getAllMarkers();

    Marker removeMarker(double latitude, double longitude);

    Marker saveMarker(Marker marker);
}
