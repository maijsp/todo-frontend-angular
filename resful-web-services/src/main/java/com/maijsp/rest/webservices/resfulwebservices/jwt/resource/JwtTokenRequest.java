package com.maijsp.rest.webservices.resfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYyODYwNzg3OCwiaWF0IjoxNjI4MDAzMDc4fQ.C95ic_1lWQi74Z4eXZPibjeApW34KdEueE6k5F6UGlPGaW2GRhf50KxybBVdhCLv1oTy7udc092_Imw56h3Fgw"
//}

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
