package com.sprsec.dao.map;

import com.sprsec.model.Marker;

import java.util.List;

public interface MarkerDAO {

    public List<Marker> getAllMarkers();

    Marker removeMarker(double latitude, double longitude);

    Marker saveMarker(Marker marker);
}
