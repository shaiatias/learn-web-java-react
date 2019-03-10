package com.example.demo.domain;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class User {
    @Id
    public ObjectId _id;
    public String email;
    public String password;

    public User() {}

    public User(ObjectId _id, String email, String password) {
        this._id = _id;
        this.email = email;
        this.password = password;
    }

    public void set_id(ObjectId _id) { this._id = _id; }
    public String get_id() { return this._id.toHexString(); }
    public void setPassword(String password) { this.password = password; }
    public String getPassword() { return password; }
    public void setEmail(String email) { this.email = email; }
    public String getEmail() { return email; }
}