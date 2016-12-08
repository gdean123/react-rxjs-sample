package com.sample.models;

public class Pet {
    private String name;
    private String disposition;

    public Pet(String name, String disposition) {
        this.name = name;
        this.disposition = disposition;
    }

    public String getName() {
        return name;
    }

    public String getDisposition() {
        return disposition;
    }

    public void setDisposition(String disposition) {
        this.disposition = disposition;
    }

    public void setName(String name) {
        this.name = name;
    }
}