package com.sample.controllers;

import com.sample.models.Pet;
import com.sample.repositories.PetRepository;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
class PetsController {
    @Inject private PetRepository petRepository;

    @RequestMapping(value = "/pets/{id}", method = RequestMethod.GET)
    Pet get(@PathVariable("id") int id) {
        return petRepository.get(id);
    }
}