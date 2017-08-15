import React from 'react';
import {connect} from "./connect";
import PetSelector from "./pet_selector";
import SelectedPet from './selected_pet'
import ShowHideToggle from './show_hide_toggle'
import {selectedPetVisibilityStream} from "../domain/streams/selected_pet_visibility_stream";

const Application = ({selectedPetIsVisible}) => (
    <div>
        <PetSelector/>
        <ShowHideToggle/>
        {selectedPetIsVisible && <SelectedPet/>}
    </div>
);

export default connect(Application, {
    selectedPetIsVisible: selectedPetVisibilityStream
});