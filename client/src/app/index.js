import React from 'react';
import ReactDOM from 'react-dom';

import App from './sinks/components/app';
import {createDidReceivePet} from './sources/network';
import {createNextStream, createPreviousStream} from './sources/intents'
import {createSelectedPetIndexStream} from './streams/selected_pet_index_stream';
import {FetchPetSink} from './sinks/network/fetch_pet_sink'

const nextStream = createNextStream();
const previousStream = createPreviousStream();
const didReceivePet = createDidReceivePet();
const selectedPetIndexStream = createSelectedPetIndexStream(nextStream, previousStream);

ReactDOM.render(<App nextStream={nextStream} previousStream={previousStream} selectedPetIndexStream={selectedPetIndexStream} didReceivePet={didReceivePet}/>, document.getElementById('app'));

FetchPetSink.start(selectedPetIndexStream, didReceivePet);