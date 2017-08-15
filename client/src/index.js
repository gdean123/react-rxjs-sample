import React from 'react';
import ReactDOM from 'react-dom';

import Application from './presentation/application';
import {fetchPetSink} from './/sinks/network/fetch_pet_sink'

ReactDOM.render(<Application/>, document.getElementById('domain'));

fetchPetSink.start();