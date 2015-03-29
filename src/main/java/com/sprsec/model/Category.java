//package com.sprsec.model;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "category", catalog = "travel")
//public class Category {
//
//    @Id
//    @Column(name = "category_id")
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private int categoryId;
//
//
//    @Column(name = "category")
//    private String category;
//
//    @Column(name = "photo")
//    private String photo;
//
////    @JsonBackReference
////    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "categories")
////    private List<Marker> markersList = new ArrayList<>();
//
//    public Category() {
//    }
//
//    public Category(String category, String photo) {
//        this.category = category;
//        this.photo = photo;
//    }
//
//
//    public int getCategoryId() {
//        return categoryId;
//    }
//
//    public void setCategoryId(int categoryId) {
//        this.categoryId = categoryId;
//    }
//
//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }
//
//    public String getPhoto() {
//        return photo;
//    }
//
//    public void setPhoto(String photo) {
//        this.photo = photo;
//    }
//
////    public List<Marker> getMarkersList() {
////        return markersList;
////    }
////
////    public void setMarkersList(List<Marker> markersList) {
////        this.markersList = markersList;
////    }
//
//}
