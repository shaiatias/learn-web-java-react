package com.example.demo.domain;

public class PaymentRequest {

    private String name;
    private String email;
    private String country;
    private String state;
    private String zip;
    private String cc;
    private int expYear;
    private int expMonth;
    private String cvv;

    public PaymentRequest() {
    }

    public PaymentRequest(String name, String email, String country, String state, String zip, String cc, int expYear, int expMonth, String cvv) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.state = state;
        this.zip = zip;
        this.cc = cc;
        this.expYear = expYear;
        this.expMonth = expMonth;
        this.cvv = cvv;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCc() {
        return cc;
    }

    public void setCc(String cc) {
        this.cc = cc;
    }

    public int getExpYear() {
        return expYear;
    }

    public void setExpYear(int expYear) {
        this.expYear = expYear;
    }

    public int getExpMonth() {
        return expMonth;
    }

    public void setExpMonth(int expMonth) {
        this.expMonth = expMonth;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    @Override
    public String toString() {
        return "PaymentRequest{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", country='" + country + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                ", cc='" + cc + '\'' +
                ", expYear=" + expYear +
                ", expMonth=" + expMonth +
                ", cvv='" + cvv + '\'' +
                '}';
    }
}
