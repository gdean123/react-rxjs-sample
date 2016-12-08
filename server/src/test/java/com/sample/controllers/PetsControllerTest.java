package com.sample.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.sample.models.Pet;
import com.sample.repositories.PetRepository;
import com.sample.support.ControllerTestBase;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import javax.inject.Inject;

import static com.sample.builders.PetBuilder.createPet;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

public class PetsControllerTest extends ControllerTestBase {
    @Mock private PetRepository petRepository;
    @Inject @InjectMocks private PetsController petsController;

    @Test
    public void get_returnsPetWithAGivenId() throws Exception {
        Pet speedy = createPet().withName("Speedy").withDisposition("Hyper").inMemory();
        given(petRepository.get(12)).willReturn(speedy);

        JsonNode json = get("/pets/12");

        assertThat(json.get("name").asText()).isEqualTo("Speedy");
        assertThat(json.get("disposition").asText()).isEqualTo("Hyper");
    }
}