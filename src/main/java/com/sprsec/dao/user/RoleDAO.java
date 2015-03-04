package com.sprsec.dao.user;

import com.sprsec.model.Role;

import java.util.Set;

public interface RoleDAO {
	
	public Set<Role> getRole(String role);

}
