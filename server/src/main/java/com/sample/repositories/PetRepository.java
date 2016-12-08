package com.sample.repositories;

import com.sample.models.Pet;
import org.springframework.stereotype.Component;

@Component
public class PetRepository {
    public Pet get(int id) {
        Pet[] pets = {
            new Pet("Sox", "Happy"),
            new Pet("Pillowfight", "Growly"),
            new Pet("James", "Mild")
        };

        return pets[id % pets.length];
    }
}