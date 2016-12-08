package com.sample.builders;

import com.sample.models.Pet;
import org.springframework.stereotype.Component;

@Component
public class PetBuilder {
    private Pet pet = new Pet("some-name", "some-disposition");

    public static PetBuilder createPet() {
        return new PetBuilder();
    }

    public PetBuilder withName(String name) {
        pet.setName(name);
        return this;
    }

    public PetBuilder withDisposition(String disposition) {
        pet.setDisposition(disposition);
        return this;
    }

    public Pet inMemory() {
        return pet;
    }
}