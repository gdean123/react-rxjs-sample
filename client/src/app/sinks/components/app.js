import React from 'react';

import PetSelector from './pet_selector'
import SelectedPet from './selected_pet'

const App = ({nextStream, previousStream, selectedPetIndexStream, didReceivePet}) => (
    <div>
        <PetSelector nextStream={nextStream} previousStream={previousStream} selectedPetIndexStream={selectedPetIndexStream}/>
        <SelectedPet didReceivePet={didReceivePet}/>
    </div>
);

export default App;