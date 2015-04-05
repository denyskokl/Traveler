package com.sprsec.service.map;

import com.sprsec.dao.map.CategoryDAO1;
import com.sprsec.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryDAO1 categoryDAO1;

    @Override
    public List<Category> getCategories() {
        return categoryDAO1.getCategories();
    }
}