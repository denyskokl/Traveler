package com.sprsec.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "roles", catalog = "travel", uniqueConstraints = @UniqueConstraint(columnNames = { "role" }))
public class Role {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idRole;

    @Column(name = "role", unique = true, nullable = false)
    private String role;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "userRoles")
    private List<User> users = new ArrayList<>();

    public Role() {
    }

    public Role(String role, List<User> users) {
        this.role = role;
        this.users = users;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}