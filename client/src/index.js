import React from 'react';
import ReactDOM from 'react-dom';

import Application from './presentation/application';
import {fetchPetSink} from './domain/sinks/fetch_pet_sink'

ReactDOM.render(<Application/>, document.getElementById('app'));

fetchPetSink.start();