package com.sprsec.service.map;

import com.google.gson.Gson;

public class TestUtil {

    public static String objectToJson(Object obj) {
        return new Gson().toJson(obj);
    }
}
