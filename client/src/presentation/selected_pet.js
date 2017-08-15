import React from 'react';
import {didReceivePetStream} from "../domain/sources/network";
import {connect} from "./connect";

const SelectedPet = ({pet}) => (
    <div>
        <h1>Selected Pet</h1>
        <p>Name: {pet.name}</p>
        <p>Disposition: {pet.disposition}</p>
    </div>
);

export default connect(SelectedPet, {
    pet: didReceivePetStream
});