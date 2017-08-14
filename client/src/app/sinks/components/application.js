import React from 'react';
import {connect} from "../../support/connect";
import PetSelector from "../../sinks/components/pet_selector";
import SelectedPet from '../../sinks/components/selected_pet'
import ShowHideToggle from '../../sinks/components/show_hide_toggle'
import {selectedPetVisibilityStream} from "../../streams/selected_pet_visibility_stream";

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