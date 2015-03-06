package com.sprsec.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users", catalog = "travel")
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUser;

    @Column(name = "login")
	private String login;

	@Column(name = "password")
	private String password;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "users_roles", catalog = "travel", joinColumns = {
            @JoinColumn(name = "user_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "role_id", nullable = false, updatable = false) })
	private Set<Role> userRoles = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
    private List<Route> routes = new ArrayList<>();

    public User() {
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<Role> userRoles) {
		this.userRoles = userRoles;
	}
}
