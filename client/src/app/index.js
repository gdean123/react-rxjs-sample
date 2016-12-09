import React from 'react';
import ReactDOM from 'react-dom';

import {AppFactory} from './sinks/components/app';
import {createDidReceivePet} from './sources/network';
import {createNextStream, createPreviousStream} from './sources/intents'
import {createSelectedPetIndexStream} from './streams/selected_pet_index_stream';
import {FetchPetSink} from './sinks/network/fetch_pet_sink'
import {PetSelectorFactory} from './sinks/components/pet_selector'
import {SelectedPetFactory} from './sinks/components/selected_pet'

const nextStream = createNextStream();
const previousStream = createPreviousStream();
const didReceivePet = createDidReceivePet();
const selectedPetIndexStream = createSelectedPetIndexStream(nextStream, previousStream);

const PetSelector = React.createElement(PetSelectorFactory, {nextStream, previousStream, selectedPetIndexStream});
const SelectedPet = React.createElement(SelectedPetFactory, {didReceivePet});
const App = React.createElement(AppFactory, {PetSelector, SelectedPet});

ReactDOM.render(App, document.getElementById('app'));

FetchPetSink.start(selectedPetIndexStream, didReceivePet);