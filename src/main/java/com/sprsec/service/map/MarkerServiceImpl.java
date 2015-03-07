package com.sprsec.service.map;

import com.sprsec.dao.map.MarkerDAO;
import com.sprsec.model.Marker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MarkerServiceImpl implements MarkerService {

    @Autowired
    private MarkerDAO markerDAO;

    @Override
    public List<Marker> getAllMarkers() {
        return markerDAO.getAllMarkers();
    }

    @Override
    public Marker removeMarker(double latitude, double longitude) {
        return markerDAO.removeMarker(latitude,longitude);
    }

    @Override
    public Marker saveMarker(Marker marker) {
        return markerDAO.saveMarker(marker);
    }
}
