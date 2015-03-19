package com.sprsec.service.user;

import org.springframework.security.core.AuthenticationException;

public class UserInactiveException extends AuthenticationException {
    public UserInactiveException(String msg) {
        super(msg);
    }
}
