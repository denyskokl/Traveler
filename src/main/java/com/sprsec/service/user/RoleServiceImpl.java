package com.sprsec.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sprsec.dao.user.RoleDAO;
import com.sprsec.model.Role;

import java.util.Set;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private RoleDAO roleDAO;

	public Set<Role> getRole(String role) {
		return roleDAO.getRole(role);
	}

}