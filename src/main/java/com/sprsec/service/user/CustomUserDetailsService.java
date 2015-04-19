package com.sprsec.service.user;

import com.sprsec.dao.user.UserDAO;
import com.sprsec.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service("userDetailsService")
@Transactional(readOnly = true)

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        com.sprsec.model.User domainUser = userDAO.getUser(username);
        if (!domainUser.getEnabled().equals(true)) {
            throw new UserInactiveException("User is not active");
        }


        return new User(
                domainUser.getUsername(),
                domainUser.getPassword(),
                domainUser.getEnabled(),
                true,
                true,
                true,
                getUserAuthorities(domainUser.getUserRoles())
        );
    }

    private List<GrantedAuthority> getUserAuthorities(Set<Role> roles) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getRole()));
        }
        return new ArrayList<>(authorities);
    }
}