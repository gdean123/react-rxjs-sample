import React from 'react';
import ReactDOM from 'react-dom';

import {createDidReceivePetStream} from './sources/network';
import {createNextStream, createPreviousStream} from './sources/intents'
import {createSelectedPetIndexStream} from './streams/selected_pet_index_stream';

import {PetSelector} from './sinks/components/pet_selector'
import {SelectedPet} from './sinks/components/selected_pet'
import {App} from './sinks/components/app';

import {FetchPetSink} from './sinks/network/fetch_pet_sink'

const nextStream = createNextStream();
const previousStream = createPreviousStream();
const didReceivePetStream = createDidReceivePetStream();
const selectedPetIndexStream = createSelectedPetIndexStream(nextStream, previousStream);

const petSelector = React.createElement(PetSelector, {nextStream, previousStream, selectedPetIndexStream});
const selectedPet = React.createElement(SelectedPet, {didReceivePetStream});
const app = React.createElement(App, {petSelector, selectedPet});

const fetchPetSink = new FetchPetSink({selectedPetIndexStream, didReceivePetStream});

ReactDOM.render(app, document.getElementById('app'));

fetchPetSink.start();