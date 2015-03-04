package com.sprsec.service.user;

import com.sprsec.model.Role;

import java.util.Set;

public interface RoleService {
	
	public Set<Role> getRole(String role);

}
