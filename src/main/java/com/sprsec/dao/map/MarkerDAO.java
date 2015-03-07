package com.sprsec.dao.map;

import com.sprsec.model.Marker;

import java.util.List;

public interface MarkerDAO {

    public List<Marker> getAllMarkers();

    Marker saveMarker(Marker marker);

    int removeMarker(Marker marker);
}
