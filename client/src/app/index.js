import React from 'react';
import ReactDOM from 'react-dom';

import Application from './sinks/components/application';
import {fetchPetSink} from '../../src/app/sinks/network/fetch_pet_sink'

ReactDOM.render(<Application/>, document.getElementById('app'));

fetchPetSink.start();