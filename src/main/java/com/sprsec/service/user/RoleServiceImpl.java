package com.sprsec.service.user;

import com.sprsec.dao.user.RoleDAO;
import com.sprsec.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDAO roleDAO;


    @Override
    public Role getRole(int idRole) {
        return roleDAO.getRole(idRole);
    }
}